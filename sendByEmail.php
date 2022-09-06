<?php
if(isset($_POST['email'])) {

// Debes editar las próximas dos líneas de código de acuerdo con tus preferencias
$email_to = "ventas@fujitec.com.ar";
$email_subject = "Contacto desde el sitio web";

// Aquí se deberían validar los datos ingresados por el usuario
if(!isset($_POST['form_name']) ||
!isset($_POST['form_company']) ||
!isset($_POST['form_mail']) ||
!isset($_POST['form_tel']) ||
!isset($_POST['form_cont'])) {

echo "<b>Ocurrió un error y el formulario no ha sido enviado. </b><br/>";
echo "Por favor, vuelva atrás y verifique la información ingresada<br/>";
die();
}

$email_message = "Detalles del formulario de contacto:\n\n";
$email_message .= "Nombre y apellido: " . $_POST['form_name'] . "\n";
$email_message .= "Empresa: " . $_POST['form_company'] . "\n";
$email_message .= "E-mail: " . $_POST['form_mail'] . "\n";
$email_message .= "Teléfono: " . $_POST['form_tel'] . "\n";
$email_message .= "Comentarios: " . $_POST['form_cont'] . "\n\n";

// Ahora se envía el e-mail usando la función mail() de PHP
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);

echo "¡El formulario se ha enviado con éxito!";
}
?>