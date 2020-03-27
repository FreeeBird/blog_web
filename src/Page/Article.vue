<template>
    <div id="article">
        <v-row justify="center">
            <v-col cols="8">
                <v-card class="mx-auto" >
                    <v-img   height="200px" :src="article.thumbnailUrl">
                    </v-img>
                    <v-card-title>{{article.title}}</v-card-title>
                    <v-card-subtitle class="pb-0 text-left">
                        {{article.createTime | dateFmt("YYYY-MM-DD HH:mm:ss")}}
                    </v-card-subtitle>
                    <v-card-text class="text--primary">
                        <div v-html="str"></div>
                    </v-card-text>

                </v-card>

            </v-col>
        </v-row>
    </div>
</template>

<script>
    import {getArticleById} from "@/api/article";

    export default {
        name: "Article",
        data(){
            return{
                str: "",
                article :{
                    id: 1,
                    title: "",
                    thumbnailUrl:"",
                    summary:"",
                    content: "",
                    categoryId:1,
                    category:"",
                    hits:0,
                    comments:0,
                    createTime: "",
                    updateTime:""
                },
            }
        },
        created:function () {
            this.getData()
        },
        methods:{
            getData() {
                const num = this.$route.params.id
                getArticleById(num).then(response =>{
                    const res = response
                    this.article = res.data
                    this.str =  this.article.content.replace(/\n\r/g,"</br>")
                })
            },
        },
    }
</script>

<style scoped>

</style>
