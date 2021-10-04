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
      <svg
        class="pen-image"
        viewBox="0 0 40 40"
        width="60"
        height="60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient
            cx="103.9%"
            cy="-10.387%"
            fx="103.9%"
            fy="-10.387%"
            r="166.816%"
            id="a"
          >
            <stop stop-color="#E84D70" offset="0%" />
            <stop stop-color="#A337F6" offset="53.089%" />
            <stop stop-color="#28A7ED" offset="100%" />
          </radialGradient>
        </defs>
        <g fill="none" fill-rule="evenodd">
          <circle fill="url(#a)" cx="20" cy="20" r="20" />
          <path
            d="M19.512 15.367l4.975 4.53-3.8 5.54L11.226 29l4.485-4.1c.759.275 1.831.026 2.411-.594a1.958 1.958 0 00-.129-2.82c-.836-.745-2.199-.745-2.964.068-.57.607-.767 1.676-.44 2.381L11 28.713c.255-1.06.683-2.75 1.115-4.436l.137-.531c.658-2.563 1.287-4.964 1.287-4.964l5.973-3.415zM23.257 12L28 16.443l-2.584 2.606-4.89-4.583L23.257 12z"
            fill="#FFF"
            fill-rule="nonzero"
          />
        </g>
      </svg>

      <div class="edit">Editing 'Add a dark theme option'</div>

      <div class="title">
        <h4>Feedback Title</h4>
        <label for="title">Add a short, descriptive headline</label>
        <input type="text" placeholder=" Please add a dark theme option" />
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
      <div class="status">
        <h4>Update Status</h4>
        <label for="status">Change feedback state</label>
        <select v-model="status">
          <option selected value="Suggestion">Suggestion</option>
          <option value="Planned">Planned</option>
          <option value="In-Progress">In-Progress</option>
          <option value="Live">Live</option>
        </select>
      </div>
      <div class="detail">
        <h4>Feedback Detail</h4>
        <label for="detail"
          >Include any specific comments on what should be improved, added,
          etc.</label
        >
        <input
          type="text"
          class="textarea"
          placeholder=" It would help people on what should be
         improved, added, etc."
        />
      </div>
      <div class="buttons">
        <button class="btn-delete">Delete</button>
        <button class="btn-cancel">Cancel</button>
        <button class="btn-feedback">+ Add Feedback</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditFeedback",
  data() {
    return {
      status: "Suggestion",
      category: "Feature",
    };
  },
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

.back {
  color: #647196;
  font-weight: bold;
  margin-bottom: 62px;
}

.pen-image {
  position: absolute;
  top: -25px;
}

.goback:hover {
  cursor: pointer;
  border-bottom: 1px solid #647196;
}

.new-feedback {
  background-color: white;
  border-radius: 10px;
  height: 822px;
  padding: 0 42px;
  margin-top: 20px;

  position: relative;
}

.edit {
  font-size: 24px;
  font-weight: bold;
  color: #3a4374;
  padding-top: 72px;
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

.status {
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

.btn-delete {
  height: 41px;
  width: 93px;
  border-radius: 10px;
  font-weight: bold;
  color: #f2f4fe;
  border: none;
  background-color: #d73737;
}

.btn-delete:hover {
  background-color: #e98888;
  cursor: pointer;
}

.btn-cancel {
  height: 41px;
  width: 93px;
  border-radius: 10px;
  font-weight: bold;
  color: #f2f4fe;
  border: none;
  background-color: #3a4374;
  margin-left: auto;
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
