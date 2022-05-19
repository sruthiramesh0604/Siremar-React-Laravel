<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class updateMoveOut extends Controller
{
    public function uMoveOut(Request $request)
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
    $userId = $_POST['userId'];
    $moveOutDate = $_POST['moveOutDate'];
    $currentLocation = $_POST['currentLocation'];

    $query = "UPDATE moveOut SET userId=" . "'$userId'" . ", moveOutDate=" . "'$moveOutDate'" . ", currentLocation=" . "'$currentLocation'" . " WHERE id=" . "'$id'";
    echo $query;
    $result = $conn->query($query);
    if ($result == true) {
        echo "Record updated!";

        // fetch data and send to frontend
        $id = $_GET['Id'];
        $query = "SELECT * FROM flights WHERE id=$id";
        $result = $conn->query($query);
        if ($result->numRows > 0) {
            while ($row = $result->fetch_assoc()) {
                $userId = $_POST['userId'];
                $moveOutDate = $_POST['moveOutDate'];
                $currentLocation = $_POST['currentLocation'];
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
