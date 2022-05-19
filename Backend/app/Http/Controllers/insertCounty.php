<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class insertCounty extends Controller
{
    public function iCounty(Request $request)
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

            $stmt = $connection->prepare("INSERT INTO county (name, population, business, hospital, event, school) VALUES (?, ?, ?, ?, ?, ?)");

            $stmt->bind_param("ssssss", $_POST['name'], $_POST['population'], $_POST['business'], $_POST['hospital'], $_POST['event'], $_POST['school']);

            $stmt->execute();

        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }
}
