<template>
  <div class="page">
    
    <div class="container">
      <div class="intro">
        <div class="hi-div">Hi,</div>
        <div>I am Uswah Alvi</div>
        <div class="tagline">
          I build functional websites and web apps using modern web technologies.
        </div>
      </div>
      <div class="image-wrapper">
        <a href="https://crochetingmyway.shop" target="_blank">
          <img class="product-catalog-image all-img" src="../assets/product-catalog.PNG" />
        </a>
        <a href="https://uswahalvi.github.io/ActivityPlanner" target="_blank">
          <img class="activities-desktop-image all-img" src="../assets/Activties-phone.png" />
        </a>
        <a href="https://uswahalvi.github.io/react-quiz-app/" target="_blank">
          <img class="quiz-image all-img" src="../assets/quiz-2.png" />
        </a>
        <a href="https://uswahalvi.github.io/world-wise" target="_blank">
          <img class="world-wise-image all-img" src="../assets/world-wise-detail.png" />
        </a>
        <a href="https://uswahalvi.github.io/react-quiz-app" target="_blank">
          <img class="dashboard-image all-img" src="../assets/dashboard.png" />
        </a>
      </div>
    </div>
  </div>
</template>


<style scoped>
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px 40px;
  flex-wrap: wrap;
  gap: 40px;
}

.intro {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: bold;
  font-size: 64px;
  line-height: 1.1;
}

.hi-div {
  font-size: 36px;
  margin-bottom: 15px;
}

.tagline {
  font-size: 22px;
  font-weight: normal;
  margin-top: 20px;
  color: #555;
}

.image-wrapper {
  flex: 1;
  position: relative;
  height: 400px;
  min-width: 300px;
}

.product-catalog-image {
  top: -20px;
  right: 160px;
  z-index: 101;
  width: 400px;
  height: auto;
}

.activities-desktop-image {
  top: 260px;
  right: 60px;
  z-index: 100;
  width: 115px;
  height: auto;
}
.quiz-image{
  top: 260px;
  right: 60px;
  z-index: 60;
  width: 115px;
  height: auto;
}
.world-wise-image {
  top: 55px;
  right: -65px;
  z-index: 88;
  width: 340px;
  height: auto;
}

.dashboard-image {
  top: 214px;
  right: 68px;
  width: 423px;
  height: auto;
}

.all-img {
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  position: absolute;
  cursor: pointer;
  transition: all 0.3s ease;
}

.all-img:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
}

/* Responsive styles */
@media (max-width: 1250px) {
  .container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .intro {
    font-size: 48px;
  }

  .hi-div {
    font-size: 32px;
  }

  .tagline {
    font-size: 20px;
  }

  .image-wrapper {
    position: relative;
    height: 400px;
    margin-top: 40px;
  }

  .product-catalog-image {
    right: 60px;
    width: 320px;
  }

  .activities-desktop-image {
    top: 230px;
    right: 30px;
    width: 100px;
  }
  .quiz-image{
    top: 70px;
    right:260px;
    width: 200px;
  }

  .world-wise-image {
    right: -40px;
    width: 300px;
  }

  .dashboard-image {
    right: 40px;
    width: 340px;
  }
}

@media (max-width: 1024px) {
  .container {
    flex-direction: column;
    align-items: center;
    padding: 60px 20px;
  }

  .intro {
    font-size: 48px;
    text-align: center;
    padding-inline: 100px;
  }

  .hi-div {
    font-size: 28px;
  }

  .tagline {
    font-size: 18px;
  }

  .image-wrapper {
    position: relative;
    height: 350px;
  }

  .product-catalog-image {
    right: 60px;
    width: 300px;
  }

  .activities-desktop-image {
    top: 200px;
    right: 30px;
    width: 90px;
  }
  .quiz-image{
    top: 70px;
    right:227px;
    width: 200px;
  }
  .world-wise-image {
    right: -30px;
    width: 280px;
  }

  .dashboard-image {
    right: 30px;
    width: 300px;
  }
}

@media (max-width: 600px) {
  .intro {
    font-size: 38px;
    padding-inline: 0px;
  }
  .container {
    padding: 60px 47px;
  }
  .hi-div {
    font-size: 24px;
  }

  .tagline {
    font-size: 16px;
  }

  .image-wrapper {
    height: 300px;
  }
  .quiz-image{
    top:112px;
    right: 170px;
    width: 140px;
  }

  .product-catalog-image {
    width: 240px;
  }

  .world-wise-image,
  .dashboard-image {
    width: 220px;
  }
}
</style>
