<template>
    <div id="home">
        <v-row justify="center">
<!--            左侧-->
            <v-col cols="3">
<!--                个人介绍-->
                <v-card class="mx-auto mb-4 text-center" >
                    <v-avatar size="200">
                        <v-img  :src="blogger.portraitUrl">
                        </v-img>
                    </v-avatar>
                    <v-card-title class="justify-center">{{ blogger.nickname }}</v-card-title>
                    <v-card-subtitle class="subtitle-1"><v-icon small>mdi-map-marker</v-icon> {{blogger.address}}</v-card-subtitle>
                    <v-card-text class="text--primary pb-0">
                        <p class="subtitle-2">{{ blogger.introduction }}</p>
                         <v-row dense>
                            <v-col cols="4">
                                <div>文章</div>
                                <div class="title">{{Math.floor(Math.random()*100)}}</div>
                            </v-col>
                            <v-col cols="4">
                                <div>分类</div>
                                <div class="title">{{Math.floor(Math.random()*100)}}</div>
                            </v-col>
                            <v-col cols="4">
                                <div>评论</div>
                                <div class="title">{{Math.floor(Math.random()*100)}}</div>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="secondary" block @click="true">
                            <v-icon>mdi-email</v-icon>
                            {{blogger.email}}
                        </v-btn>
                    </v-card-actions>
                </v-card>
<!--                个人介绍end-->
                <v-card class="mx-auto mb-4" max-width="400" hover>
                    <v-list>
                        <v-subheader class="font-weight-bold">分类</v-subheader>
                        <v-list-item v-for="(item,i) in topCategory" :key="i" @click="true">
                            <v-list-item-content>
                                <span class="text-left subtitle-2">{{ item.name }}</span>
                            </v-list-item-content>
                            <v-list-item-action-text>
                                <v-chip label outlined >{{item.count}}</v-chip>
                            </v-list-item-action-text>
                        </v-list-item>
                    </v-list>
                    <v-card-actions>
                        <v-btn  block color="primary">更多分类</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
<!--            中间-->
            <v-col cols="6">
                <v-row>
                    <v-col v-for="(item, i) in articles" :key="i" cols="12"  >
                        <v-card class="v-card--hover" :to="'/article/'+item.id">
                            <v-list-item three-line>
                                <v-list-item-content>
                                    <v-list-item-title class="text-left">{{item.title}}</v-list-item-title>
                                    <v-list-item-subtitle class="text-left">
                                        {{item.summary}}
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                                <v-list-item-avatar tile size="68">
                                    <v-img :src="item.thumbnailUrl"></v-img>
                                </v-list-item-avatar>
                            </v-list-item>
                            <v-card-actions class="ma-0">
                                <span class="text--secondary caption">发表于 {{item.createTime | dateFmt('YYYY/MM/DD')}}</span>
                                <v-btn text class="caption"># {{ item.category }}</v-btn>
                                <v-spacer></v-spacer>
                                <v-btn text>
                                    {{item.comments}}
                                    <v-icon color="blue">mdi-comment-processing-outline</v-icon>
                                </v-btn>
                                <v-btn text>
                                    {{item.hits}}
                                    <v-icon color="red">mdi-eye-outline</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>

                </v-row>
                <v-pagination v-if="length>0" v-model="page" @input="getArt" :length="length" total-visible="5"></v-pagination>
                <v-sheet v-else color=" lighten-2">-- 暂无更多 --</v-sheet>
            </v-col>
<!--            右侧-->
            <v-col cols="3">
                <v-card class="mx-auto mb-4">
                <v-list >
                    <v-subheader class="font-weight-bold">最热文章</v-subheader>
                    <v-list-item v-for="(item,i) in hitArticles" :key="i" @click="true">
                        <v-list-item-content >
                            {{item.title}}
                        </v-list-item-content>
                        <v-list-item-action-text>
                            <v-chip outlined label>{{ item.hits }}</v-chip>
                        </v-list-item-action-text>
                    </v-list-item>
                </v-list>
                </v-card>
                <v-card class="mx-auto mb-4">
                    <v-list >
                        <v-subheader class="font-weight-bold">最新文章</v-subheader>
                        <v-list-item v-for="(item,i) in newArticles" :key="i" @click="true">
                            <v-list-item-content >
                                {{item.title}}
                            </v-list-item-content>
                            <v-list-item-action-text>
                                {{ item.createTime | dateFmt("YYYY/MM/DD") }}
                            </v-list-item-action-text>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-col>

        </v-row>

    </div>
</template>

<script>
    import { blogger } from '@/api/common'
    import { getTop } from "@/api/category";
    import {getAllArticle, getHitArticles, getNewArticles} from "@/api/article";
    export default {
        name: "Home",
        components: {},
        data: () => ({
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
            },
            getArt(){
                getAllArticle(this.page-1,this.pageSize).then(response=>{
                    const res = response
                    this.articles = res.data.content
                    this.length = res.data.totalPages
                })
            },
        },
    }
</script>

<style scoped>

</style>
