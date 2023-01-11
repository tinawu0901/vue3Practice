<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <input type="text" v-model="test" />
    <p>{{ test }}</p>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  data() {
    return {
      test: "1",
    };
  },
  watch: {
    test: function () {
      console.log("test change");
    },
  },
  components: {
    HelloWorld,
  },
};
</script>
