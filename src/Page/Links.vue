<template>
    <div id="links">
        <v-row justify="center">
            <v-col cols="8">
                <v-img style="border-radius: 8px" max-height="200px" src="https://i.loli.net/2020/03/27/Rj8mhbcaPuTXoFJ.jpg">
                </v-img>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="8">
                <div class="title">相关链接 <span class="caption">Links</span></div>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="8">
                <v-row>
                    <v-col cols="4" v-for="link in links" :key="link.id" >
                        <v-card flat color="primary" class="my-btn" dark target="_blank" hover :href="link.url" >
                            <v-card-title>{{link.title}}</v-card-title>
                            <v-card-subtitle>
                                <v-icon color="" left>mdi-link</v-icon><span class="caption">{{link.url}}</span>
                            </v-card-subtitle>
                            <v-card-text>
                                {{link.description}}
                            </v-card-text>
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
                blogger: {},
                links:[]
            }
        },
        created:function(){
            this.fetchData()
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
    .my-btn{
        background:linear-gradient(135deg, #2178ff 0%,#5d93e6 100%);
        color: #ffffff;
        /*background-image: linear-gradient(-135deg,#2178ff 100%, #ABDCFF 10%);*/
    }
</style>
