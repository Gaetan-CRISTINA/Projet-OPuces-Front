<template>
  <header>
    <div class="main-container">
      
      <div class="flex">
        
        <div id="left-header-mobile">
          <router-link
            v-if="!user"
            :to="{
              name: 'LoginForm'
              }"
              >
          <PictoUser />
          <a id="se-connecter">
            
            Se connecter
            
          </a>
          </router-link>
          <nav class="sub-nav">
            <ul>
                <li id="welcome"><PictoUser/> Jean-Michel</li>

                  <router-link
                      :to="{
                        name: 'UserProfil'
                      }">
                    <li><PictoUser />Mon profil</li>
                  </router-link>  

                  <router-link
                      :to="{
                        name: 'MyAccound'
                        }">
                    <li><PictoCompte />  Mon compte</li>
                  </router-link>

                  <router-link
                      :to="{
                        name: 'UserClassified'
                        }">
                    <li><PictoAnnonces />  Mes annonces</li>
                  </router-link>

                  <router-link
                      :to="{
                        name: 'CGV'
                        }">
                    <li><PictoInfo />  CGV-CGU</li>
                  </router-link>

                  <router-link
                      :to="{
                        name: 'LegalMentions'
                        }">
                    <li><PictoText />  Mentions légales</li>
                  </router-link>

                  <router-link
                      :to="{
                        name: 'Contact'
                        }">
                    <li><PictoMail /> Contact</li>
                  </router-link>
            </ul>
                  <router-link
                      :to="{
                        name: 'Logout'
                        }">
            <a class="disconect--button">Se déconnecter</a>
                  </router-link>
        </nav>
        </div>
        
        <div id="right-header-mobile">
          <PictoFilters />
        </div>
        <div id="left-header-desktop">
        <!--User Connected-->
        <router-link
          v-if="user"
            :to="{
              name: 'Home'
              }"
              >
          <a>
              <span id="logo-link"><Logo /></span>
              <h2 id="txt-link">O'Puces</h2>

          </a>
        </router-link>
        <!-- FIN-->

        <!-- User Offline-->
        <router-link
          v-if="!user"
            :to="{
              name: 'PageRegister'
              }"
              >
          <a>
              <span id="logo-link"><Logo /></span>
              <h2 id="txt-link">O'Puces</h2>

          </a>
        </router-link>
        <!-- FIN-->
        
        </div>
        <div id="center-header-desktop">
          <SearchBar />
        </div>

        
        <div style="display: none" id="right-header-desktop">
          <PictoUser />
        </div>

        
        <div id="right-header-desktop">
          <router-link
            :to="{
              name: 'Home'
              }"
              >
          <PictoHome />
          </router-link>

          <router-link
          v-if="user"
            :to="{
              name: 'UserClassified'
              }"
              >
          <PictoAnnonces />
          </router-link>

          <router-link
          v-if="user"
            :to="{
              name: 'CreateClassified'
              }"
              >
          <PictoAdd2 />
          </router-link>

        <!--User Connected-->
        
          <router-link
          v-if="user"
              :to="{
              name: 'UserProfil'
              }"
              >
            <img src="https://picsum.photos/30" alt="" />
          </router-link>
        <!--FIN-->

        <!--User Offline-->
          <router-link
          v-if="!user"
              :to="{
                name: 'LoginForm'
                }"
                >
                <PictoUser/>
          </router-link>
        <!--FIN-->
        </div>
      </div>
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

import PictoFilters from "../atoms/PictoFilters";
import Logo from "../atoms/Logo";
import SearchBar from "../molecules/SearchBar";
import PictoAdd2 from "../atoms/PictoAdd2";
import PictoHome from "../atoms/PictoHome";

export default {
  name: "Header",
  components: {
    PictoUser,
    PictoFilters,
    Logo,
    SearchBar,
    PictoAdd2,
    PictoAnnonces,
    PictoHome,
    PictoCompte,
    PictoInfo,
    PictoText,
    PictoMail,
  
  },
  computed: {
    user(){
      return this.$store.state.user;
    }
  }
  
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/main";
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
#left-header-mobile:hover .sub-nav {
  transform: translateX(0)
}
#left-header-mobile,
#right-header-mobile {
  display: flex;
}
#left-header-desktop,
#center-header-desktop,
#right-header-desktop {
  display: none;
}
header {
  position: fixed;
  z-index: 1;
  padding: 0.5em 0 !important;
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
  left: 0;
  background: $light-grey;
  transform: translateX(-100%);
  transition: transform 0.2s ease-in-out;
  
}
.disconect--button {
  position: absolute;
  bottom: 1em;
  color:$main-green;
}
#div-logo {
  width: 32px;
}
#left-header-desktop a:hover svg {
  fill: $secondary-green !important;
}
#picto-home {
  fill: $main-green !important;
}
@media screen and (min-width: 576px) {
}
@media screen and (min-width: 768px) {
}
@media screen and (min-width: 992px) {
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
  }
  #left-header-desktop a {
    display: flex;
    align-items: center;
  }
  #left-header-desktop a:hover h2 {
    color: $secondary-green;
  }
  #left-header-desktop #logo-link {
    margin-right: 0.3em;
  }
  #left-header-desktop h2 {
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
  }
  #right-header-desktop > * {
    margin-left: 2em;
  }
  #right-header-desktop > *:hover {
    cursor: pointer;
  }
}
@media screen and (min-width: 1200px) {
}
@media screen and (min-width: 1400px) {
}
</style>