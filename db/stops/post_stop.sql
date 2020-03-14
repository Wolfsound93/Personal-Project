INSERT INTO stops 
(fuel_stops, total_spent, receipt, trip_id)
values
($1, $2, $3, $4)
returning*
