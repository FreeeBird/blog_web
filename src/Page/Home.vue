<template>
    <div id="home">
        <v-row justify="center">
            <v-col cols="9">
                <v-carousel cycle height="300" hide-delimiter-background :show-arrows="false"  style="border-radius: 8px">
                    <v-carousel-item v-for="(art, i) in newArticles" :key="i">
                        <v-card height="100%">
                            <v-img class="fill-height" :src="art.thumbnailUrl">
                                <v-row class="fill-height" justify="center"  align="end">
                                    <v-col cols="11">
                                        <div class="my-1"><v-btn class="my-btn" small depressed>{{art.category}}</v-btn></div>
                                        <div class="display-1 my-1">{{art.title}}</div>
                                        <div class="subtitle-2 my-1">
                                            <v-avatar size="24">
                                                <v-img :src="blogger.portraitUrl"></v-img>
                                            </v-avatar>
                                            <span> {{blogger.nickname}} · </span>
                                            {{art.updateTime|dateFmt("YYYY-MM-DD")}}</div>
                                    </v-col>
                                </v-row>

                            </v-img>
                        </v-card>
                    </v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>
        <v-row justify="center">
<!--            中间-->
            <v-col cols="6"  >
                <v-row>
                    <v-col cols="12" class="mb-0 pb-0">
                        <div class="title">最新文章 <span class="caption">Latest Posts</span> </div>
                    </v-col>
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
                    </v-col>
                </v-row>
                <v-row justify="start">
                    <v-col>
                        <v-pagination style="justify-content: start" color="primary" circle v-if="length>0" v-model="page" @input="getArt" :length="length" total-visible="10"></v-pagination>
                    </v-col>
                </v-row>
            </v-col>
<!--            右侧-->
            <v-col cols="3">
                <v-card class="mx-auto mb-2" flat>
                <v-list>
                    <div class="title"><v-icon small>mdi-icon-heart</v-icon>最热文章 <span class="caption">Popular Posts</span></div>
                    <v-list-item v-for="(item,i) in hitArticles" :key="i" @click="goTo(item.id)" class="pa-1">
                            <v-row>
                                <v-col cols="4" class="pr-0">
                                    <v-card height="68" :img="item.thumbnailUrl">
                                    </v-card>
                                </v-col>
                                <v-col cols="8">
                                    <div><v-btn class="my-btn" x-small depressed>{{item.category}}</v-btn></div>
                                    <div class="subtitle-2 font-weight-black">{{item.title}}</div>
                                    <div class="caption">
                                        <v-avatar size="18">
                                            <v-img :src="blogger.portraitUrl"></v-img>
                                        </v-avatar>
                                        <span> {{blogger.nickname}} · </span>
                                        {{item.updateTime | dateFmt}}
                                    </div>
                                </v-col>
                            </v-row>
                    </v-list-item>
                </v-list>
                </v-card>
                <v-card class="mx-auto mb-2" flat>
                    <v-list shaped>
                        <div class="title">分类 <span class="caption">Category</span></div>
                        <v-list-item v-for="(item,i) in categories" :key="i" @click="goTo(item.id)" class="py-2">
                            <v-row>
                                <v-col cols="12" class="my-back">
                                    <div class="subtitle-2 font-weight-black">
                                        {{item.name}}
                                        <div class="caption float-right d-inline">{{item.count}}</div>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-col>

        </v-row>

    </div>
</template>

<script>
    import {blogger, getStatistics} from '@/api/common'
    import { getAllCategory, getTop} from "@/api/category";
    import {getAllArticle, getArticleByCategory, getHitArticles, getNewArticles} from "@/api/article";
    export default {
        name: "Home",
        components: {},
        data: () => ({
            colors: [
                'indigo',
                'warning',
                'pink darken-2',
                'red lighten-1',
                'deep-purple accent-4',
            ],
            slides: [
                'First',
                'Second',
                'Third',
                'Fourth',
                'Fifth',
            ],
            tab: 0,
            statistics:{
                articleNum:0,
                categoryNum:0,
                commentNum:0,
                messageNum:0,
            },
            blogger: {},
            topCategory:[],
            categories:[],
            articles:[],
            hitArticles:[],
            newArticles:[],
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
                getStatistics().then(res=>{
                    this.statistics = res.data
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
.my-btn{
    background:linear-gradient(135deg, #2178ff 0%,#5d93e6 100%);
    color: #ffffff;
    /*background-image: linear-gradient(-135deg,#2178ff 100%, #ABDCFF 10%);*/
}
.my-back{
    /*background-image: linear-gradient( -90deg, #ABDCFF 0%, #2178ff 100%);*/
    background:linear-gradient(135deg, #2178ff 0%,#5d93e6 100%);
    color: #ffffff;
    border-radius: 8px;
    /*background-image: linear-gradient(-135deg,#2178ff 100%, #ABDCFF 10%);*/
}
</style>
