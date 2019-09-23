<?php

    $inResultName = $_POST["custName"];
    $inResultEmail = $_POST["custEmail"];
    $inResultPhone = $_POST["custPhone"];
    $inResultProducts = $_POST["custProducts"];
    $inResultComplaint = $_POST["custComplaint"];

?>

<!DOCTYPE html>
<html>
<head>

    <h1>WDV 321: Advanced Javascript</h1>

    <h2>Complaint Form Submission</h2>

    <p>Name: <?php echo $inResultName ?></p>

    <p>Email: <?php echo $inResultEmail ?></p>

    <p>Phone: <?php echo $inResultPhone ?></p>

    <p>Product: <?php echo $inResultProducts ?></p>

    <p>Complaint: <?php echo $inResultComplaint ?></p>

    <p><a href="complaintForm.htm">Go Back to Form</a></p>
  
</head>
<body>


</body>
</html>