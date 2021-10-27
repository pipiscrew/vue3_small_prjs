<template>
  <div>
    <strong> Protected Area </strong>
    <br />
    <button @click="logout()" class="btn btn-outline-danger">log off</button>
    <router-link to="/news">see the secret</router-link>
  </div>
</template>

<script>
module.exports = {
  methods: {
    async logout() {
      
      let formData = new FormData();
      formData.append("logoff", true);

      let url = "api/auth.php";

      const { response } = await general.GetLogin(url, formData);

      if (response) {
        if (!response.success) {
          alert("Catastrophic Error!");
        } else {
          router.push({ name: "login" });
        }
      } else {
        alert("Error");
        router.push({ name: 'login' })
      }
    },
  },
};
</script>