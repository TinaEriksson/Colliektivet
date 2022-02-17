<template>
 <div class="container">
  <section>
    <router-link to="/products">Visa mer</router-link>
  </section>
  <section>
    <h2>Lorem Ipsum</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odit
      commodi, officia iste, eum at rerum numquam quam quibusdam veritatis
      minima excepturi? Impedit quos possimus aut rerum aliquam doloremque
      distinctio?
    </p>
    <div id="storeTime">
      <h4>Öppettider fysisk butik:</h4>
      <p>Mån-Fre: 9-18</p>
      <p>Lör-Sön: 10-16</p>
    </div>
  </section>
  </div>
</template>

<style scoped>
#storeTime h4 {
  margin-bottom: 1px;
}
#storeTime p {
  margin: 3px;
}
</style>
