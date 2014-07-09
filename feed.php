<?php 
	header('content-type: application/javascript; charset=utf-8');
	header("access-control-allow-origin: *");
    $callback = $_GET['jsonp'] ? $_GET['jsonp'] : 'JSON_CALLBACK';
    $feed = '{"data": [
		  { "id": 242342, "title": "This is a test and we love test a lot. Haduken!","url": "http://google.com","userid": "eyr75i8dr5", "opt1": 11111, "opt2": 22222, "imgurl": "http://placehold.it/335x250"},
		  { "id": 242342, "title": "This is a test and we love test a lot. Haduken!","url": "http://google.com","userid": "eyr75i8dr5", "opt1": 11111, "opt2": 22222, "imgurl": "http://placehold.it/335x250"},
		  { "id": 242342, "title": "This is a test and we love test a lot. Haduken!","url": "http://google.com","userid": "eyr75i8dr5", "opt1": 11111, "opt2": 22222, "imgurl": "http://placehold.it/335x250"},
		  { "id": 242342, "title": "This is a test and we love test a lot. Haduken!","url": "http://google.com","userid": "eyr75i8dr5", "opt1": 11111, "opt2": 22222, "imgurl": "http://placehold.it/335x250"},
		  { "id": 242342, "title": "This is a test and we love test a lot. Haduken!","url": "http://google.com","userid": "eyr75i8dr5", "opt1": 11111, "opt2": 22222, "imgurl": "http://placehold.it/335x250"},
		  { "id": 242342, "title": "This is a test and we love test a lot. Haduken!","url": "http://google.com","userid": "eyr75i8dr5", "opt1": 11111, "opt2": 22222, "imgurl": "http://placehold.it/335x250"},
		  { "id": 242342, "title": "This is a test and we love test a lot. Haduken!","url": "http://google.com","userid": "eyr75i8dr5", "opt1": 11111, "opt2": 22222, "imgurl": "http://placehold.it/335x250"},
		  { "id": 242342, "title": "This is a test and we love test a lot. Haduken!","url": "http://google.com","userid": "eyr75i8dr5", "opt1": 11111, "opt2": 22222, "imgurl": "http://placehold.it/335x250"},
		  { "id": 242342, "title": "This is a test and we love test a lot. Haduken!","url": "http://google.com","userid": "eyr75i8dr5", "opt1": 11111, "opt2": 22222, "imgurl": "http://placehold.it/335x250"}
		]}';
    echo $callback . '(' .  $feed . ');';