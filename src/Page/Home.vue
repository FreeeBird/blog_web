<template>
    <div id="home">
        <v-row justify="center">
<!--            左侧-->
            <v-col cols="2" offset="1">
<!--                个人介绍-->
                <v-card class="mx-auto mb-4" >
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

                <v-card class="mx-auto mb-4" max-width="400" hover>
                    <v-list>
                        <v-subheader class="font-weight-bold">链接</v-subheader>
                        <v-list-item v-for="item in links" :key="item.title" @click="true" two-line>
                            <v-list-item-content>
                                <v-list-item-title class="text-left" v-text="item.title"></v-list-item-title>
                                <v-list-item-subtitle class="text-left"  v-text="item.url"></v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                    <v-card-actions>
                    <v-btn outlined block color="primary">更多链接</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
<!--            中间-->
            <v-col cols="5">
                <v-row>
                    <v-col v-for="(item, i) in articles" :key="i" cols="12">
                        <v-card class="v-card--hover">
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
                <v-pagination v-if="length>10" v-model="page" :length="length" total-visible="5"></v-pagination>
                <v-sheet v-else color=" lighten-2">-- 暂无更多 --</v-sheet>
            </v-col>
<!--            右侧-->
            <v-col cols="2">
                <v-card class="mx-auto mb-4">
                <v-list >
                    <v-subheader>最近热门</v-subheader>
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
                <v-list class="mb-4" >
                    <v-subheader>最新评论</v-subheader>
                    <v-list-item v-for="(item,i) in links" :key="i" @click="toast(i)" two-line>
                        <v-list-item-content >
                            <v-list-item-title v-text="item.title.slice(0,4)" class="text-left"></v-list-item-title>
                            <v-list-item-subtitle class="text-left">It's really good.</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action-text>
                            {{ new Date().toDateString() }}
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
    import {getAllArticle, getHitArticles} from "@/api/article";
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
            links:[
                { title: 'Github', url: 'Github.com' },
                { title: 'StackOverflow', url: 'StackOverflow.com' },
                { title: 'Google', url: 'Google.cn' },
                { title: '百度', url: 'baidu.com' },
            ],
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
            page: 1,
            pageSize: 10,
            length: 1,
        }),
        created: function(){
            this.getBlogger()
            this.getTopCategory()
            this.getAllArticle()
        },
        methods:{
            toast(num){
                this.$toast("mess"+num)
            },
            getBlogger(){
                blogger().then(respense => {
                    const res = respense
                    this.blogger = res.data
                })
            },
            // 获取最多分类
            getTopCategory(){
                getTop(4).then(response => {
                    const res = response
                    this.topCategory = res.data
                })
            },
            getAllArticle(){
                getAllArticle().then(response=>{
                    const res = response
                    this.articles = res.data
                    this.length = this.articles.length
                })
                getHitArticles(4).then(response=>{
                    this.hitArticles = response.data
                })
            }
        },
    }
</script>

<style scoped>

</style>
