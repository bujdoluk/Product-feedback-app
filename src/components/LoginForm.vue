<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button class="btn-feedback">Log in</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useLogin from "../composables/useLogin";
import { useRouter } from "vue-router";

export default {
  setup() {
    // refs

    const email = ref("");
    const password = ref("");

    const router = useRouter();

    const { error, login } = useLogin();

    const handleSubmit = async () => {
      await login(email.value, password.value);
      if (!error.value) {
        console.log("User logged in");
        router.push("/");
      }
    };

    return { email, password, handleSubmit };
  },
};
</script>

<style scoped>
.error {
  color: #ff3f80;
  font-size: 14px;
}
</style>