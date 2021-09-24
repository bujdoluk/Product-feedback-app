<template>
  <div class="content">
    <div class="navbar">
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
      <div>
        <button class="btn-edit">Edit Feedback</button>
      </div>
    </div>

    <div class="edit-feedback">
      <div class="suggestion">
        <div class="suggestion-detail">
          <div class="vote">
            <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 6l4-4 4 4"
                stroke="#4661E6"
                stroke-width="2"
                fill="none"
                fill-rule="evenodd"
              />
            </svg>
            <div class="vote-number">123</div>
          </div>
          <div class="suggestion-content">
            <h3 class="bold-dark-blue h3">More comprehensive report</h3>
            <div class="grey">
              It would be great to see more detailed breakdown of solutions.
            </div>
          </div>

          <div class="comments">
            <div class="bold-dark-blue comment-right">
              <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z"
                  fill="#CDD2EE"
                  fill-rule="nonzero"
                />
              </svg>
              <div class="comment-number">2</div>
            </div>
          </div>
        </div>
        <div class="tags">
          <div class="tag">Feature</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeedbackDetail",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Jost:wght@400;600;700&display=swap");

.content {
  width: 730px;
  padding-top: 80px;
  margin: 0 auto;
  background-color: #f7f8fd;
  font-family: "Jost";
}

.navbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.goback {
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;

  color: #647196;
}

.goback:hover {
  cursor: pointer;
  border-bottom: 1px solid #647196;
}

.btn-edit {
  background: #4661e6;
  color: #f2f4fe;
  height: 44px;
  width: 142px;
  border-radius: 10px;
  border: none;
  font-weight: bold;
}

.btn-edit:hover {
  background: #7c91f9;
  cursor: pointer;
}

.edit-feedback {
  display: flex;
  flex-direction: row;
  max-width: 730px;
  margin-top: 23px;
}

.suggestion {
  max-width: 730px;
  max-height: 171px;
  background-color: #fff;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
}

.suggestion-detail {
  width: 730px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.grey {
  font-size: 16px;
  color: #647196;
}

.tags {
  border-radius: 10px;
  background-color: white;
  max-width: 255px;
  height: 166px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
  font-family: "Jost";

  padding: 0 32px;
  margin-top: 6px;
  margin-left: 112px;
}

.tag {
  background-color: rgb(242, 244, 255);
  color: #4661e6;
  height: 30px;
  font-weight: bold;
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 3px 10px;
}

.tag:hover {
  background-color: #cfd7ff;
  cursor: pointer;
}

.vote {
  background-color: rgb(242, 244, 255);
  height: 53px;
  width: 40px;
  font-weight: bold;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-left: 32px;
}

.vote:hover {
  background-color: #cfd7ff;
  cursor: pointer;
}

.vote-number {
  color: #3a4374;
}

.bold-dark-blue {
  color: #3a4374;
  font-size: 18px;
  font-weight: bold;
}

.comments {
  display: flex;
  flex-direction: column;
  margin-right: 32px;
  margin-top: 70px;
  justify-content: flex-end;
}

.comment-right {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.comment-number {
  margin-left: 8px;
}
</style>