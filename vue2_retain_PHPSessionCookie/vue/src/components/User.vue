<template>
  <div>
    <strong> Protected Area </strong>
    <br />
    <button @click="logout()" class="btn btn-outline-danger">log off</button>
  </div>
</template>

<script>
import general from "../general";
import router from "../router";

export default {
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
      }
    },
  },
};
</script>