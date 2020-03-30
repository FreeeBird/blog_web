<template>
    <div id="home">
        <v-row justify="center">
<!--            左侧-->
            <v-col cols="2" xs="12" sm="12" md="3" lg="2">
<!--                个人介绍-->
                <v-card class=" mb-4 text-center ">
                    <v-avatar size="100">
                        <v-img  :src="blogger.portraitUrl"></v-img>
                    </v-avatar>
                    <v-card-title class="justify-center">{{ blogger.nickname }}</v-card-title>
                    <v-card-subtitle class="caption"><v-icon small>mdi-map-marker</v-icon> {{blogger.address}}</v-card-subtitle>
                    <v-btn text small >
                        <v-icon>mdi-email</v-icon>
                        <span>{{blogger.email}}</span>
                    </v-btn>
                    <v-card-text class="text--primary pb-0">
<!--                        <p class="subtitle-2">{{ blogger.introduction }}</p>-->

                         <v-row dense>
                            <v-col cols="4">
                                <div class="title blue--text">{{Math.floor(Math.random()*100)}}</div>
                                <div>文章</div>
                            </v-col>
                            <v-col cols="4">
                                <div class="title blue--text">{{Math.floor(Math.random()*100)}}</div>
                                <div>分类</div>
                            </v-col>
                            <v-col cols="4">
                                <div class="title blue--text">{{Math.floor(Math.random()*100)}}</div>
                                <div>评论</div>
                            </v-col>
                        </v-row>
                    </v-card-text>

                </v-card>
<!--                个人介绍end-->
<!--                <v-card class=" mb-4">-->
<!--                    <v-list>-->
<!--                        <v-subheader class="font-weight-bold">分类</v-subheader>-->
<!--                        <v-list-item v-for="(item,i) in topCategory" :key="i" @click="true">-->
<!--                            <v-list-item-content>-->
<!--                                <span class="text-left subtitle-2">{{ item.name }}</span>-->
<!--                            </v-list-item-content>-->
<!--                            <v-list-item-action-text>-->
<!--                                <v-chip label outlined >{{item.count}}</v-chip>-->
<!--                            </v-list-item-action-text>-->
<!--                        </v-list-item>-->
<!--                    </v-list>-->
<!--                    <v-card-actions>-->
<!--                        <v-btn  block dark>更多分类</v-btn>-->
<!--                    </v-card-actions>-->
<!--                </v-card>-->
            </v-col>
<!--            中间-->
            <v-col cols="6" xs="12" sm="12" md="5" lg="5" >
                <v-row>
                    <v-col cols="12" class="pa-0 mb-2">
                        <v-tabs v-model="tab" light color="secondary" slider-color="blue" @change="getArt">
                            <v-tab>全部</v-tab>
                            <v-tab v-for="(item,i) in categories" :key="i">{{item.name}}</v-tab>
                        </v-tabs>
                    </v-col>
                    <v-col v-for="(item, i) in articles" :key="i" cols="12"  class="mb-2 pa-0">
                        <v-card class="v-card--hover" :to="'/article/'+item.id">
                            <v-list-item three-line>
                                <v-list-item-content class="pb-0">
                                    <v-list-item-title class="text-left">{{item.title}}
                                        </v-list-item-title>
                                    <v-list-item-subtitle class="text-left">
                                        {{item.summary}}
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                                <v-list-item-avatar tile size="68" class="pb-0">
                                    <v-img :src="item.thumbnailUrl"></v-img>
                                </v-list-item-avatar>
                            </v-list-item>
                            <v-card-actions class="ma-0 pt-1">
                                <span class="caption">发表于 {{item.createTime | dateFmt('YYYY/MM/DD')}} </span>
                                <v-btn text class="caption" small>#{{ item.category }}</v-btn>
                                <v-spacer></v-spacer>
                                <v-btn text :ripple="false" @click="false">
                                    <v-icon small>mdi-eye-outline</v-icon>
                                    {{item.hits}}
                                </v-btn>
                                <v-btn text :ripple="false" @click="false">
                                    <v-icon small>mdi-comment-processing-outline</v-icon>
                                    {{item.comments}}
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>

                </v-row>
                <v-pagination light color="secondary" v-if="length>0" v-model="page" @input="getArt" :length="length" total-visible="5"></v-pagination>
                <v-sheet v-else color=" lighten-2">-- 暂无更多 --</v-sheet>
            </v-col>
