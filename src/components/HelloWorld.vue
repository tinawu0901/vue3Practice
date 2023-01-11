<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr />
    <h2>當前滑鼠位置:x:{{ point.x }},y:{{ point.y }}</h2>
  </div>
</template>

<script>
import usePoint from "../hooks/usePoint";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    const point = usePoint();

    return {
      point,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
