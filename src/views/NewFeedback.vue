<template>
  <div class="content">
    <div class="back">
      <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6 9L2 5l4-4"
          stroke="#4661E6"
          stroke-width="2"
          fill="none"
          fill-rule="evenodd"
        />
      </svg>
      &nbsp; <span class="goback">Go Back</span>
    </div>
    <div class="new-feedback">
      <div class="circle"><span class="white-cross">+</span></div>
      <div class="create">Create New Feedback</div>

      <div class="title">
        <h4>Feedback Title</h4>
        <label for="title">Add a short, descriptive headline</label>
        <input type="text" />
      </div>
      <div class="category">
        <h4>Category</h4>
        <label for="category">Choose a category for your feedback</label>
        <input type="text" />
      </div>
      <div class="detail">
        <h4>Feedback Detail</h4>
        <label for="detail"
          >Include any specific comments on what should be improved, added,
          etc.</label
        >
        <input type="text" class="textarea" />
      </div>
      <div class="buttons">
        <button class="btn-cancel">Cancel</button>
        <button class="btn-feedback">+ Add Feedback</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewFeedback",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Jost:wght@400;600;700&display=swap");
.content {
  height: 645px;
  width: 540px;
  padding-top: 92px;
  margin: 0 auto;
  background-color: #f7f8fd;
  font-family: "Jost";
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
}

.goback:hover {
  cursor: pointer;
  border-bottom: 1px solid #647196;
}

.new-feedback {
  background-color: white;
  border-radius: 10px;
  height: 657px;
  padding: 0 42px;

  position: relative;
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

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 16px;
  padding-bottom: 43px;
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

.btn-feedback:hover {
  background-color: #c75af6;
  cursor: pointer;
}
</style>
