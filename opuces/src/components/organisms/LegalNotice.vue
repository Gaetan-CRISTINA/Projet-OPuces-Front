<template>
  <div>
    <div class="title-cgu-container">
      <router-link
        :to="{
          name: 'Home',
        }"
      >
        <button class="--button connect">Retour à l'accueil</button>
      </router-link>
    </div>
    <div class="main-container">
      <div class="cgu-container">
        <h2>Mentions Légales</h2>
        <p>
          En vigueur au 18/01/2022<br /><br />

          Conformément aux dispositions des articles 6-III et 19 de la Loi
          n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie
          numérique, dite L.C.E.N., il est porté à la connaissance des
          utilisateurs et visiteurs, ci-après « l’utilisateur », du site
          www.opuces.fr, ci-après le « Site », les présentes mentions
          légales.<br /><br />
          La connexion et la navigation sur le Site par l’Utilisateur implique
          acceptation intégrale et sans réserve des présentes mentions
          légales.<br />
          Ces dernières sont accessibles sur le site à la rubrique « Mentions
          Légales ».<br /><br />
          ARTICLE 1 – L’EDITEUR<br />
          L’édition et la direction de la publication du Site est assurée par
          Xandar O’Puces Team, domiciliée 215 route du soleil levant, 3ème
          planète après le soleil, dont le numéro de téléphone est
          09235845658954, et l’adresse e-mail
          danslesetoiles@contact-opuces.fr.<br />
          La personne est assujettie au répertoire des métiers avec le numéro
          d’inscription FR25 123 874 987.<br />
          Le numéro de TVA intracommunautaire est FR12 546 215 558.<br />
          Ci-après l’éditeur.<br /><br />
          ARTICLE 2 -L’HEBERGEUR<br />
          L’hébergeur du Site est la société OVH, dont le siège social est situé
          au 2 rue Kellermann, 59100 Roubaix, France, avec le numéro de
          téléphone : 0358458521.<br />
          <br />
          ARTICLE 3 – ACCES AU SITE<br />
          Le Site est accessible en tout endroit, 7j/7 et 24h/24 sauf cas de
          force majeure, interruption programmée ou non et pouvant découlant
          d’une nécessité de maintenance. En cas de modification, interrup<br />
          Le Site assure à l’Utilisateur une collecte et un traitement
          d’informations personnelles dans le respect de la vie privée
          conformément à la loi n°78-17 du 6 janvier 1978, l’Utilisateur dispose
          d’un droit d’accès, de rectification, de suppression et d’opposition
          de ses données personnelles. L’Utilisateur exerce ce droit :<br />
          - Par mail à l’adresse email suivante :
          danslesetoiles@contact-opuces.fr<br />
          - Via un formulaire de contact présent dans la rubrique « contact »<br />
          - Via son espace personnel dans la rubrique « contact »<br />
          <br />
          Toute utilisation, reproduction, diffusion, commercialisation,
          modification de toute ou partie du Site, sans autorisation de
          l’Editeur est prohibée et pourra entraînée des actions et poursuites
          judiciaires telles que notamment prévues par le Code de la propriété
          intellectuelle et le Code civil.<br />
          <br />
          Pour plus d’informations, se reporter aux CGV du site www.opuces.fr
          accessibles à la rubrique « CGV ».<br />
          <br />
          Pour plus d’informations en matière de protection des données à
          caractère personnel, se reporter à la Charte en matière de protection
          des données à caractère personnel du site www.opuces.fr accessible à
          la rubrique « Politique de Confidentialité ».<br />
          <br />
          Pour plus d’informations en matière de cookies, se reporter à la
          Charte en matière de cookies du site www.opuces.fr accessible à la
          rubrique « Politique de Confidentialité ».<br />
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CGU",
  components: {},
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/main";
.title-cgu-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 20px;
}
.title-cgu-container img {
  margin-right: 15px;
  width: 40px;
}
.title-cgu-container p {
  color: $main-green;
  font-size: 24px;
  font-weight: 900px;
}
.cgu-container {
  margin: 15px;
  padding: 15px;
}
.cgu-container h2 {
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 900px;
}
.--button {
  border-radius: 19px;
  padding: 1px;
  width: 345px;
  height: 38px;
  color: white;
  background-color: $main-green;
  width: 100%;
  border: none;
  margin: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 900px;
  cursor: pointer;
  margin-top: 100px;
  transition: all 0.3s;
}
.--button:hover {
  background-color: $secondary-green;
}
@media screen and (min-width: 576px) {
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