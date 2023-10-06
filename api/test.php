<?php
// Replace with your database credentials
$servername = "localhost";
$username = "root";
$password = "123";
$dbname = "gigiberidze";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
echo gethostbyname("host.name.tld");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch data from the 'test' table
$sql = "SELECT * FROM test";
$result = $conn->query($sql);

$data = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

$conn->close();

// Return data as JSON
header('Access-Control-Allow-Origin: *');
echo json_encode($data);
?>