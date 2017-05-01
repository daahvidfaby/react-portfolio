<?php

    $pseudo = htmlspecialchars($_POST['pseudo']);
    $score = htmlspecialchars($_POST['score']);

    include('connect_db.php');
    $sql = 'INSERT INTO paper_plane_scores(pseudo, score) VALUES("'.$pseudo.'","'.$score.'")';
    mysql_query($sql) or die('Erreur SQL !'.$sql.'<br>'.mysql_error());

?>
