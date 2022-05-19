<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class insertHospital extends Controller
{
    public function iHospital(Request $request)
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
            
                $stmt = $connection->prepare("INSERT INTO hospital (name, location, startTime, endTime, headDoctor) VALUES (?, ?, ?, ?, ?)");
            
                $stmt->bind_param("sssss", $_POST['name'], $_POST['location'], $_POST['startTime'], $_POST['endTime'], $_POST['headDoctor']);
            
                $stmt->execute();
            
            } catch (Exception $e) {
                echo $e->getMessage();
            }            
    }
}