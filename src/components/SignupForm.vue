<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      required
      placeholder="display name"
      v-model="displayName"
    />
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button class="btn-feedback">Sign up</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useSignup from "../composables/useSignup";

export default {
  setup() {
    const { error, signup } = useSignup();

    // refs
    const email = ref("");
    const password = ref("");
    const displayName = ref("");

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value);
      console.log("User signed up");
    };

    return { email, password, displayName, handleSubmit, error };
  },
};
</script>

<style scoped>
.error {
  color: #ff3f80;
  font-size: 14px;
}
</style>