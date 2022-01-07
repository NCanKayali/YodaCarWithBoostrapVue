<template>
  <div id="app">
    <c-navbar></c-navbar>
    <router-view/>
  </div>
</template>

<script>
// import CNavbar from "./components/CNavbar";
import globalComponents from "./components/globalComponents.js";

export default {
  components: {
    ...globalComponents,
  },
};
</script>


<style>

</style>
