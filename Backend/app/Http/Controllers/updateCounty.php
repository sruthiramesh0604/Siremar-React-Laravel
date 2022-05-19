<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class updateCounty extends Controller
{
    public function uCounty(Request $request)
    {
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
    $registeredBy = $_POST['registeredBy'];
   
    $query = "UPDATE schools SET name=" . "'$name'" . ", location=" . "'$location'" . ", registeredBy=" . "'$registeredBy'" . " WHERE id=" . "'$id'";
    echo $query;
    $result = $conn->query($query);
    if ($result == true) {
        echo "Record updated!";

        // fetch data and send to frontend
        $id = $_GET['id'];
        $query = "SELECT * FROM schools WHERE id=$id";
        $result = $conn->query($query);
        if ($result->numRows > 0) {
            while ($row = $result->fetch_assoc()) {
                $name = $_POST['name'];
                $location = $_POST['location'];
                $registeredBy = $_POST['registeredBy'];
            }
        }

    } else {
        echo "Error occured!" . $query . "<br>" . $conn->error;
    }
}
    }
}
