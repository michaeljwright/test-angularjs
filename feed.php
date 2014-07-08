<?php header('content-type: application/json; charset=utf-8');
header("access-control-allow-origin: *");?>
JSON_CALLBACK(<?php echo trim(file_get_contents(__DIR__ . "/feed.json"));?>)