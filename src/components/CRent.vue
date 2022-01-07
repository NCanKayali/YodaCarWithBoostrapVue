<template>
  <div class="flex">
    <c-card class="cards" v-for="i in 8" :key="i">{{i}}</c-card>
  </div>
</template>

<script>
import CCard from "../views/CCard"
export default {
components: {
    CCard
}
};
</script>

<style>
.flex{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
}
.cards {
    width: 600px;
    border: none;
    box-shadow: 2px 2px 6px black;
    margin: 30px 10px 10px 10px;
}
</style>