delete from trip
where trip_id = $1;

RETURNING*