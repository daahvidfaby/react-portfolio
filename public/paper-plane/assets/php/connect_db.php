<?php

// Vars
$mysqlserver = 'davidfabpg1.mysql.db';
$mysqluser = 'davidfabpg1';
$mysqldatabase = 'davidfabpg1';
$mysqlpass = 'Elephant666';

// Connect
$connection = mysql_connect($mysqlserver, $mysqluser, $mysqlpass) or die(mysql_error());
mysql_select_db($mysqldatabase, $connection) or die(mysql_error());

?>
