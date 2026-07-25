CREATE TABLE authors (
user_id SERIAL PRIMARY KEY,
email VARCHAR(60) UNIQUE NOT NULL,
password_hash VARCHAR(255) NOT NULL,
is_active BOOLEAN DEFAULT TRUE,
created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP

);CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) UNIQUE NOT NULL, -- Increased 60 to 255 because long API titles will break 60!
    price DECIMAL(10,2) NOT NULL,
    description TEXT,                   -- Fixed spelling
    category VARCHAR(100),              -- Fixed spelling
    image TEXT,
    rating JSONB                        -- Fixed to JSONB and removed the trailing comma
);