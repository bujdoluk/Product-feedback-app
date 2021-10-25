<template>
  <nav class="logout" v-if="user">
    <div class="greeting">
      <p>Hi there {{ user.displayName }}</p>
    </div>
    <div>
      <button class="btn-logout" @click="handleClick">Log out</button>
    </div>
  </nav>
  <div class="content">
    <div class="back">
      <div>
        <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6 9L2 5l4-4"
            stroke="#4661E6"
            stroke-width="2"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
      </div>

      <div class="goback">
        <router-link :to="{ name: 'Home' }">
          <button class="goback">Go Back</button>
        </router-link>
      </div>
    </div>
    <form class="new-feedback" @submit.prevent="handleSubmit">
      <div class="circle"><span class="white-cross">+</span></div>
      <div class="create">Create New Feedback</div>

      <div class="title">
        <h4>Feedback Title</h4>
        <label for="title">Add a short, descriptive headline</label>
        <input type="text" required v-model="title" />
      </div>
      <div class="category">
        <h4>Category</h4>
        <label for="category">Choose a category for your feedback</label>
        <select v-model="category">
          <option selected value="Feature">Feature</option>
          <option value="UI">UI</option>
          <option value="UX">UX</option>
          <option value="Enhancement">Enhancement</option>
          <option value="Bug">Bug</option>
        </select>
      </div>
      <div class="detail">
        <h4>Feedback Detail</h4>
        <label for="detail"
          >Include any specific comments on what should be improved, added,
          etc.</label
        >
        <input type="text" class="textarea" v-model="detail" />
      </div>
      <div class="buttons">
        <router-link :to="{ name: 'Home' }">
          <button class="btn-cancel">Cancel</button>
        </router-link>
        <button type="submit" class="btn-feedback">+ Add Feedback</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { projectFirestore, timestamp } from "../firebase/config";
import useLogout from "../composables/useLogout";
import getUser from "../composables/getUser";

export default {
  name: "CreateFeedback",
  setup() {
    const title = ref("");
    const category = ref("");
    const detail = ref("");

    const router = useRouter();
    const { logout, errorLogout } = useLogout();

    const vote = 0;
    const comments_count = 0;
    const comment_detail = "";

    const { user } = getUser();

    /* Parameters for edit view are initialize here too */

    const handleSubmit = async () => {
      const suggestion = {
        id: Math.floor(Math.random() * 100000),
        title: title.value,
        category: category.value,
        detail: detail.value,
        vote: 0,
        comments_count: 0,
        comment_detail: "",
        createdAt: timestamp(),
      };

      const res = await projectFirestore
        .collection("suggestions")
        .add(suggestion);

      router.push({ name: "Home" });
    };

    const handleClick = async () => {
      await logout();
      if (!errorLogout.value) {
        console.log("user logged out");
        router.push("/welcome");
      }
    };

    return {
      title,
      category,
      detail,
      vote,
      comments_count,
      comment_detail,
      handleSubmit,
      handleClick,
      errorLogout,
      user,
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Jost:wght@400;600;700&display=swap");

.logout {
  width: 100vw;
  height: 34px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin: 0 -60px;
  padding-top: 20px;
}

.btn-logout {
  width: 70px;
  height: 40px;
  background-color: white;
  box-shadow: 10px solid black;
  color: rgb(110, 109, 109);
  border: 1px solid grey;
  font-weight: bold;
  border-radius: 10px;
}

.btn-logout:hover {
  color: rgb(165, 163, 163);
  border: 1px solid rgb(165, 163, 163);
}

.greeting {
  font-size: 20px;
  margin-right: 30px;
}

.content {
  height: 645px;
  width: 540px;
  padding-top: 92px;
  margin: 0 auto;
  background-color: #f7f8fd;
  font-family: "Jost";
}

@media only screen and (max-width: 375px) {
  .content {
    width: 327px;
    margin: 0 auto;
    padding-top: 36px;
  }
}

.circle {
  position: absolute;
  top: -24px;
  background-image: url("../assets/suggestions/desktop/background-header.png");
  background-size: cover;
  width: 48px;
  height: 48px;
  border-radius: 50%;
}

.white-cross {
  font-size: 30px;
  font-weight: 900;
  color: white;

  position: absolute;
  top: 1px;
  left: 15px;
}

.back {
  color: #647196;
  font-weight: bold;
  margin-bottom: 62px;

  display: flex;
  flex-direction: row;
}

.goback {
  width: 70px;
  height: 20px;
  margin-left: 16px;
}

@media only screen and (max-width: 375px) {
  .goback {
    margin-left: 8px;
  }
}

.new-feedback {
  background-color: white;
  border-radius: 10px;
  height: 657px;
  padding: 0 42px;

  position: relative;
}

@media only screen and (max-width: 375px) {
  .new-feedback {
    padding: 0 24px;
    height: 708px;
  }
}

.create {
  font-size: 24px;
  font-weight: bold;
  color: #3a4374;
  padding-top: 52px;
  padding-bottom: 25px;
}

.title {
  display: flex;
  flex-direction: column;
}

.category {
  display: flex;
  flex-direction: column;
}

.detail {
  display: flex;
  flex-direction: column;
}

h4 {
  font-size: 14px;
  font-weight: bold;
  color: #3a4374;
}

label {
  color: #647196;
  font-size: 14px;
  margin-bottom: 10px;
  margin-top: -10px;
}

input {
  width: 456px;
  height: 48px;
  background-color: #f7f8fd;
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;
}

@media only screen and (max-width: 375px) {
  input {
    width: 279px;
  }

  select {
    width: 279px;
  }
}

input:focus {
  border-color: #3a4374;
}

input:active {
  border-color: #3a4374;
}

.textarea {
  width: 456px;
  height: 96px;
  background-color: #f7f8fd;
  border: none;
  border-radius: 5px;
  margin-bottom: 24px;
  cursor: pointer;
}

@media only screen and (max-width: 375px) {
  .textarea {
    width: 279px;
  }
}

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 16px;
  padding-bottom: 43px;
}

@media only screen and (max-width: 375px) {
  .buttons {
    flex-direction: column;
  }
}

.btn-cancel {
  height: 41px;
  width: 93px;
  border-radius: 10px;
  font-weight: bold;
  color: white;
  border: none;
  background-color: #3a4374;
}

@media only screen and (max-width: 375px) {
  .btn-cancel {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 279px;
  }
}

.btn-cancel:hover {
  background-color: #656ea3;
  cursor: pointer;
}

.btn-feedback {
  width: 154px;
  height: 41px;
  border: none;
  border-radius: 10px;
  background-color: #ad1fea;
  color: white;
  font-weight: bold;
}

@media only screen and (max-width: 375px) {
  .btn-feedback {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 279px;
  }
}

.btn-feedback:hover {
  background-color: #c75af6;
  cursor: pointer;
}

a {
  text-decoration: none;
  color: #647196;
  font-weight: bold;
  margin-bottom: 62px;
}

a:hover {
  cursor: pointer;
  border-bottom: 1px solid #647196;
}
</style>
