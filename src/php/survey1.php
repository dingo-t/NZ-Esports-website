<?php

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Database info
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "surveydata";

// Creates connection
$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// data fetched from the POST request
$age = $_POST['age'];
$hoursPlayed = $_POST['hoursPlayed'];
$region = $_POST['region'];

// SQL query to insert data 
$stmt = $conn->prepare("INSERT INTO survey_data (age, hours, region) VALUES (?, ?, ?)");
$stmt->bind_param("iss", $age, $hoursPlayed, $region);

// Execute the query
if ($stmt->execute()) {
    echo "Data inserted successfully";
} else {
    echo "Error: " . $stmt->error;
}

// statement closed
$stmt->close();

// connection closed
$conn->close();
?>
