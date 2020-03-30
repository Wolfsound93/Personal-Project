CREATE TABLE trips (
    trip_id SERIAL PRIMARY KEY NOT NULL,
    user_id INT,
    origin VARCHAR(255),
    destination VARCHAR(255),
    milage FLOAT,
    stop_id INT references  stops(stop_id)
)