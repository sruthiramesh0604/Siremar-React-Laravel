<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class delete extends Controller
{
    public function delete(Request $request)
    {
        $servername = "utacloud3.reclaimhosting.com";
        $username = "sst0847_siremar";
        $password = "Group24sps";
        $database = "sst0847_backend";

        // Create connection
        $conn = mysqli_connect($servername, $username, $password, $database);

        // Check connection
        if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
        }

        $tableName = $request['table'];
        $id = $request['id'];
        $sql = "DELETE FROM $tableName WHERE id= $id";
        $result = $conn->query($sql);
        var_dump($result);
    }
}
