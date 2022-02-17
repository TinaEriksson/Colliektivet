<template>
  <li class="product">
    <div class="productData">
      <div class="productImage">
        <img :src="image" :alt="title" />
      </div>
      <div class="productText">
        <h3>{{ title }}</h3>
        <base-badge mode="highlight" :no-margin-left="true">
          <h4>{{ price }} kr</h4>
        </base-badge>
        <p>{{ description }}</p>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'image', 'title', 'price', 'description'],
};
</script>