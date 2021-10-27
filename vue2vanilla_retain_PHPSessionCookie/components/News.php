<?php 
//example PHP validation on a Vue file
@session_start();

if (!isset($_SESSION['user'])) {
    echo '<template><div>';
    echo "<strong>server side validation</strong>";
    echo '</div></template>';
    exit;
}
?>

<template>
    <div>
<strong>-I know the John F. Kennedy murderer </strong> <br>
-good take me back to <router-link to="/user">Protected Area</router-link>
</div>
</template>
