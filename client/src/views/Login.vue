<template>
  <div class="page-wrapper page">
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm";
export default {
  name: "Login",
  components: {
    LoginForm
  }
};
</script>

<style scoped>
.page-wrapper {
  height: 100vh;
  background: -webkit-linear-gradient(top, #654a86, #534292);
  background-image: linear-gradient(to bottom, #654a86, #534292);
  background-color: #534292;
}
</style>
