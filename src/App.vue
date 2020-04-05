<template>
  <div id="app" >

    <v-app>
      <v-app-bar  app dense  elevate-on-scroll color="white" >

        <v-toolbar-title>
          <div class="title text-no-wrap ml-12 mr-12">
         {{blog.title}}
          </div>
        </v-toolbar-title>

        <v-tabs  color="primary" slider-size="4" class="ml-12" align-with-title>
          <v-tab  @click="goTo('/')">首页</v-tab>
          <v-tab @click="goTo('/category')">分类</v-tab>
          <v-tab @click="goTo('/archive')">归档</v-tab>
          <v-tab @click="goTo('/links')">友链</v-tab>
          <v-tab  @click="goTo('/about')">关于</v-tab>
        </v-tabs>
        <v-btn rounded icon color="primary" >
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

      </v-app-bar>
      <v-content class="" id="scroll-target">
        <v-container fluid >
          <router-view ></router-view>
        </v-container>
<!--        <v-btn color="secondary" v-if="offsetTop>200" fixed right top fab small @click="$vuetify.goTo(0)">-->
<!--          <v-icon>mdi-chevron-up</v-icon>-->
<!--        </v-btn>-->
      </v-content>

      <v-footer color="secondary" width="100%" height="180">
        <v-btn color="primary" tile v-if="offsetTop>200" fixed right bottom fab small @click="$vuetify.goTo(0)">
          <v-icon>mdi-chevron-up</v-icon>
        </v-btn>
        <v-row justify="center">
          <v-col cols="3" class="mx-auto">
            <div class="title my-title">关于博客 <span class="caption">About Blog</span></div>
            <div class="caption my-2">{{blog.description}}</div>
            <div class="subtitle-2">
            <v-btn icon>
              <v-icon small color="red">mdi-heart</v-icon>
            </v-btn>
            COPYRIGHT © {{ blog.createTime | dateFmt("YYYY") }} {{blog.title}}
            </div>
          </v-col>
          <v-col cols="3"></v-col>
          <v-col cols="3"></v-col>
        </v-row>
      </v-footer>

    </v-app>
  </div>
</template>

<script>
  import {blogger, getBlogInfo} from "@/api/common";
export default {
  name: 'App',
  components: {

  },
  data(){
    return{
      offsetTop: 0,
      text: 'home',
      keyword: '',
      blog:{},
      blogger:{},
    }
  },
  created: function () {
    this.getBlogInformation()
  },
  methods:{
    handleScroll() {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    },
    goTo(path){
      this.$router.push(path)
    },
    getBlogInformation(){
      getBlogInfo().then(response => {
        this.blog = response.data
        sessionStorage.setItem("blog",JSON.stringify(this.blog))
      })
      blogger().then(res => {
        this.blogger = res.data
        sessionStorage.setItem("blogger",JSON.stringify(this.blogger))
      })
    },
  },
  mounted(){
    window.addEventListener("scroll",this.handleScroll)
  },
}
</script>

<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  /*font-family: "Microsoft YaHei UI","Roboto", sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
.my-title{
  width: fit-content;
  border-bottom: #2178ff 2px solid;
}
</style>
