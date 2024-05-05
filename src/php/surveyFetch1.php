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

// SQL query to select the column of integers
$sql = "SELECT age, hours FROM survey_data";

$result = $conn->query($sql);

$response = array();

if ($result->num_rows > 0) {
    
    $response = array();

    // Output data of each row
    while($row = $result->fetch_assoc()) {
        // Add row to data array
        $response[] = $row;
    }
} 
  
else {
    $response["error"] = "No results found";
}

echo json_encode($response);

$conn->close();

?>
