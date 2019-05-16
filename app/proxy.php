<?php

$url = $_GET['url'];

$body = file_get_contents($url);

header('Content-Type: application/json');

echo $body;