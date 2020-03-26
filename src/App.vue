<template>
  <div id="app">

    <v-app>
      <v-app-bar app dark dense elevate-on-scroll color="primary">

        <v-avatar  size="36" >
          <v-icon>mdi-home</v-icon>
        </v-avatar>
        <v-toolbar-title>
          {{blog.title}}
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text>
          首页
        </v-btn>
        <v-btn text>
          归档
        </v-btn>
        <v-btn text>
          链接
        </v-btn>
        <v-btn text>
          关于
        </v-btn>
        <v-spacer></v-spacer>

        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-btn text>
          <v-icon>mdi-magnify</v-icon> 搜索文章
        </v-btn>
      </v-app-bar>
      <v-content>
        <v-container fluid>
          <router-view ></router-view>
        </v-container>
        <v-btn color="primary" light fixed right bottom fab>
          <v-icon>mdi-chevron-up</v-icon>
        </v-btn>
      </v-content>


      <v-footer elevation="24" color="white" >
        <myFooter :title="blog.title"></myFooter>
      </v-footer>

    </v-app>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import myFooter from "@/components/Footer";
import {getBlogInfo} from "@/api/common";
export default {
  name: 'App',
  components: {
    myFooter,
  },
  data(){
    return{
      blog:{
        title: "",
        description: "",
        subtitle:"",
        keywords:"",
        createTime: null,
        id: 1,
      },
    }
  },
  created: function () {
    this.getBlogInformation()
  },
  methods:{
    getBlogInformation(){
      getBlogInfo().then(response => {
        const res = response
        this.blog = res.data
        sessionStorage.setItem("blog",JSON.stringify(this.blog))
        console.log("ss:")
        console.log(JSON.parse(sessionStorage.getItem("blog")))
      })
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /*font-family: "Microsoft YaHei UI","Roboto", sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
