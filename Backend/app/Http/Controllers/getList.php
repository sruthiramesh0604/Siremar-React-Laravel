<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class getList extends Controller
{
    public function gList(Request $request)
    {
        $_POST = $request;

        try {
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

            $tableName = $_POST['table'];

            $sql = "SELECT * FROM $tableName";
            // $sql = "SELECT 'id', name FROM users";
            $result = $connection->query($sql);

            if ($result->num_rows > 0) {
                $rows = [];
                $index = 0;
                // output data of each row
                while ($row = $result->fetch_assoc()) {
                    $rows[$index] = $row;
                    $index++;
                }
                print_r(json_encode($rows));

            } else {
                echo "0 results";
            }

        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }
}
