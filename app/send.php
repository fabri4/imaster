<?php

$mails = array('order.imaster@gmail.com');
define('MAIL_SUBJECT', 'Новая заявка с сайта iMaster');

$headers   = array();

$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-type: text/plain; charset=utf-8";
$headers[] = "X-Mailer: PHP/".phpversion();

(isset($_POST['name'])) ? $name = 'Имя заказчика: ' . htmlspecialchars($_POST['name']) . "\n": $name = '';
(isset($_POST['tel'])) ? $phone = 'Телефон заказчика: ' . htmlspecialchars($_POST['tel']) . "\n": $phone = '';
(isset($_POST['from'])) ? $from = 'Точка захвата: ' . htmlspecialchars($_POST['from']) . "\n": $from = '';

(isset($_POST['model'])) ? $model = 'Модель: ' . htmlspecialchars($_POST['model']) . "\n": $model = '';
(isset($_POST['problem'])) ? $problem = 'Тип неисправности: ' . htmlspecialchars($_POST['problem']) . "\n": $problem = '';
(isset($_POST['time'])) ? $time = 'Время ремонта: ' . htmlspecialchars($_POST['time']) . "\n": $time = '';
(isset($_POST['cost'])) ? $cost = 'Стоимость: ' . htmlspecialchars($_POST['cost']) . "\n": $cost = '';



$result = true;

foreach ($mails as $val) {
    if (!mail($val, MAIL_SUBJECT, $name . $phone . $from . $model . $problem . $time . $cost, implode("\r\n", $headers))) {
        $result = false;
        break;
    }
}

if ($result) { echo 'OK'; }
?>