UPDATE trip
SET
    (fuel_stops, total_spent, receipt, trip_id) = ($2, $3, $4, $5)
WHERE
    (stops_id) = $1;

UPDATE stops
SET
    column1 = $6, column2 = $7, column3 = $8, column4 = $9


SELECT * FROM trip;