<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class insertUsers extends Controller
{
    public function iUsers(Request $request)
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
            
                $stmt = $connection->prepare("INSERT INTO Users (Name, place_of_birth, email_id, date_of_birth, phone_number, userType, Password, confirm_password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
            
                $stmt->bind_param("ssssssss", $_POST['Name'], $_POST['place_of_birth'], $_POST['email_id'], $_POST['date_of_birth'], $_POST['phone_number'], $_POST['userType'], $_POST['Password'], $_POST['confirm_password']);
            
                $stmt->execute();
            
            } catch (Exception $e) {
                echo $e->getMessage();
            }            
    }
}