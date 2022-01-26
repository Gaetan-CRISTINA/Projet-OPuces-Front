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
<h2>Conditions Générales d'Utilisation</h2>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates quidem, molestias at minima totam facilis nemo omnis perspiciatis nesciunt nihil ducimus aspernatur maxime tenetur doloribus doloremque laboriosam amet debitis itaque, architecto dignissimos. Suscipit inventore adipisci quae reprehenderit nam temporibus unde. Magni deserunt quia error dolorem rerum explicabo distinctio velit, dolores aliquam sunt, laudantium placeat dolorum, architecto natus repellat vel unde aperiam et excepturi! Nesciunt voluptate maiores quisquam nemo quas, impedit possimus molestias fuga ex quae animi, ut nobis natus consequatur distinctio qui ullam exercitationem sint atque aperiam modi! Dolorum dolor facere omnis voluptatibus porro blanditiis eius nisi doloremque molestiae voluptates. Repellat, animi perspiciatis, porro numquam cum voluptatum saepe impedit voluptas omnis quo voluptates delectus modi quam deleniti explicabo nisi quod quidem aliquid molestias voluptate debitis soluta odit minima asperiores? Molestiae eum provident consequatur delectus dignissimos illum sapiente tempore rerum tenetur unde magni, blanditiis ipsam! Sed eum voluptate reprehenderit molestiae temporibus, aperiam minima perferendis aliquam labore id consequuntur dicta suscipit, voluptatum provident nobis perspiciatis excepturi dolores, distinctio maxime! Inventore, iusto quam rem, ad consequuntur earum ipsam quos molestiae saepe ratione nisi iste! Ea magni ut illum vitae laboriosam dolorem nobis et, nesciunt perspiciatis similique hic dolor praesentium quas dolorum id voluptatem est laudantium sunt soluta optio aperiam nostrum doloremque, obcaecati a. Hic quis consectetur quam provident fuga iusto nesciunt expedita, atque nam culpa alias quibusdam minus! Tenetur culpa animi id. Exercitationem vitae minima voluptatem soluta fugit earum libero reiciendis nam dolore alias, sint, aspernatur error asperiores dolorum quod distinctio optio amet esse quasi necessitatibus neque. Maiores quos eius facere itaque quisquam aliquam et perferendis non sunt asperiores harum officiis dignissimos, quae quod natus, id fuga magni. Asperiores hic sunt sapiente, tempore earum tenetur mollitia aut soluta enim, consequatur nostrum quidem incidunt illum, deserunt voluptatem pariatur sit delectus optio. Cumque cupiditate nihil hic, vel, impedit exercitationem molestias adipisci amet necessitatibus voluptate aspernatur sint eveniet commodi similique doloribus, neque vitae. Ipsum modi laboriosam excepturi nisi nemo accusantium, autem vitae, eaque mollitia eos non recusandae suscipit, facere eius quos iste assumenda enim ducimus laborum. Quae eaque voluptate fugit qui, incidunt maxime, impedit delectus, possimus corporis a illo! Doloremque dolores voluptas ipsum quibusdam ullam explicabo! Eius, iste? Dicta hic soluta perspiciatis ad earum repudiandae labore rerum id quis sed, pariatur voluptatibus cupiditate, neque illo libero corporis doloribus dolores mollitia dolorum debitis numquam. Aperiam perspiciatis nobis eum, exercitationem distinctio molestias incidunt consequatur. Neque hic cumque quam tempora cum dolorum ad ipsam, ab veniam itaque facere reprehenderit quisquam voluptatum unde, fugit dolores, delectus deleniti accusantium excepturi inventore commodi obcaecati mollitia beatae! Porro repellat quisquam quos, ipsa vitae itaque sint iste accusamus, explicabo assumenda officiis modi? Aliquid aut quam nihil veniam ut cumque odit magni quos veritatis, expedita sunt quidem quisquam pariatur eum optio quas perferendis ad ex possimus hic voluptatem facere unde eaque? Dolore praesentium pariatur aut, unde at numquam minima neque animi optio provident suscipit, voluptatem delectus architecto repellat enim non eveniet fugiat officiis deserunt saepe a vel. Velit est molestias ex voluptatibus libero explicabo laborum!</p>
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