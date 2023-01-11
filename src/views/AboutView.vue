<template>
  <div class="about">
    <Search />
    <hr />
    <List />
  </div>
</template>

<script>
import Search from "@/components/GithubSearch.vue";
import List from "@/components/GithubList.vue";

export default {
  setup() {},
  components: {
    Search,
    List,
  },
};
</script>
