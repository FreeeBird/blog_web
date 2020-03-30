<template>
    <div id="links">
        <v-row>
            <v-col offset="2" cols="8">
                <v-img max-height="200px" src="https://i.loli.net/2020/03/27/Rj8mhbcaPuTXoFJ.jpg">
                    <v-row align="end" class="lightbox white--text pa-2 fill-height">
                        <v-col>
                            <div class="headline font-weight-bold">相关链接</div>
                        </v-col>
                    </v-row>
                </v-img>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="8">
                <v-row>
            <v-col cols="3" v-for="link in links" :key="link.id" >
                <v-card target="_blank" hover :href="link.url" >
                    <v-card-title>{{link.title}}</v-card-title>
                    <v-card-subtitle>{{link.description}}</v-card-subtitle>
                </v-card>
            </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import {getLinks} from "@/api/common";

    export default {
        name: "Links",
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
                links:[]
            }
        },
        created:function(){
            this.fetchData()
            this.keywords = this.blog.keywords.split(" ")
        },
        methods:{
            fetchData(){
                getLinks().then(res =>{
                    const data = res.data
                    this.links = data.content
                })
            },
        },
    }
</script>

<style scoped>

</style>
