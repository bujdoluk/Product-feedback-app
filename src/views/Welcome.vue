<template>
  <div class="welcome">
    <div v-if="showLogin">
      <LoginForm />
      <p>
        No account yet? <span @click="showLogin = false">Sign up</span> instead
      </p>
    </div>
    <div v-else>
      <SignupForm />
      <p>
        Already registered?
        <span @click="showLogin = true">Login</span> instead
      </p>
    </div>
    <div>
      <router-link :to="{ name: 'Home' }">
        <button class="btn-feedback">Browse as Guest</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
import SignupForm from "../components/SignupForm.vue";
import { ref } from "vue";

export default {
  name: "Welcome",
  components: { SignupForm, LoginForm },
  setup() {
    const showLogin = ref(true);

    return { showLogin };
  },
};
</script>

<style >
.welcome {
  height: 100vh;
  width: 100vw;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
/* form styles */
form {
  width: 300px;
  margin: 20px auto;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}
span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
button {
  margin: 20px auto;
}

.btn-feedback {
  width: 154px;
  height: 44px;
  border: none;
  margin: 14px 16px;
  border-radius: 10px;
  background-color: #ad1fea;
  color: white;
  font-weight: bold;
}

@media only screen and (max-width: 375px) {
  .btn-feedback {
    width: 134px;
    height: 40px;
  }
}

.btn-feedback:hover {
  background-color: #c75af6;
  cursor: pointer;
}
</style>