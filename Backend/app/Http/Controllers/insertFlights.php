<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class insertFlights extends Controller
{
    public function iFlights(Request $request)
    {
        try {
            $_POST = $request->all();
            // Check connection
            $servername = "utacloud3.reclaimhosting.com";
            $username = "sst0847_siremar";
            $password = "Group24sps";
            $database = "sst0847_backend";

            // Create connection
            $connection = mysqli_connect($servername, $username, $password, $database);

            if (!$connection) {
                die("Connection failed: " . mysqli_connect_error());
            }

            if ($connection->connect_errno) {
                echo "Failed to connect to MySQL: " . $connection->connect_error;
                exit();
            }
            
                $stmt = $connection->prepare("INSERT INTO flights (flightNumber, departureTime, arrivalTime, departureLocation, arrivalLocation) VALUES (?, ?, ?, ?, ?)");
            
                $stmt->bind_param("sssss", $_POST['flightNumber'], $_POST['departureTime'], $_POST['arrivalTime'], $_POST['departureLocation'], $_POST['arrivalLocation']);
            
                $stmt->execute();
            
            } catch (Exception $e) {
                echo $e->getMessage();
            }            
    }
}