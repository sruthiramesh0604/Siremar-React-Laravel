<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class updateEvents extends Controller
{
    public function uEvents(Request $request)
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
                $eventName = $_POST['eventName'];
                $eventType = $_POST['eventType'];
                $location = $_POST['location'];
                $date = $_POST['date'];
                $price = $_POST['price'];
                $discount = $_POST['discount'];
            
                $query = "UPDATE events SET eventName=" . "'$eventName'" . ", eventType=" . "'$eventType'" . ", location=" . "'$location'" . ", date=" . "'$date'" . ", price=" . "'$price'" . ", discount=" . "'$discount'" . " WHERE id=" . "'$id'";
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
                            $eventName = $_POST['eventName'];
                            $eventType = $_POST['eventType'];
                            $location = $_POST['location'];
                            $date = $_POST['date'];
                            $price = $_POST['price'];
                            $discount = $_POST['discount'];
                        }
                    }
            
                } else {
                    echo "Error occured!" . $query . "<br>" . $conn->error;
                }
            }
          
    }
}
