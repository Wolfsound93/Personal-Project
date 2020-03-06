INSET INTO trip
    (user_id, origin, destination, fuel_total_id, milage_id)
VALUES
    ($1, $2, $3, $4, $5);

SELECT * FROM trip;