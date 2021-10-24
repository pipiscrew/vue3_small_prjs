<template>
<strong> page not found {{ message }}</strong>  
</template>

<script>
    export default {
        data() {
            return {
                message : window.location.pathname,
            }
        }
    }

</script>