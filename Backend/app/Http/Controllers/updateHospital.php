<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class updateHospital extends Controller
{
    public function uHospital(Request $request)
    {
        $_POST = $request;

        try {
            // Check connection
            $servername = "utacloud3.reclaimhosting.com";
            $username = "sst0847_siremar";
            $password = "Group24sps";
            $database = "sst0847_backend";

            $_POST = $request->all();

            // Create connection
            $connection = mysqli_connect($servername, $username, $password, $database);

            if (!$connection) {
                die("Connection failed: " . mysqli_connect_error());
            }

            if ($connection->connect_errno) {
                echo "Failed to connect to MySQL: " . $connection->connect_error;
                exit();
            }

            $id = $_GET['id'];
            if (isset($_POST['update'])) {
                // if (true) {
                $name = $_POST['name'];
                $location = $_POST['location'];
                $startTime = $_POST['startTime'];
                $endTime = $_POST['endTime'];
                $headDoctor = $_POST['headDoctor'];
            
                $query = "UPDATE hospital SET name=" . "'$name'" . ", location=" . "'$location'" . ", startTime=" . "'$startTime'" . ", endTime=" . "'$endTime'" . ", headDoctor=" . "'$headDoctor'" . " WHERE id=" . "'$id'";
                echo $query;
                $result = $conn->query($query);
                if ($result == true) {
                    echo "Record updated!";
            
                    // fetch data and send to frontend
                    $id = $_GET['id'];
                    $query = "SELECT * FROM flights WHERE id=$id";
                    $result = $conn->query($query);
                    if ($result->numRows > 0) {
                        while ($row = $result->fetch_assoc()) {
                            $name = $_POST['name'];
                            $location = $_POST['location'];
                            $startTime = $_POST['startTime'];
                            $endTime = $_POST['endTime'];
                            $headDoctor = $_POST['headDoctor'];
                        }
                    }
            
                } else {
                    echo "Error occured!" . $query . "<br>" . $conn->error;
                }
            }

        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }
}
