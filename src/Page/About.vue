<template>
    <div id="about">
        <v-row>
            <v-col offset="2" cols="8">
                <v-img max-height="200px" src="https://i.loli.net/2020/03/27/ovqKpmflEwyCZJY.png">
                    <v-row align="end" class="lightbox white--text pa-2 fill-height">
                        <v-col>
                            <div class="headline font-weight-bold">关于博客</div>
<!--                            <div class="body-1">heyfromjonathan@gmail.com</div>-->
                        </v-col>
                    </v-row>
                </v-img>
            </v-col>
        </v-row>
        <v-row>
            <v-col offset="2" cols="4">
                <v-card color="primary" dark>
                    <v-card-title class="headline">{{blog.title}}</v-card-title>
                    <v-card-subtitle class="white--text text-left">
                        {{blog.subtitle}}
                        <v-chip-group>
                            <v-chip color="secondary" v-for="(item, i) in keywords" :key="i">{{item}}</v-chip>
                        </v-chip-group>
                    </v-card-subtitle>

                    <v-card-actions>
                        <v-btn text>了解更多</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="4">
                <v-card color="secondary" dark>
                    <v-avatar
                            class="float-right ma-4"
                            size="100"
                            tile
                    >
                        <v-img :src="blogger.portraitUrl"></v-img>
                    </v-avatar>
                    <v-card-title class="headline">{{blogger.nickname}}</v-card-title>
                    <v-card-subtitle class="white--text text-left">
                        {{blogger.introduction}}
                        <v-chip-group>
                            <v-chip color="primary">{{blogger.address}}</v-chip>
                        </v-chip-group>

                    </v-card-subtitle>

                    <v-card-actions>
                        <v-btn text>{{blogger.email}}</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import {blogger} from "@/api/common";

    export default {
        name: "About",
        data(){
            return{
                blog: {},
                blogger: {
                    address: "",
                    email: "1097@qq.com",
                    id: 1,
                    introduction: "",
                    nickname: "",
                    password: "",
                    portraitUrl: "",
                    username: "",
                },
                keywords:[
                    "java","Vue"
                ],
            }
        },
        created:function(){
            this.getBlog()
            this.getBlogger()
            this.keywords = this.blog.keywords.split(" ")
        },
        methods:{
            getBlog(){
                this.blog = JSON.parse(sessionStorage.getItem("blog"))
            },
            getBlogger(){
                blogger().then(respense => {
                    const res = respense
                    this.blogger = res.data
                })
            },
        },
    }
</script>

<style scoped>

</style>
