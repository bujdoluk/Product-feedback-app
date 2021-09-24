<template>
  <div class="home">
    <div class="roadmap-navbar">
      <div class="roadmap-navbar-left">
        <div class="left">
          <div class="left-arrow">&lt;</div>
          <div class="back"><span class="goback">Go Back</span></div>
        </div>

        <div>Roadmap</div>
      </div>

      <div class="feedback">
        <button class="btn-feedback">+ Add Feedback</button>
      </div>
    </div>

    <div class="roadmap">
      <div class="roadmap-planned">
        <div class="status">
          <h3 class="bold-dark-blue">Planned (2)</h3>
          <div class="grey">Ideas prioritized for research</div>
        </div>

        <div class="suggestion">
          <div class="suggestion-status">
            <div class="beige-dot"></div>
            <div class="grey">Planned</div>
          </div>
          <h3 class="bold-dark-blue h3">More comprehensive report</h3>
          <div class="grey p">
            It would be great to see more detailed breakdown of solutions.
          </div>
          <div class="tags">
            <div class="tag">Feature</div>
          </div>
          <div class="comments">
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
      </div>
      <div class="roadmap-progress">
        <div class="status">
          <h3 class="bold-dark-blue">In-Progress (3)</h3>
          <div class="grey">Currently being developed</div>
        </div>

        <div class="suggestion"></div>
      </div>
      <div class="roadmap-live">
        <div class="status">
          <h3 class="bold-dark-blue">Live (1)</h3>
          <div class="grey">Released features</div>
        </div>

        <div class="suggestion"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Roadmap",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Jost:wght@400;600;700&display=swap");

.home {
  background-color: #f7f8fd;
  margin: 0 auto;
  max-width: 1110px;
  padding-top: 94px;
  padding-left: 165px;
  padding-right: 165px;

  display: flex;
  flex-direction: row;
  gap: 30px;
  font-family: "Jost";

  position: relative;
}

.roadmap-navbar {
  position: absolute;
  width: 1110px;
  height: 113px;
  left: 165px;
  top: 78px;

  background: #373f68;
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.roadmap-navbar-left {
  display: flex;
  flex-direction: column;

  color: #ffffff;
  font-weight: bold;
  font-size: 24px;
  margin-left: 32px;
}

.roadmap-navbar-left:hover {
  cursor: pointer;
}

.left {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}

.left-arrow {
  margin-right: 10px;
}

.back {
  height: 20px;

  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;

  color: #ffffff;
}

.back:hover {
  border-bottom: 1px solid white;
}

.feedback {
  margin-left: auto;
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
  margin-right: 32px;
}

.btn-feedback:hover {
  background-color: #c75af6;
  cursor: pointer;
}

.roadmap {
  display: flex;
  flex-direction: row;
  gap: 30px;
  width: 1110px;
  margin: 150px auto;
}

.status {
  margin-bottom: 32px;
  line-height: 10px;
}

.suggestion {
  max-width: 350px;
  max-height: 272px;
  background-color: #fff;
  border-radius: 5px;
  border-top: 6px solid rgba(244, 159, 133, 1);

  display: flex;
  flex-direction: column;
}

.suggestion-status {
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 25px 32px 0 32px;
}

.grey {
  font-size: 16px;
  color: #647196;
  line-height: 23px;
}

.h3 {
  padding: 0 32px;
  margin-bottom: 8px;
}

.h3:hover {
  color: #4661e6;
  cursor: pointer;
}

.p {
  padding: 0 32px;
}

.bold-dark-blue {
  color: #3a4374;
  font-size: 18px;
  font-weight: bold;
}

.beige-dot {
  height: 8px;
  width: 8px;
  background-color: rgba(244, 159, 133, 1);
  border-radius: 50%;
  margin-right: 16px;
}

.purple-dot {
  height: 8px;
  width: 8px;
  background-color: rgba(199, 77, 203, 1);
  border-radius: 50%;
  display: inline-block;
  margin-right: 16px;
}

.blue-dot {
  height: 8px;
  width: 8px;
  background-color: rgba(98, 188, 250, 1);
  border-radius: 50%;
  display: inline-block;
  margin-right: 16px;
}

.comments {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 16px 32px 32px 32px;
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
  height: 40px;
  font-weight: bold;
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 3px 10px;
}

.vote:hover {
  background-color: #cfd7ff;
  cursor: pointer;
}

.vote-number {
  color: #3a4374;
  margin-left: 12.5px;
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
