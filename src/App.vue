<template>
  <div id="app">

    <v-app>
      <v-app-bar app flat hide-on-scroll dense color="primary">
        <v-spacer></v-spacer>
        <v-avatar  size="24" >
          <v-icon >mdi-home</v-icon>
        </v-avatar>
        <v-toolbar-title class="mr-4">
          {{blog.title}}
        </v-toolbar-title>

        <v-btn text :ripple="false" @click="goTo('/')">
          首页
        </v-btn>
        <v-btn text :ripple="false">
          归档
        </v-btn>
        <v-btn text :ripple="false" @click="goTo('/links')">
          链接
        </v-btn>
        <v-btn text :ripple="false" @click="goTo('/about')">
          关于
        </v-btn>


        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-btn rounded icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-app-bar>
      <v-content class="accent">
        <v-container fluid>
          <router-view ></router-view>
        </v-container>
        <v-btn color="secondary" fixed right bottom fab small @click="$vuetify.goTo(0)">
          <v-icon>mdi-chevron-up</v-icon>
        </v-btn>
      </v-content>

      <v-footer  color="#f4f5f7" width="100%">
        <v-col class="mx-auto text-center">
          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          COPYRIGHT © {{ blog.createTime | dateFmt("YYYY") }} {{blog.title}}
        </v-col>
      </v-footer>

    </v-app>
  </div>
</template>

<script>
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
    goTo(path){
      this.$router.push(path)
    },
    getBlogInformation(){
      getBlogInfo().then(response => {
        const res = response
        this.blog = res.data
        sessionStorage.setItem("blog",JSON.stringify(this.blog))
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
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
