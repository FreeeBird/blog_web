<template>
  <div id="app">
    <v-app>
      <v-app-bar app dark elevate-on-scroll color="primary" >
        <v-toolbar-title>
          BLOG
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-app-bar>
      <v-content>
        <p>
        <router-link to="/goo">gggg</router-link>
        </p>
        <p><router-link to="/hello">hhh</router-link></p>

        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
      <v-footer app>
        footer
      </v-footer>
    </v-app>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {

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
  margin-top: 60px;
}
</style>
