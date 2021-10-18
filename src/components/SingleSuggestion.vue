<template>
  <div class="suggestion">
    <div class="vote" @click="handleVote">
      <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 6l4-4 4 4"
          stroke="#4661E6"
          stroke-width="2"
          fill="none"
          fill-rule="evenodd"
        />
      </svg>
      <div class="vote-number">{{ suggestion.vote }}</div>
    </div>
    <div class="feedback">
      <router-link
        :to="{ name: 'FeedbackDetail', params: { id: suggestion.id } }"
      >
        <h3>{{ suggestion.title }}</h3>
      </router-link>

      <div class="detail">
        <div>
          {{ suggestion.detail }}
        </div>
        <div class="comment">
          <svg
            class="right"
            width="18"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z"
              fill="#CDD2EE"
              fill-rule="nonzero"
            /></svg
          >{{ suggestion.comment }}
        </div>
      </div>

      <div class="tag-element">
        {{ suggestion.category }}
      </div>
    </div>
  </div>
</template>

<script>
import { projectFirestore } from "../firebase/config";
export default {
  props: ["suggestion", "id"],
  setup(props) {
    // const handleVote = () => {
    //   let res = projectFirestore
    //     .collection("suggestions")
    //     .doc("suggestion")
    //     .udpate({
    //       vote: vote.value++,
    //     });
    // };
    // return { handleVote };
  },
};
</script>

<style scoped>
.suggestion {
  width: 825px;
  height: 151px;
  background: #ffffff;
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 20px;
}

.feedback {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.detail {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.vote {
  margin-left: 32px;
  margin-right: 40px;
}

.comment {
  margin-right: 32px;
  font-weight: bold;
}

.right {
  margin-right: 8px;
}

.tag-element {
  background-color: rgb(242, 244, 255);
  color: #4661e6;
  height: 30px;
  width: 111px;
  font-weight: bold;
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 3px 10px;
}

@media only screen and (max-width: 768px) {
  .tag-element {
    padding: 3px 10px;
  }
}

.tag-element:hover {
  background-color: #cfd7ff;
  cursor: pointer;
}

.tag-element:active {
  background-color: #4661e6;
  color: white;
  cursor: pointer;
}

.vote {
  background-color: rgb(242, 244, 255);
  height: 40px;
  font-weight: bold;
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 3px 10px;
}

@media only screen and (max-width: 768px) {
  .vote {
    height: 32px;
  }
}

.vote:hover {
  background-color: #cfd7ff;
  cursor: pointer;
}

.vote:active {
  background-color: #4661e6;
  color: white;
}

.vote-number {
  color: #3a4374;
  margin-left: 12.5px;
}

.vote-number:active {
  color: white;
}
</style>