<?php
    use PHPMailer\PHPMailer\PHPMailer;
    $checkbox1 = $_POST['mobile-application-design'];
    $checkbox2 = $_POST['web-application-design'];
    $checkbox3 = $_POST['website-design'];
    $checkbox4 = $_POST['landing-page'];

    $priceFrom = $_POST['price-from'];
    $priceTo = $_POST['price-to'];

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // $attachment = $_POST['upload'];

    require_once "PHPMailer/PHPMailer.php";
    require_once "PHPMailer/SMTP.php";
    require_once "PHPMailer/Exception.php";

    $mail = new PHPMailer();

    $mail->Host = "localhost";
    $mail->Port = 25;

    $mail->isHTML(true);
    $mail->setFrom('pinkymoon.lol@gmail.com');
    $mail->addAddress('pinkymoon.lol@gmail.com');
    $mail->addBCC('info@orangeorange.agency'); // where the emails will go

    $mail->addAttachment($_FILES['upload']['tmp_name'], $_FILES['upload']['name']);

    $mail->Subject = ("$email ($name)");
    $mail->Body = 'Mobile Application Design: ' . $checkbox1 . '<br>' .
    'Web Application Design: ' . $checkbox2 . '<br>' .
    'Website Design: ' . $checkbox3 . '<br>' .
    'Landing Page: ' . $checkbox4 . '<br> <br>' .
    'Budget: ' . $priceFrom . ' - ' . $priceTo . '<br> <br>' .
    'Name: ' . $name . '<br>' .
    'Email: ' . $email . '<br>' .
    'Message: ' . $message . '<br>';


    if ($mail->send()) {
      header('location: thankyou.html');
    } else {
      echo 'Error';
    }

    exit(json_encode(array("status" => $status, "response" => $response)));
?>
