<template>
  <div class="search">
    <div class="input">
      <h3>Serch Github Users</h3>
      <input
        type="text"
        placeholder="enter the name your search"
        v-model="keyWord"
      />&nbsp;
      <!-- <h2>{{count}}</h2>
     <button @click="count++">Serach</button> -->
      <button @click="searchUsers">Serach</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue"; //沒加部會渲染畫面
import bus from "../mitt/bus";
export default {
  name: "GithubSearch",

  setup() {
    let keyWord = ref("");
    let count = ref(0);
    let userlist = [];
    function searchUsers() {
      if (keyWord.value == "") {
        alert("不得為空值");
        return;
      }

      axios.get(`https://api.github.com/search/users?q=${keyWord.value}`).then(
        (response) => {
          console.log("請求成功了", response.data.items);
          userlist = response.data.items;
          bus.emit("getUserList", userlist);
        },
        (error) => {
          console.log("請求失敗了", error.message);
        }
      );
    }
    return {
      keyWord,
      count,
      searchUsers,
    };
  },
};
</script>
<style scoped>
.search {
  background-color: grey;
  width: 100%;
  height: 150px;
}
.input {
  padding-top: 25px;
}
</style>
