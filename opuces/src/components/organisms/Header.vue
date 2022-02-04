<template>
  <header id="header-site">
    <div class="main-container">
      <div class="flex">
        <router-link v-if="user" :to="{ name: 'Home' }">
          <div id="left-header-mobile">
            <span id="logo-link"><Logo /></span>
            <h1 id="txt-link">O'Puces</h1>
          </div>
        </router-link>

        <div id="right-header-mobile">
          <PictoUser />
          <nav class="sub-nav" v-if="user">
            <ul>
              <li id="welcome">
                <img src="https://picsum.photos/30" alt="" /> Bonjour
                {{ user.user_display_name }}
              </li>

              <router-link
                v-if="user"
                :to="{
                  name: 'UserProfil',
                }"
              >
                <li><PictoUser /><span>Mon profil</span></li>
              </router-link>

              <router-link
                v-if="user"
                :to="{
                  name: 'Myaccount',
                }"
              >
                <li><PictoCompte /><span>Mon compte</span></li>
              </router-link>

              <router-link
                v-if="user"
                :to="{
                  name: 'UserClassifieds',
                }"
              >
                <li><PictoAnnonces /><span>Mes annonces</span></li>
              </router-link>

              <router-link
                v-if="user"
                :to="{
                  name: 'CreateClassified',
                }"
              >
                <li><PictoAdd2 /><span>Créer une annonce</span></li>
              </router-link>
              <router-link
                :to="{
                  name: 'CGU',
                }"
              >
                <li><PictoInfo /><span>CGU</span></li>
              </router-link>

              <router-link
                :to="{
                  name: 'LegalNotice',
                }"
              >
                <li><PictoText /><span>Mentions légales</span></li>
              </router-link>

              <router-link
                :to="{
                  name: 'ContactPage',
                }"
              >
                <li><PictoMail /><span>Contact</span></li>
              </router-link>

            
            <router-link
              :to="{
                name: 'Logout',
              }"
            >
             <a class="disconect--button"><PictoClose/><span>Se déconnecter</span></a>
            </router-link>
            
            </ul>
          </nav>

          <router-link
            v-if="!user"
            :to="{
              name: 'LoginForm',
            }"
          >
            <a id="se-connecter"> Se connecter </a>
          </router-link>
        </div>


        <!--
        LEFT HEADER
        -->

        <div id="left-header-desktop">
          <!--User Connected-->
          <router-link
            v-if="user"
            :to="{
              name: 'Home',
            }"
          >
            <a>
              <span id="logo-link"><Logo /></span>
              <h1 id="txt-link">O'Puces</h1>
            </a>
          </router-link>
          <!-- FIN-->
          <!-- User Offline-->
          <router-link
            v-if="!user"
            :to="{
              name: 'PageRegister',
            }"
          >
            <a>
              <span id="logo-link"><Logo /></span>
              <h1 id="txt-link">O'Puces</h1>
            </a>
          </router-link>
          <!-- FIN-->
        </div>

        <!--
        CENTER HEADER
        -->
        <div id="center-header-desktop">
          <SearchBar />
          
        </div>

        <!--
        RIGHT HEADER
        -->
        <div id="right-header-desktop">
          <router-link
          v-if="!cart"
          :to="{
            name:'Cart'}">
          <PictoEmptyCart />
          </router-link>
          
          <router-link
          v-if="cart"
          :to="{
            name:'Cart'}">
          <PictoFullCart />
          </router-link>

          <h3 v-if="user">Bonjour {{ user.user_nicename }}</h3>
          <!--User Connected-->
          <router-link
            v-if="user"
            :to="{
              name: 'UserProfil',
              //params: {
              //id: userProps.id,
              //}
            }"
          >

            <img class="userPicto" src="https://picsum.photos/30" alt="" />

          </router-link>
          <!--FIN-->

          <!--User Offline-->
          <router-link
            v-if="!user"
            :to="{
              name: 'LoginForm',
            }"
          >
          <PictoUser />
          </router-link>
          <!--FIN-->
        </div>
      </div>
      
    </div>
    <div class="header-bottom">
        <ul>
          <router-link
            v-if="user"
            :to="{
              name: 'CreateClassified',
            }"
          >
            <li>Ajouter une annonce</li>
          </router-link>
          <router-link
            v-if="user"
            :to="{
              name: 'Myaccount',
            }"
          >
          <li>Mon compte</li>
          </router-link>
          <router-link
            v-if="user"
            :to="{
              name: 'UserClassifieds',
            }"
          >
          <li>Mes annonces</li>
          </router-link>
          <router-link
            :to="{
              name: 'CGU',
            }"
          >
            
          <li>CGU/CGV</li>
          </router-link>
          <router-link
            :to="{
              name: 'LegalNotice',
            }"
          >
            
          <li>Mentions légales</li>
          </router-link>
          <router-link
            :to="{
              name: 'ContactPage',
            }"
          >
            
          <li>Contact</li>
          </router-link>
          <router-link
            :to="{
              name: 'About',
            }"
          >
            
          <li>A propos de nous</li>
          </router-link>

          <router-link
          v-if="user"
            :to="{
              name: 'Logout',
            }"
          >
            
          <li>Se déconnecter</li>
          </router-link>

          <router-link
          v-if="!user"
            :to="{
              name: 'LoginForm',
            }"
          >
            
          <li>Se connecter</li>
          </router-link>

          <router-link
          v-if="!user"
            :to="{
              name: 'PageRegister',
            }"
          >
            
          <li>Créer un compte</li>
          </router-link>
        </ul>
      </div>
  </header>
