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
      <section class="suggestion">
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
      </section>

      <section class="comments-section">
        <div class="comments-headline">4 Comments</div>
        <div class="comment-info">
          <div class="comment-img">
            <img
              src="../assets/user-images/image-elijah.jpg"
              alt="Elijah Photo"
              class="img"
            />
          </div>
          <div class="comment-details">
            <div class="comment-name">
              <div class="comment-email">
                <div>Elijah Moss</div>
                <div class="grey">@hexagon.bestagon</div>
              </div>
              <div class="reply">Reply</div>
            </div>
            <div class="grey paragraph">
              Also, please allow styles to be applied based on system
              preferences. I would love to be able to browse Frontend Mentor in
              the evening after my device's dark mode turns on without the
              bright background it currently has.
            </div>
          </div>
        </div>
      </section>

      <section class="add-comment">
        <div class="comments-headline">Add Comment</div>
        <div class="input-container">
          <textarea
            type="textarea"
            placeholder="Type your comment here"
            class="grey"
          />
        </div>
        <div class="post-comment">
          <div class="grey characters">250 Characters Left</div>
          <div>
            <button class="btn-post">Post Comment</button>
          </div>
        </div>
      </section>
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

@media only screen and (max-width: 768px) {
  .content {
    width: 689px;
    margin: 0 40px;
    padding-top: 68px;
  }
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
  flex-direction: column;
  max-width: 730px;
  margin-top: 23px;
}

.suggestion {
  max-width: 730px;
  max-height: 171px;
  background-color: #fff;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
}

@media only screen and (max-width: 768px) {
  .suggestion {
    max-width: 689px;
  }
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

@media only screen and (max-width: 768px) {
  .comments {
    margin-right: 64px;
  }
}

.comment-right {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.comment-number {
  margin-left: 8px;
}

.comments-section {
  display: flex;
  flex-direction: column;
  max-width: 730px;
  background-color: white;
  margin-top: 23px;
  border-radius: 10px;
}

@media only screen and (max-width: 768px) {
  .comments-section {
    min-width: 689px;
  }
}

.comments-headline {
  margin: 24px 34px;
  color: #3a4374;
  font-weight: bold;
  font-size: 18px;
}

.comment-info {
  display: flex;
  flex-direction: row;
}

.img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 34px;
}

.comment-details {
  display: flex;
  flex-direction: column;
}

.comment-name {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 594px;
}

@media only screen and (max-width: 768px) {
  .comment-name {
    width: 553px;
  }
}

.comment-email {
  display: flex;
  flex-direction: column;
}

.reply {
  margin-left: auto;
  color: #4661e6;
  font-weight: bold;
  font-size: 13px;
}

.reply:hover {
  border-bottom: 1px solid #4661e6;
  cursor: pointer;
}

.paragraph {
  margin-right: 34px;
  margin-bottom: 32px;
  margin-top: 17px;
}

/* ADD COMMENT SECTION */

.add-comment {
  width: 730px;
  height: 246px;
  background-color: white;
  border-radius: 10px;
  margin-top: 24px;
}

@media only screen and (max-width: 768px) {
  .add-comment {
    max-width: 689px;
  }
}

textarea {
  background: #f7f8fd;
  margin: 0 34px;
  border: none;
  width: 664px;
  height: 60px;
  border-radius: 5px;
  margin-bottom: 27px;

  font-family: "Jost";

  resize: none;
  padding: 10px;
}

@media only screen and (max-width: 768px) {
  textarea {
    width: 593px;
  }
}

textarea:focus::placeholder {
  color: transparent;
}

.post-comment {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.characters {
  font-weight: normal;
  font-size: 15px;
  margin-left: 34px;
}

.btn-post {
  width: 154px;
  height: 41px;
  border: none;
  border-radius: 10px;
  background-color: #ad1fea;
  color: white;
  font-weight: bold;
  margin-right: 34px;
}

@media only screen and (max-width: 768px) {
  .btn-post {
    margin-right: 40px;
  }
}

.btn-post:hover {
  background-color: #c75af6;
  cursor: pointer;
}
</style>