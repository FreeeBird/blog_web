<template>
  <div id="app">

    <v-app>
      <v-app-bar app light elevate-on-scroll color="white">
        <v-spacer></v-spacer>

        <v-avatar  size="36" >
          <v-icon>mdi-account-circle</v-icon>
        </v-avatar>
        <v-toolbar-title>
          FreeeBird's BLOG
        </v-toolbar-title>
        <v-btn text>
          <router-link to="/">首页</router-link>
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
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
      </v-app-bar>
      <v-content>
        <v-container fluid>
          <router-view ></router-view>
        </v-container>
        <v-btn color="red" dark fixed right bottom fab>
          <v-icon>mdi-chevron-up</v-icon>
        </v-btn>
      </v-content>


      <v-footer elevation="24" color="white" >
        <myFooter></myFooter>
      </v-footer>

    </v-app>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import myFooter from "@/components/Footer";
export default {
  name: 'App',
  components: {
    myFooter,
  }
}
</script>

<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