</template>

<script>
import PictoUser from "../atoms/PictoUser";
import PictoCompte from "../atoms/PictoCompte";
import PictoAnnonces from "../atoms/PictoAnnonces";
import PictoInfo from "../atoms/PictoInfo";
import PictoText from "../atoms/PictoText";
import PictoMail from "../atoms/PictoMail";
import PictoClose from "../atoms/PictoClose.vue";
import PictoAdd2 from "../atoms/PictoAdd2.vue";
import PictoEmptyCart from "../atoms/PictoEmptyCart.vue";
import PictoFullCart from "../atoms/PictoFullCart.vue";
import Logo from "../atoms/Logo";
import SearchBar from "../molecules/SearchBar";
import storage from "../../plugins/storage";

export default {
  name: "Header",
  components: {
    PictoUser,
    Logo,
    SearchBar,
    PictoAnnonces,
    PictoCompte,
    PictoInfo,
    PictoText,
    PictoMail,
    PictoClose,
    PictoAdd2,
    PictoEmptyCart,
    PictoFullCart
  },
  computed: {
    user() {
      if (this.$store.state.user) {
        return this.$store.state.user;
      } else {
        return false;
      }
    },
    cart(){
      const cartFull = storage.get('ClassifiedIdCart');
      if (cartFull){
        return true;
      }else{
        return false;
      }
    }
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/main";
  #left-header-mobile #logo {
      fill: $main-green;
    }
  #left-header-mobile:hover #logo {
    fill: $secondary-green;
  }
@media screen and (min-width: 576px) {
   
  }
@media screen and (min-width: 768px) {
  
}
@media screen and (min-width: 992px) {
  #left-header-desktop #logo {
      fill: $main-green;
      width: 30px;
    }
  #left-header-desktop:hover #logo {
    fill: $secondary-green;
  }
}
@media screen and (min-width: 1200px) {
  
}
@media screen and (min-width: 1400px) {
    
}
</style>

