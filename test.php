<?php

echo 'my name is salehin';
define("DB_PASS", '');
define("DB_USER", 'root');
define("DB_NAME", 'cms');
define("DB_HOST", 'localhost');

$connection = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);
if ($connection) {
    echo 'connected';
} else {
    throw new Exception('failed');
}
$query = "SELECT * FROM cms WHERE name='salehin'";
$selcetAllQuery = mysqli_query($connection, $query);
if (!$selcetAllQuery) {
    echo mysqli_error($connection);
}
mysqli_close($connection);