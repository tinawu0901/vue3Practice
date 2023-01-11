<template>
  <div class="row">
    <div class="card" v-for="user in usersList" :key="user.login">
      <a :href="user.html_url" target="_blank">
        <img class="pic" :src="user.avatar_url" />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
  </div>
</template>

<script>
import bus from "../mitt/bus";
import { ref } from "vue";
export default {
  name: "GithubList",

  setup() {
    let usersList = ref([]);

    bus.on("getUserList", (users) => {
      console.log(usersList);
      console.log("我是List組件，收到數據", users);
      usersList.value = users;
      console.log(usersList);
    });
    return {
      usersList,
    };
  },
  // data(){
  //   return{
  //     usersList:[]
  //   }
  // },
  // mounted(){
  //   bus.on('getUserList',(users)=>{
  //     console.log('我是List組件，收到數據',users)
  //     this.usersList = users
  //     console.log(this.usersList)

  //   })
  // }
};
</script>
<style scoped>
.row {
  width: 800px;
  margin: 0 auto;
  clear: both;
}
.row .card {
  float: left;
  width: 236px;
  margin: 0 15px 15px 0;
  border: 1px solid #272a31;
  background-color: #161312;
  height: 232px;
  position: relative;
}
.pic {
  width: 100%;
  height: 80%;
}
.row .card p {
  height: 46px;
  line-height: 46px;
  text-align: center;
  border-top: 1px solid #272a31;
  font-size: 20px;
  color: #ccc;
  background-color: #1b2026;
  display: block;
  position: absolute;
  bottom: -18px;
  left: 0;
  width: 100%;
}
</style>