<style scoped lang="scss">
@import "../../assets/scss/main";
.header-bottom {
  display: none;
}
.sub-nav img {
  border-radius: 100%;
  margin-right: 10px;
}
.sub-nav span {
  margin-left: 10px;
}
.flex {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
#left-header-mobile:hover {
  transform: scale(1.05);
}
#left-header-mobile:hover h1 {
  color: $secondary-green;
}
#right-header-mobile:hover .sub-nav {
  transform: translateX(0);
}
.right-header-mobile:hover header {
  background-color: black;
}
#left-header-mobile,
#right-header-mobile {
  display: flex;
  padding-top: .5em;
  transition: all .3s;
}
#left-header-desktop,
#center-header-desktop,
#right-header-desktop {
  display: none;
}
#left-header-mobile span, h1{
  transition: all .2s ease-in-out;
}
header {
  position: fixed;
  z-index: 1;
  padding: 0.5em 0 0 0 !important;
  width: 100%;
  background-color: #fff;
  display: flex;
}

#se-connecter {
  padding-left: 1em;
  position: relative;
  top: 2px;
}
.nav--button {
  border-radius: 19px;
  padding: 20px;
  width: 100%;
  height: 38px;
  background-color: $main-green;
  border: none;
  margin: 20px 0 40px 0;
  font-size: 14px;
  font-weight: 900px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: white;
}
#pictocamera {
  fill: black;
}
.sub-nav li {
  border-bottom: solid 1px black;
  padding: 25px 25px 25px 10px;
  width: 100%;
  margin-top: 25px;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: black;
}
li:hover, span:hover {
  color:$main-green;
}
li svg {
  margin-right: 15px;
}

#welcome {
  border: none;
  font-size: 24px;
}
.sub-nav {
  padding: 30px;
  width: 85%;
  height: 100vh;
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  background: $light-grey;
  transform: translateX(100%);
  transition: transform 0.2s ease-in-out;
}
.disconect--button {
  position: absolute;
  bottom: 10em;  
  padding: 25px 25px 25px 10px;
  width: 100%;
  margin-top: 25px;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.disconect--button span {
  color: $main-green;
}
#div-empty-cart {
  width: 32px;
}
#left-header-desktop a:hover svg {
  fill: $secondary-green !important;
}
#picto-home {
  fill: $main-green !important;
}
@media screen and (max-width: 576px) {
}
@media screen and (min-width: 768px) {
}
@media screen and (min-width: 992px) {

  .header-bottom {
    width: 100%;
    display: block;
    background-color: $main-green;
    position: absolute;
    bottom: -23px;
    left: 0;
  }
  .header-bottom ul {
    display: flex;
    justify-content: center;
    font-size: 13px;
    padding: .3em 0;
  }
  .header-bottom a li {
    color: #fff;
    padding: 0 1em;
  }
  #left-header-desktop svg {
    width: 32px;
  }
  #left-header-mobile,
  #right-header-mobile {
    display: none;
  }
  #left-header-desktop,
  #center-header-desktop,
  #right-header-desktop {
    display: flex;
    width: 100%;
  }
  #right-header-desktop h3 {
    font-size: 12px;
  }
  #left-header-desktop a {
    display: flex;
    align-items: center;
  }
  #left-header-desktop:hover h1 {
    color: $secondary-green;
  }
  #left-header-desktop {
    transition: all .3s;
  }
  #left-header-desktop:hover {
    transform: scale(1.025);
  }
  #left-header-desktop #logo-link {
    margin-right: 0.3em;
  }
  #left-header-desktop h1 {
    position: relative;
    top: -7px;
    font-weight: 900;
    font-size: 18px;
    color: $main-green;
    transition: all 0.3s;
  }
  #right-header-desktop img {
    border-radius: 100%;
    width: 30px;
    height: 30px;
  }
  #right-header-desktop {
    align-items: center;
    justify-content: flex-end;
  }
  #right-header-desktop > * {
    margin-left: 2em;
  }
  #right-header-desktop > *:hover {
    cursor: pointer;
  }
  .userPicto{
    transition: all .2s ease-in-out;
  }
  .userPicto:hover{
    transform: scale(1.3);
  }
}
@media screen and (min-width: 1200px) {
}
@media screen and (min-width: 1400px) {
}
</style>