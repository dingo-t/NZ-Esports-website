<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Database configuration
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "surveydata";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch data from POST request
$age = $_POST['age'];
$hoursPlayed = $_POST['hoursPlayed'];
$region = $_POST['region'];

// Prepare SQL query to insert data into a table (assuming you have a table named 'players' with columns 'age', 'hours_played', and 'city')
$stmt = $conn->prepare("INSERT INTO survey_data (age, hours, region) VALUES (?, ?, ?)");
$stmt->bind_param("iss", $age, $hoursPlayed, $region);

// Execute the query
if ($stmt->execute()) {
    echo "Data inserted successfully";
} else {
    echo "Error: " . $stmt->error;
}

// Close the statement
$stmt->close();

// Close the connection
$conn->close();
?>