<!--            右侧-->
            <v-col cols="2" xs="12" sm="12" md="3" lg="2">
                <v-card class="mx-auto mb-2">
                <v-list >
                    <v-subheader class="font-weight-bold"><v-icon small>mdi-icon-heart</v-icon>最热文章</v-subheader>
                    <v-list-item v-for="(item,i) in hitArticles" :key="i" @click="goTo(item.id)">
                        <v-list-item-content >
                            {{item.title}}
                        </v-list-item-content>
                        <v-list-item-action-text>
                            <v-chip outlined pill small label>{{ item.hits }}</v-chip>
                        </v-list-item-action-text>
                    </v-list-item>
                </v-list>
                </v-card>
                <v-card class="mx-auto mb-4">
                    <v-list >
                        <v-subheader class="font-weight-bold">最新文章</v-subheader>
                        <v-list-item v-for="(item,i) in newArticles" :key="i" @click="goTo(item.id)">
                            <v-list-item-content >
                                <v-list-item-title>{{item.title}}</v-list-item-title>
                                <v-list-item-subtitle>{{ item.createTime | dateFmt("YYYY.MM.DD") }}</v-list-item-subtitle>
                            </v-list-item-content>

                        </v-list-item>
                    </v-list>
                </v-card>
            </v-col>

        </v-row>

    </div>
</template>

<script>
    import { blogger } from '@/api/common'
    import { getAllCategory, getTop} from "@/api/category";
    import {getAllArticle, getArticleByCategory, getHitArticles, getNewArticles} from "@/api/article";
    export default {
        name: "Home",
        components: {},
        data: () => ({
            tab: 0,
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
            topCategory:[
                { id: 1, name : '后端', count: 1 },
                { id: 2, name : '前端', count: 1 },
                { id: 3, name : '测试', count: 1 },
            ],
            categories:[
                { id: 0,name:'全部',count:0},
            ],
            articles:[
                { id: 1,title: "",thumbnailUrl:"",summary:"",categoryId:1,
                    category:"",hits:0,comments:0,createTime: "",updateTime:""},
            ],
            hitArticles:[
                { id: 1,title: "",thumbnailUrl:"",summary:"",categoryId:1,
                    category:"",hits:0,comments:0,createTime: "",updateTime:""},
            ],
            newArticles:[
                { id: 1,title: "",thumbnailUrl:"",summary:"",categoryId:1,
                    category:"",hits:0,comments:0,createTime: "",updateTime:""},
            ],
            page: 1,
            pageSize: 4,
            length: 1,
        }),
        created: function(){
            this.getData()
            this.getArt()
        },
        methods:{
            toast(num){
                this.$toast("mess"+num)
            },
            goTo(id){
                this.$router.push('/article/'+id)
            },
            getData(){
                blogger().then(respense => {
                    const res = respense
                    this.blogger = res.data
                })
                getTop(4).then(response => {
                    const res = response
                    this.topCategory = res.data.content
                    this.length = res.data.totalElements
                })
                getHitArticles(4).then(response=>{
                    this.hitArticles = response.data.content
                })
                getNewArticles(4).then(response=>{
                    this.newArticles = response.data.content
                })
                getAllCategory().then(res =>{
                    this.categories =res.data.content
                })
            },
            getArt(){
                if(this.tab === 0){
                    getAllArticle(this.page-1,this.pageSize).then(response=>{
                        const res = response
                        this.articles = res.data.content
                        this.length = res.data.totalPages
                    })
                }else {
                    getArticleByCategory(this.categories[this.tab-1].id,0,this.pageSize).then(response =>{
                        const res = response
                        this.articles = res.data.content
                        this.length = res.data.totalPages
                    })
                }
            },
        },
    }
</script>

<style scoped>

</style>
