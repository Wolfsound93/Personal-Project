INSERT INTO trip 
( origin, destination, mileage, user_id, fuel_expenses, fuel_stops_location)
values
($1, $2, $3, $4, $5, $6)
returning*




-- INSERT INTO trip
--     (user_id, origin, destination, fuel_total_id, receipt_id, milage, fuel_stops_id)
-- VALUES
--     ($1, $2, $3, $4, $5, $6, $7)

-- -- SELECT * FROM trip
-- -- WHERE user_id = $1
-- RETURNING*