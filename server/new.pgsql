-- ✅ Corrected SQL:







ALTER TABLE orders
  ADD COLUMN full_name VARCHAR(255),
  ADD COLUMN email VARCHAR(255),
  ADD COLUMN phone VARCHAR(50);

CREATE TABLE authors (
user_id SERIAL PRIMARY KEY,
email VARCHAR(60) UNIQUE NOT NULL,
password_hash VARCHAR(255) NOT NULL,
is_active BOOLEAN DEFAULT TRUE,
created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP

);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) UNIQUE NOT NULL, -- Increased 60 to 255 because long API titles will break 60!
    price DECIMAL(10,2) NOT NULL,
    description TEXT,                   -- Fixed spelling
    category VARCHAR(100),              -- Fixed spelling
    image TEXT,
    rating JSONB                        -- Fixed to JSONB and removed the trailing comma
);




CREATE  TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES authors(user_id),
    amount NUMERIC(10,2) NOT NULL,
    status VARCHAR(60) DEFAULT 'pending',
    address VARCHAR(100),
    shipping_address TEXT NOT NULL,                                   -- Unified address field name
    payment_method VARCHAR(60) NOT NULL DEFAULT 'Cash on Delivery',
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)


--   this table is used for storing elements in   that the used is added in the cart
CREATE TABLE Cart (
    id  SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES authors(user_id) ON DELETE CASCADE,
    item_id INT NOT NULL REFERENCES products(id) ON  DELETE CASCADE,
    qantity INT NOT NULL DEFAULT 1 CHECK (qantity > 0),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, item_id)
)

--  this below table used  for storing the items  which the user orderd
CREATE TABLE order_items (
  id SERIAL PRIMARY KEY,
  order_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL CHECK (quantity > 0),
  price_at_purchase DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE RESTRICT
);


--  this   table is used  for s toreing  images that describe about the onr image
CREATE TABLE product_images (
    id SERIAL PRIMARY KEY,
    product_id INTEGER NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    image_url TEXT NOT NULL,
    position INTEGER DEFAULT 0   -- controls display order 
);



