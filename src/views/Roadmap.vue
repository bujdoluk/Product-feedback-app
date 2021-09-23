<template>
  <div class="home">
    <div class="roadmap-navbar">
      <div class="roadmap-navbar-right">
        <div class="left">
          <div class="left-arrow">&lt;</div>
          <div class="back">&nbsp; <span class="goback">Go Back</span></div>
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
          <h3>Planned (2)</h3>
          <div>Ideas prioritized for research</div>
        </div>

        <div class="suggestion"></div>
      </div>
      <div class="roadmap-progress">
        <div class="status">
          <h3>In-Progress (3)</h3>
          <div>Currently being developed</div>
        </div>

        <div class="suggestion"></div>
      </div>
      <div class="roadmap-live">
        <div class="status">
          <h3>Live (1)</h3>
          <div>Released features</div>
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

.roadmap-navbar-right {
  display: flex;
  flex-direction: column;

  color: #ffffff;
  font-weight: bold;
  font-size: 24px;
  margin-left: 32px;
}

.left {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.back {
  height: 20px;

  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;

  color: #ffffff;
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
  margin-top: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
}

.status {
  margin-bottom: 32px;
  line-height: 10px;
}

.suggestion {
  width: 350px;
  height: 272px;
  background-color: #fff;
  border-radius: 5px;
}
</style>
