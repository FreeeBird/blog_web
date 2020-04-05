<template>
    <div id="category">
<!--        <v-row justify="center">-->
<!--            <v-col cols="8">-->
<!--                <v-img style="border-radius: 8px" max-height="200px" src="https://i.loli.net/2020/03/27/Rj8mhbcaPuTXoFJ.jpg">-->
<!--                </v-img>-->
<!--            </v-col>-->
<!--        </v-row>-->
        <v-row justify="center">
            <v-col cols="8">
                <div class="title">全部分类 <span class="caption">Categories</span></div>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="2">
                <v-tabs vertical slider-size="4" show-arrows v-model="tabIndex" @change="getArticleByCid">
                    <v-tab :key="0">全部</v-tab>
                    <v-tab v-for="(item,i) in categories" :key="i+1" >{{item.name}}</v-tab>
                </v-tabs>
            </v-col>
            <v-col cols="6">
                <v-row>
                    <v-col cols="12" class="mt-0 mb-2 pl-1 pt-0">
                        <v-card tile flat hover min-height="100"
                                v-for="(item, i) in articles" :key="i"
                                :to="'/article/'+item.id"
                                class="pa-1 my-1">
                            <v-row>
                                <v-col cols="4" class="pr-0 ml-2">
                                    <v-card style="border-radius: 8px" height="100%" min-height="120" :img="item.thumbnailUrl"></v-card>
                                </v-col>
                                <v-col cols="7">
                                    <div><v-btn class="my-btn" x-small depressed>{{item.category}}</v-btn></div>
                                    <div class="subtitle-2 font-weight-black">{{item.title}}</div>
                                    <div class="v-list-item--two-line caption font-weight-thin d-inline-block">{{item.summary}} </div>
                                    <div class="caption">
                                        <v-avatar size="24">
                                            <v-img :src="blogger.portraitUrl"></v-img>
                                        </v-avatar>
                                        <span> {{blogger.nickname}} · </span>
                                        {{item.updateTime | dateFmt}} ·
                                        评论({{item.comments}}) · 浏览({{item.hits}})</div>
                                </v-col>
                            </v-row>
                        </v-card>
                        <v-pagination style="justify-content: start" color="primary" circle v-if="length>0" v-model="page" @input="getArticleByCid" :length="length" total-visible="10"></v-pagination>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>

    import {getAllCategory} from "@/api/category";
    import {getAllArticle, getArticleByCategory} from "@/api/article";

    export default {
        name: "category",
        data(){
            return{
                tabIndex: 0,
                cid: 1,
                blog: {},
                blogger: {},
                categories:[],
                articles:[],
                length:0,
                page: 1,
                pageSize: 5,
            }
        },
        created:function(){
            this.fetchData()
            this.getArticles()
        },
        methods:{
            fetchData(){
                this.blogger = JSON.parse(sessionStorage.getItem('blogger'))
                getAllCategory().then(res =>{
                    const data = res.data
                    this.categories = data.content
                })
            },
            getArticles(){
                getAllArticle(this.page-1,this.pageSize).then(res =>{
                    const re = res
                    this.articles = re.data.content
                    this.length = re.data.totalPages
                })
            },
            getArticleByCid(){
                this.page = 1
                if(this.tabIndex===0){
                    this.getArticles()
                    return
                }else{
                    this.cid = this.categories[this.tabIndex-1].id
                    getArticleByCategory(this.cid,this.page-1,this.pageSize).then(res =>{
                        const re = res
                        this.articles = re.data.content
                        this.length = re.data.totalPages
                    })
                }
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
