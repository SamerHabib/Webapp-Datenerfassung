<html>
<body>

<?php
var_dump( $_POST );
    $file = "Bestellungen.csv";
    $current = file_get_contents($file);
    $current .= $_POST['Größe'].', '.$_POST['Straße'].', '.$_POST['Postleitzahl'].', '.$_POST['Stadt'].', '.$_POST['Mail']."\n";
    file_put_contents($file, $current);
?>

</body>
</html>