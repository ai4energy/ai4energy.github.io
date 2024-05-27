<?php
$recipient = 'your@email.com'; // Enter the recipient's email address here.
$subject   = 'New contact sent from the website.'; // Enter the subject of the email here.
$success   = 'Your message was sent successful. Thanks.';
$error     = 'Sorry. We were unable to send your message.';
$invalid   = 'Validation errors occurred. Please confirm the fields and submit it again.';

if ( ! empty( $_POST ) ) {

    require_once('recaptcha.php');

    if( isset( $_POST['email'] ) ) {
        $from = filter_var( $_POST['email'], FILTER_VALIDATE_EMAIL );
    } else {
        $from = null;
    }

    if ( ! empty( $_POST['reCAPTCHA'] ) ) {

        if ( ! empty( $reCAPTCHA['success'] ) ) {
            $errCaptcha = '';

        } else {
            $errCaptcha = true;
        }
     
    } else {
        $errCaptcha = '';            
    }

    $errFields = array();

    foreach( $_POST as $key => $value ) {
        if ( $key != 'section' && $key != 'reCAPTCHA' ) {

            if ( $key == 'email' ) {
                $validation = filter_var( $_POST[$key], FILTER_VALIDATE_EMAIL );
            } else {                
                $validation = ! empty( $_POST[$key] );
            }
            
            if ( ! $validation ) {
                $errFields[$key] = true;
            } 
        }
    }

    if ( empty( $errCaptcha ) && count( $errFields ) === 0 ) {
            
        $header  = "From: " . $from . " <" . $from . ">" . "\r\n";
        $header .= "MIME-Version: 1.0\r\n";
        $header .= "Content-type: text/html\r\n";

        $body  = '<table style="padding: 35px; background-color: #f5f5f5"; font-family: Roboto, sans-serif; font-size: 1rem; text-align: left; border-radius: 4px>';
        $body .= '<tr><th style="font-size: 1.5rem; font-weight: 600; color: #1E50BC">'.$subject.'</th></tr>';
        $body .= '<tr></td>';

        foreach( $_POST as $key => $value ) {
            if ( $key != 'section' && $key != 'reCAPTCHA' ) {
                $body .= '<p><b>' . str_replace( '-', ' ', ucfirst( $key ) ) . '</b>: ' .  $value . '</p>';
            }
        }

        $body .= '</td></tr>';        
        $body .= '</table>';

        $mail = mail( $recipient, $subject, $body, $header );

        if ( $mail ) {
            $response = array(
                'status'  => 'success',
                'info'    => $success
            );
        
            print_r( json_encode( $response ) );

        } else {
            $response = array(
                'status' => 'fail',
                'info'   => $error
            );
        
            print_r( json_encode( $response ) );
        }

    } else {

        $response = array(
            'status'  => 'invalid',
            'info'    => $invalid,
            'captcha' => $errCaptcha,
            'fields'  => $errFields,
            'errors'  => count( $errFields )
        );

        print_r( json_encode( $response ) );
    }
    
    exit;
}