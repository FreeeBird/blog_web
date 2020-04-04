<template>
    <div id="about">
        <v-row justify="center">
            <v-col cols="8">
                <v-img style="border-radius: 8px" max-height="200px"  src="https://i.loli.net/2020/04/04/pOebh9P67fWzyaR.png">

                </v-img>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="8">
                <div class="title">关于博客 <span class="caption">About</span></div>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="8">
                <v-card flat class="my-btn" dark>
                    <v-card-title class="headline">{{blog.title}}</v-card-title>
                    <v-card-subtitle>
                        {{blog.subtitle}}
                        <v-chip-group dark>
                            <v-chip v-for="(item, i) in keywords" :key="i">{{item}}</v-chip>
                        </v-chip-group>
                    </v-card-subtitle>
                    <v-card-text>
                        {{ blog.description }}
                    </v-card-text>
                    <v-card-actions>

                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="8">
                <v-card  flat class="my-btn" dark>
                    <v-avatar class="float-left ma-4" size="100" tile>
                        <v-img :src="blogger.portraitUrl"></v-img>
                    </v-avatar>
                    <v-card-title class="headline font-weight-black">
                        {{blogger.nickname}}

                    </v-card-title>
                    <div color="accent" class="caption ml-2"><v-icon small>mdi-map-marker</v-icon>{{blogger.address}}</div>
                    <v-card-subtitle class="">
                        {{blogger.introduction}}
                    </v-card-subtitle>
                    <v-card-actions>
                        <v-btn text >
                            <v-icon>mdi-email</v-icon>
                            <span>{{blogger.email}}</span>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
<!--        留言-->
        <v-row justify="center">
            <v-col cols="8">
                <div class="title">留言 <span class="caption">Leave a message</span> </div>
                <v-form v-model="valid">
                    <v-container>
                        <v-row justify="start" class="mb-0 pb-0">
                            <v-col cols="4" class="mb-0 pb-0">
                                <v-text-field outlined dense solo v-model="nickname" label="*昵称 Nickname" required></v-text-field>
                            </v-col>
                            <v-col cols="4" class="mb-0 pb-0">
                                <v-text-field outlined dense solo v-model="email" :rules="emailRules" label="*电子邮箱 E-mail" required></v-text-field>
                            </v-col>
                            <v-col cols="8" class="mt-0 pt-0">
                                <v-textarea solo outlined dense name="input-7-4" placeholder="写下你的留言"></v-textarea>
                            </v-col>
                        </v-row>
                        <div><v-btn class="my-btn" depressed color="primary">发表留言 <span class="caption"> Post Message</span></v-btn></div>
                    </v-container>
                </v-form>
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
                valid: false,
                nickname: '',
                nameRules: [
                    v => !!v || 'Name is required',

                ],
                email: '',
                emailRules: [
                    v => !!v || 'E-mail格式不正确',
                    v => /.+@.+/.test(v) || 'E-mail must be valid',
                ],
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
    .my-btn{
        background:linear-gradient(135deg, #2178ff 0%,#5d93e6 100%);
        color: #ffffff;
        /*background-image: linear-gradient(-135deg,#2178ff 100%, #ABDCFF 10%);*/
    }
</style>
