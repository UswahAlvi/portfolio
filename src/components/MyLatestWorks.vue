<template>
  <div class="wrapper">
    <div class="title">My Latest Work</div>

    <div id="projectCarousel" class="carousel slide" data-bs-ride="false">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="project-wrapper">
            <a href="https://crochetingmyway.shop" target="_blank" class="project-link">
              <div class="project-title">E-Commerce Website</div>
              <img class="project-image" src="../assets/1.PNG" />
            </a>
          </div>
        </div>

        <div class="carousel-item">
          <div class="project-wrapper">
            <a href="https://uswahalvi.github.io/world-wise" target="_blank" class="project-link">
              <div class="project-title">World Wise App</div>
              <img class="project-image" src="../assets/3.png" />
            </a>
          </div>
        </div>

        <div class="carousel-item">
          <div class="project-wrapper">
            <a href="https://uswahalvi.github.io/ActivityPlanner" target="_blank" class="project-link">
              <div class="project-title">Activity Planner</div>
              <img class="project-image" src="../assets/2.png" />
            </a>
          </div>
        </div>

        <div class="carousel-item">
          <div class="project-wrapper">
            <a href="https://uswahalvi.github.io/react-quiz-app" target="_blank" class="project-link">
              <div class="project-title">Quiz App</div>
              <img class="project-image" src="../assets/4.png" />
            </a>
          </div>
        </div>
        <div class="carousel-item">
          <div class="project-wrapper">
            <a href="https://uswahalvi.github.io/dashboard" target="_blank" class="project-link">
              <div class="project-title">Dashboard</div>
              <img class="project-image" src="../assets/dashboard.png" />
            </a>
          </div>
        </div>
      </div>

      <button class="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>
  </div>
</template>


<style scoped>
.wrapper {
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  max-width: 100%;
  box-sizing: border-box;
}

.title {
  font-size: 38px;
  font-weight: bold;
  margin-bottom: 40px;
  text-align: center;
}

.project-wrapper {
  max-width: 1000px;
  width: 100%;
  margin: auto;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
}

.project-link {
  display: block;
  position: relative;
  text-decoration: none;
  color: inherit;
}

.project-image {
  width: 100%;
  height: auto;
  display: block;
  filter: brightness(60%);
  transition: filter 0.3s ease;
}

.project-link:hover .project-image {
  filter: brightness(100%);
}

.project-title {
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  z-index: 1;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

.carousel-control-prev,
.carousel-control-next {
  width: auto;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
}

.carousel-control-prev {
  left: -60px;
}

.carousel-control-next {
  right: -60px;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: rgba(87, 122, 161, 0.5);
  border-radius: 50%;
  padding: 20px;
}

#projectCarousel {
  overflow: visible;
  position: relative;
}

@media(max-width: 1250px){
  .wrapper{
    margin-top: 330px;
  }
}
@media (max-width: 1200px) {
  .carousel-control-prev {
    left: 10px;
  }

  .carousel-control-next {
    right: 10px;
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    padding: 16px;
  }
}

/* Further tweaks for tablets/phones */
@media (max-width: 768px) {
  .wrapper {
    padding: 10px;
  }

  .title {
    font-size: 38px;
  }

  .project-title {
    font-size: 18px;
    top: 10px;
    left: 10px;
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    padding: 12px;
  }
}
@media(max-width: 380px){
  .wrapper {
  padding: 100px 10px 0px;
  }
}
</style>
