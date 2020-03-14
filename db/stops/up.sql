CREATE TABLE stops(
    stop_id SERIAL PRIMARY KEY NOT NULL,
    stop_location VARCHAR(300),
    fuel_amount float,
    receipt_img_url TEXT
)