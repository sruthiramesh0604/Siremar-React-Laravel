<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class insertEvents extends Controller
{
    public function iEvents(Request $request)
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
            
                $stmt = $connection->prepare("INSERT INTO events (eventName, eventType, location, date, price, discount) VALUES (?, ?, ?, ?, ?, ?)");
            
                $stmt->bind_param("ssssss", $_POST['eventName'], $_POST['eventType'], $_POST['location'], $_POST['date'], $_POST['price'], $_POST['discount']);
            
                $stmt->execute();
            
            } catch (Exception $e) {
                echo $e->getMessage();
            }            
    }
}