<?php

$liste = array();
include('connect_db.php');
$result = mysql_query("SELECT id, pseudo, score FROM paper_plane_scores ORDER BY score DESC LIMIT 10");
$i = 1;
while ( $row = mysql_fetch_array($result)){

  $liste[$i] = array( 'pseudo' => $row[pseudo],
                                    'score' => $row[score]);
  $i++;
}
mysql_close();
header('Content-type: application/json');
echo json_encode($liste);


?>
