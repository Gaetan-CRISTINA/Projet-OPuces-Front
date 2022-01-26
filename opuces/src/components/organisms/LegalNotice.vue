<template>
<div>
  <div class="title-cgu-container">
    <router-link
    :to="{
      name: 'Home'
      }">
   <a href="#"><img src="https://img.icons8.com/flat-round/64/000000/arrow-pointing-left--v1.png"/></a>
  <p>Retour</p>
    </router-link>
</div>
<div class="cgu-container">
<h2>Mentions Légales</h2>
<p>MENTIONS LEGALES
En vigueur au 18/01/2022

Conformément aux dispositions des articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique, dite L.C.E.N., il est porté à la connaissance des utilisateurs et visiteurs, ci-après « l’utilisateur », du site www.opuces.fr, ci-après le « Site », les présentes mentions légales.
La connexion et la navigation sur le Site par l’Utilisateur implique acceptation intégrale et sans réserve des présentes mentions légales.
Ces dernières sont accessibles sur le site à la rubrique « Mentions Légales ».
ARTICLE 1 – L’EDITEUR
L’édition et la direction de la publication du Site est assurée par Xandar O’Puces Team, domiciliée 215 route du soleil levant, 3ème planète après le soleil, dont le numéro de téléphone est 09235845658954, et l’adresse e-mail danslesetoiles@contact-opuces.fr.
La personne est assujettie au répertoire des métiers avec le numéro d’inscription FR25 123 874 987.
Le numéro de TVA intracommunautaire est FR12 546 215 558.
Ci-après l’éditeur.
ARTICLE 2 -L’HEBERGEUR
L’hébergeur du Site est la société OVH, dont le siège social est situé au 2 rue Kellermann, 59100 Roubaix, France, avec le numéro de téléphone : 0358458521.
ARTICLE 3 – ACCES AU SITE
Le Site est accessible en tout endroit, 7j/7 et 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant découlant d’une nécessité de maintenance.
En cas de modification, interruption ou suspension du Site, l’Editeur ne saurait être tenu responsable.
ARTICLE 4 – COLLECTE DES DONNES
Le Site assure à l’Utilisateur une collecte et un traitement d’informations personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978, l’Utilisateur dispose d’un droit d’accès, de rectification, de suppression et d’opposition de ses données personnelles. L’Utilisateur exerce ce droit :
-	Par mail à l’adresse email suivante : danslesetoiles@contact-opuces.fr
-	Via un formulaire de contact présent dans la rubrique « contact »
-	Via son espace personnel dans la rubrique « contact »
Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du Site, sans autorisation de l’Editeur est prohibée et pourra entraînée des actions et poursuites judiciaires telles que notamment prévues par le Code de la propriété intellectuelle et le Code civil.
Pour plus d’informations, se reporter aux CGV du site www.opuces.fr accessibles à la rubrique « CGV ».
Pour plus d’informations en matière de protection des données à caractère personnel, se reporter à la Charte en matière de protection des données à caractère personnel du site www.opuces.fr accessible à la rubrique « Politique de Confidentialité ».
Pour plus d’informations en matière de cookies, se reporter à la Charte en matière de cookies du site www.opuces.fr accessible à la rubrique « Politique de Confidentialité ».
</p>
</div></div>

</template>
<script>

export default {
  name: "CGU",
  components: {
  
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/main";
.title-cgu-container {
  display:flex;
  justify-content: flex-start;
  align-items: center;
  margin: 20px;
}
.title-cgu-container img {
  margin-right: 15px;
  width:40px;
}
.title-cgu-container p {
  color:$main-green;
  font-size: 24px;
  font-weight: 900px;
}
.cgu-container {
  margin: 15px;
  padding:15px;
}
.cgu-container h2 {
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 900px;
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