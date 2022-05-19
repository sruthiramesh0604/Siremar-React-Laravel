<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class updateUsers extends Controller
{
    public function uUsers(Request $request)
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
                $Name = $_POST['Name'];
                $place_of_birth = $_POST['place_of_birth'];
                $email_id = $_POST['email_id'];
                $date_of_birth = $_POST['date_of_birth'];
                $phone_number = $_POST['phone_number'];
                $userType = $_POST['userType'];
                $Password = $_POST['Password'];
                $confirm_password = $_POST['confirm_password'];
            
                $query = "UPDATE Users SET Name=" . "'$Name'" . ", place_of_birth=" . "'$place_of_birth'" . ", email_id=" . "'$email_id'" . ", date_of_birth=" . "'$date_of_birth'" . ", phone_number=" . "'$phone_number'" . ", userType=" . "'$userType'" . ", Password=" . "'$Password'" . ", confirm_password=" . "'$confirm_password'" . " WHERE id=" . "'$id'";
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
                            $Name = $_POST['Name'];
                            $place_of_birth = $_POST['place_of_birth'];
                            $email_id = $_POST['email_id'];
                            $date_of_birth = $_POST['date_of_birth'];
                            $phone_number = $_POST['phone_number'];
                            $userType = $_POST['userType'];
                            $Password = $_POST['Password'];
                            $confirm_password = $_POST['confirm_password'];
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
