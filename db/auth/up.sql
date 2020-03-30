CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    trip_id INT references trips(trip_id)
    user_email VARCHAR(200) NOT NULL,
    first_name VARCHAR(200) NOT NULL,
    hash TEXT NOT NULL
)