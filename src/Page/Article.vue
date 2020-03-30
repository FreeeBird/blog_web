<template>
    <div id="article">
        <v-row justify="center">
            <v-col cols="8">
                <v-card>
                    <v-img  height="200px" v-if="article.thumbnailUrl!=''" :src="article.thumbnailUrl"></v-img>
                    <v-card-title>{{article.title}}</v-card-title>
                    <v-card-subtitle class="pb-0 text-left">
                        发表于 {{article.createTime | dateFmt("YYYY-MM-DD HH:mm:ss")}}
                        <v-icon small>mdi-eye-outline</v-icon>{{article.hits}}
                        <v-icon small>mdi-comment-processing-outline</v-icon>{{article.comments}}
                    </v-card-subtitle>
                    <v-card-actions>
                        <v-btn color="secondary" small ># {{article.category }}</v-btn>
                    </v-card-actions>
                <v-divider></v-divider>
                <v-subheader class="subtitle-1">摘要：</v-subheader>
                <blockquote class="blockquote font-italic text--secondary">{{ article.summary }}</blockquote>
                    <v-divider></v-divider>

                </v-card>
                <div  id="art" class="px-6" v-html="article.content"></div>
                <v-divider></v-divider>
                <div class="text-center subtitle-1 pa-12">
                    本站文章除注明转载/出处外，均为本站原创或翻译，转载前请务必署名<br/>
                    最后编辑时间为: {{article.updateTime | dateFmt("YYYY 年 MM 月 DD 日 HH::mm::SS")}}
                </div>
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
                })
            },
        },
    }
</script>

<style scoped>
.v-application code{
    display: block;
}
#art{
        max-width: 800px;
    }
</style>
