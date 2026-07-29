














CREATE TABLE authors (
    -- Fixed: Added SERIAL data type, removed hanging DEFAULT
    user_id SERIAL PRIMARY KEY,
  
    email VARCHAR(255) UNIQUE NOT NULL, 
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(60) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
-- DROP TABLE IF EXISTS products


CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) UNIQUE NOT NULL, -- Increased 60 to 255 because long API titles will break 60!
    price DECIMAL(10,2) NOT NULL,
    description TEXT,                   -- Fixed spelling
    category VARCHAR(100),              -- Fixed spelling
    image TEXT,
    rating JSONB                        -- Fixed to JSONB and removed the trailing comma
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(id), -- Changed from authors(id) to users(id)
  amount NUMERIC(10,2) NOT NULL,
  status VARCHAR(60) DEFAULT 'pending',
  address VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES authors(user_id), -- Changed from authors(id) to users(id)
  amount NUMERIC(10,2) NOT NULL,
  status VARCHAR(60) DEFAULT 'pending',
  address VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);