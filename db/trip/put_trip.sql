UPDATE trip
SET
    (origin, destination, mileage, user_id, fuel_expenses) = ($2, $3, $4, $5, $6)
WHERE
    (trip_id) = $1;

UPDATE stops
SET
    column1 = $7, column2 = $8, column3 = $9


SELECT * FROM trip;