DELETE FROM trip
WHERE trip_id = $1;

SELECT * FROM trip;

DELETE FROM stops
where trip_id = $1;