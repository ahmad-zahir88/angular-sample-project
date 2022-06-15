<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$uri = parse_url($_SERVER['REQUEST_URI'],PHP_URL_PATH);
$uri = explode('/',$uri);

$request_method = $_SERVER["REQUEST_METHOD"];
$con = mysqli_connect("localhost","root","","Angular_Sample_Database");
if($con){
    if ($request_method=="GET"){
        if (isset($_GET["id"])){
            $sql = "SELECT * FROM Users WHERE id=" . $_GET["id"];
        }
        else{
            $sql = "SELECT * FROM Users";
        }
        $response = array();
        $result = mysqli_query($con,$sql);

        if($result){
            $i = 0;
            while($row = mysqli_fetch_assoc($result)){
                $response[$i]['id'] = $row['id'];
                $response[$i]['fullname'] = $row['fullname'];
                $response[$i]['dob'] = $row['dob'];
                $response[$i]['email'] = $row['email'];
                $response[$i]['address'] = $row['address'];
                $response[$i]['gender'] = $row['gender'];
                $response[$i]['occupation'] = $row['occupation'];
                $response[$i]['created_at'] = $row['created_at'];
                $i++;
            }
            if (empty($response)){
                $response['error'] = 'the requested user is not found';
            }
            echo json_encode($response,JSON_PRETTY_PRINT);
        }
    }
    // Not checked against 'rogue' entry
    else if($request_method=="POST"){
        $response = array();
        $post = json_decode(file_get_contents('php://input'), true);
        if (isset($post["id"])){
            $sql = "UPDATE Users 
                    SET
                    fullname= '".str_replace(PHP_EOL,"",$post['fullname'])."',
                    dob='".$post['dob']."', 
                    email='".$post['email']."',
                    address= '".str_replace(PHP_EOL,"",$post['address'])."',
                    gender= ".$post['gender'].",
                    occupation= '".$post['occupation']."'
                    WHERE 
                    id=".$post["id"];
        }
        else{
            $sql = "INSERT INTO Users 
                    (fullname,dob,email,address,gender,occupation) 
                    VALUES
                    ('".str_replace(PHP_EOL,"",$post['fullname'])."', '".$post['dob']."', '".$post['email']."', '".str_replace(PHP_EOL,"",$post['address'])."', ".$post['gender'].", '".$post['occupation']."')";
        }
        $result = mysqli_query($con,$sql);

        if (isset($result)){
            echo json_encode($result,JSON_PRETTY_PRINT);
        }
    }
}   
?>