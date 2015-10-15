<?php

$sth = mysqli_query("select * from tweets;");
$rows = array();
while($r = mysqli_fetch_assoc($sth)) {
    $rows[] = $r;
}
print json_encode($rows);


 ?>
