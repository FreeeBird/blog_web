<template>
    <div id="article">
        <v-row justify="center">
            <v-img  height="300px" v-if="article.thumbnailUrl!=''" :src="article.thumbnailUrl"></v-img>
        </v-row>
        <v-row justify="center">
            <v-col cols="8">
                <div class="display-1 text-center font-weight-bold">{{article.title}}

                </div>
                <div class="pb-0 subtitle-1">
                    发表于 {{article.createTime | dateFmt("YYYY-MM-DD HH:mm:ss")}}
                    <v-btn color="secondary" text  small ># {{article.category }}</v-btn>
                    <v-icon small>mdi-eye-outline</v-icon>{{article.hits}}
                    <v-icon small>mdi-comment-processing-outline</v-icon>{{article.comments}}
                </div>
                <v-divider></v-divider>
                <v-subheader class="subtitle-1">摘要：</v-subheader>
                <blockquote class="blockquote text--secondary">{{ article.summary }}</blockquote>
                <v-divider></v-divider>
                <v-sheet min-height="400px" elevation="8" id="art" v-html="article.content"></v-sheet>
                <v-divider></v-divider>
                <div class="text-center subtitle-1 pa-12">
                    本站文章除注明转载/出处外，均为本站原创或翻译，转载前请务必署名<br/>
                    最后编辑时间为: {{article.updateTime | dateFmt("YYYY 年 MM 月 DD 日 HH::mm::SS")}}
                </div>
            </v-col>
        </v-row>
        <v-row justify="center">

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
#art >>> code{
    display: block;
    padding: 4px;
    font-size: 100%;
    color: white;
    background-color: #000000;
}
#art{
    background-color: #fff;
    padding: 10px;

}
#art >>> img{
    height: auto;
    width: 100%;
    border: 1px solid #42b983;
}
</style>
