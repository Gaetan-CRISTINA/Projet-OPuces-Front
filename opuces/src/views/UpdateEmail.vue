<template>
  <div>
    <Header2 />
    <div class="illusLamp">
      <IllusLamp />
    </div>
    <div class="main-container">
      <div class="left">
        <form @submit="handleSubmit">
          <h6>Votre Email Actuel</h6>
          <input
            v-model="currentEmail"
            type="email"
            name="currentEmail"
            class="currentEmail"
            placeholder=""
          />
          <div class="error" v-if="currentEmailEmpty">
            Vous devez saisir votre email actuel
          </div>

          <h6>Nouvelle adresse mail</h6>
          <input
            v-model="newEmail"
            type="email"
            name="newEmail"
            class="newEmail"
          />
          <div class="error" v-if="newEmailEmpty">
            Vous devez saisir une nouvelle adresse mail
          </div>

          <h6>Confirmation de votre nouvelle adresse mail</h6>
          <label class="eye-label">
            <input
              v-model="newEmailVerify"
              type="email"
              name="newEmailVerify"
              class="newEmailVerify"
            />
          </label>
          <div class="error" v-if="newEmailVerifyEmpty">
            Vous devez saisir une adresse mail
          </div>

          <div class="error" v-if="newEmailConfirm">
            Les adresses mail ne correspondent pas.
          </div>
          <button class="--button connect">
            Enregistrer les modifications
          </button>
        </form>
        <router-link
        :to="{
          name: 'Home'
          }">
        <button class="--button connect">
            Annuler et retourner à l'accueil
          </button>
        </router-link>
      </div>

      <div class="right">
        <div class="IllusPlane">
          <img src="../assets/svg/Groupe-256.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header2 from "../components/organisms/Header2.vue";
import IllusLamp from "../components/atoms/IllusLamp.vue";
import userService from "../services/userService";
export default {
  name: "UpdateEmail",
  components: {
    Header2,
    IllusLamp,
  },
  data() {
    return {
      currentEmail: "",
      currentEmailEmpty: false,

      newEmail: "",
      newEmailEmpty: false,

      newEmailVerify: "",
      newEmailVerifyEmpty: false,

      newEmailConfirm: false,
    };
  },
  methods: {
    async handleSubmit(event) {
      event.preventDefault();
      if (this.currentEmail == "") {
        this.currentEmailEmpty = true;
      }
      if (this.newEmail == "") {
        this.newEmailEmpty = true;
      }

      if (this.newEmailVerify == "") {
        this.newEmailVerifyEmpty = true;
      }

      if (this.newEmail !== this.newEmailVerify) {
        this.newEmailConfirm = true;
      }

      if (
        !this.currentEmailEmpty &&
        !this.newEmailEmpty &&
        !this.newEmailVerifyEmpty &&
        !this.newEmailConfirm
      ) {
        console.log("Envoie du nouvel email à l'API");
        let result = await userService.updateUserEmail(this.newEmail);
        console.log(result);
        this.$router.push({ name: 'Myaccount' });
         
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/main.scss";
.main-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  margin-top: 7rem;
}
.left,
.right {
  margin-top: 10rem;
}
.left {
  display: flex;
  
  justify-content:center;
  flex-direction: column;
}

.--button {
  margin-top: 2em;
  background-color: $main-green;
  border-radius: 19px;
  padding: 1px;
  height: 38px;
  color: white;
  width: 100%;
  border: none;
  font-size: 14px;
  font-weight: 900px;
  cursor: pointer;
  transition: all 0.3s;
}
button:hover {
  background-color: $secondary-green;
}
input {
  height: 38px;
  background-color: $light-grey;
  border: none;
  border-radius: 6px;
  padding-left: 1em;
  width: 100%;
  margin-bottom:15px;
}
input:focus,
select:focus,
textarea:focus {
  outline: none;
}
.illusLamp {
  display: none;
}
.right {
  display:none;
}
@media screen and (min-width: 576px) {
  .illusLamp {
    display: none;
  }
  .main-container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
@media screen and (min-width: 768px) {
  .illusLamp {
    display: none;
  }
  .main-container {
    flex-direction: column;
  }
}
@media screen and (min-width: 992px) {
  .illusLamp {
    display: none;
  }
  .main-container {
    flex-direction: row;
  }
  .right {
    display: block;
    margin-left:60px;
    }
}
@media screen and (min-width: 1200px) {
  .illusLamp {
    display: none;
  }
  .right {
    display: block;
    margin-left:80px;
    }
}
@media screen and (min-width: 1400px) {
  .illusLamp {
    display: inline-block;
    position: fixed;
    margin-left: 6%;
  }
  .right {
    display: block;
    margin-left:100px;
    }
}
</style>