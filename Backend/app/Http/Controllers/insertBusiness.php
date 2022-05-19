<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class insertBusiness extends Controller
{
    public function iBusiness(Request $request)
    {
        $_POST = $request;
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
            
                $stmt = $connection->prepare("INSERT INTO business (Name, Owner, Type, Investment, StartedOn) VALUES (?, ?, ?, ?, ?)");
            
                $stmt->bind_param("sssss", $_POST['Name'], $_POST['Owner'], $_POST['Type'], $_POST['Investment'], $_POST['StartedOn']);
            
                $stmt->execute();
                echo "Business inserted";
                
            } catch (Exception $e) {
                echo $e->getMessage();
            }            
    }
}
