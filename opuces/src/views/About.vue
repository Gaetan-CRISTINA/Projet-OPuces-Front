<template>
  <div class="about">
    <Header2 />
    <div class="illusLamp">
      <IllusLamp />
    </div>
    <div class="main-container">
      <h2>L'Equipe</h2>
      <div class="picDev">
        
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
import Header2 from "../components/organisms/Header2.vue";
import IllusLamp from "../components/atoms/IllusLamp.vue"
export default {
  name: "About",
  components: {
    Header2,
    IllusLamp
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/main";


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
    height: 450px;
    width: 300px;
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
    padding-top: 5rem;
  }
  .role, .link, h3{
    text-align: center;
    margin-bottom: 1rem;
  }
  .illusLamp {
    display: none;
  }
  .main-container {
    width:100%;
  }

@media screen and (max-width: 576px) {
  .picDev{
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 0;
    
  }
  h2{
    padding: 6rem 0 0 0;
   
  }
  .picDev span{
    height: 450px;
    width: 300px;
    margin: 0 20px 0 20px;
    margin-bottom: 20px;
  }
  .illusLamp {
    display: none;
  }
}
@media screen and (min-width: 768px) {
  .picDev{
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 0;
    
  }
  h2{
    padding: 6rem;
    
    
  }
  .picDev span{
    height: 450px;
    width: 300px;
    margin: 0 20px 0 20px;
    margin-bottom: 20px;
  }
  .illusLamp {
    display: none;
  }
}
@media screen and (min-width: 992px) {
  .picDev{
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 0;
  }
  h2{
    padding: 6rem;
    
  }
  .picDev span{
    height: 450px;
    width: 300px;
    margin: 0 20px 0 20px;
    margin-bottom: 20px;
  }
  .illusLamp {
    display: none;
  }
}
@media screen and (min-width: 1200px) {
  .picDev{
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 0;
  }
  h2{
    padding: 6rem;
  }
  .picDev span{
    height: 450px;
    width: 300px;
    margin: 0 20px 0 20px;
    margin-bottom: 20px;
  }
  .illusLamp {
    display: none;
  }
}
@media screen and (min-width: 1400px) {
  .picDev{
    flex-direction: row;
    padding-top: 0;
    
  }
  h2{
    padding: 6rem;
  }
  .picDev span{
    height: 450px;
    width: 300px;
    margin: 0 20px 0 20px;
  }
  .illusLamp {
    display: inline-block;
    position: fixed;
    margin-left: 10%;
  }
}
</style>
