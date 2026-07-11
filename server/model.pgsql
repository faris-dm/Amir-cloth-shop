















CREATE TABLE authors (
    -- Fixed: Added SERIAL data type, removed hanging DEFAULT
    user_id SERIAL PRIMARY KEY,
    -- Fixed: Added missing comma at the end of this line
    email VARCHAR(255) UNIQUE NOT NULL, 
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(60) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);