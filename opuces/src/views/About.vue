<template>
  <div class="about">
    <Header />
    <div class="main-container">
      <div class="picDev">
        <h2>L'Equipe</h2>
        <span>
          <img src="../assets/pictures/Mcdo.png" alt="" />
          <h3>Stephen Woirin</h3>
          <div class="link">
          <h4>Profil LinkedIn</h4>
          <h4>Profil GitHub</h4>
          </div>
          <div class="role">Référent Techniques des technologies</div>
        </span>
        <span>
          <img src="../assets/pictures/OldMan.png" alt="" />
          <h3>Yves Ropartz</h3>
          <div class="link">
          <h4>Profil LinkedIn</h4>
          <h4>Profil GitHub</h4>
          </div>
          <div class="role">Lead Dev Back</div>
        </span>
        <span>
          <img src="../assets/pictures/SnowWhite.jpg" alt="" />
          <h3>Rovie Fortier-Bragas</h3>
          <div class="link">
          <h4>Profil LinkedIn</h4>
          <h4>Profil GitHub</h4>
          </div>
          <div class="role">Scrum Master</div>
        </span>
        <span>
          <img src="../assets/pictures/SpiderMan.jpg" alt="" />
          <h3>Gaëtan Cristina</h3>
          <div class="link">
          <h4>Profil LinkedIn</h4>
          <h4>Profil GitHub</h4>
          </div>
          <div class="role">Product Owner</div>
          <div class="role">Git Master</div>
        </span>
        <span>
          <img src="../assets/pictures/Spoke.jpg" alt="" />
          <h3>Loïc Tran</h3>
          <div class="link">
          <h4>Profil LinkedIn</h4>
          <h4>Profil GitHub</h4>
          </div>
          <div class="role">Lead Dev Front</div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/organisms/Header.vue";
export default {
  name: "About",
  components: {
    Header,
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/main";
@media screen and (max-width: 576px) {
  .picDev img {
    width: 200px;
    border-radius: 100%;
    margin-bottom: 20px;
    
  }
  .picDev {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5rem;
  }
  .picDev span {
    border: 2px solid #31c7c0;
    width: 210px;
    border-radius: 20px;
    background-color: #f5f5ee;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 2rem;
    box-shadow: 1px 1px 4px #31C7C0;
    
  }
  h3{
    text-align: center;
  }
  h2{
    margin-bottom: 20px;
  }
}
@media screen and (min-width: 768px) {
}
@media screen and (min-width: 992px) {
}
@media screen and (min-width: 1200px) {
}
@media screen and (min-width: 1400px) {
}
</style>
