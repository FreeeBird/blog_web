<template>
    <div id="article">
        <v-row justify="center">
            <v-col cols="8">
            <v-img style="border-radius: 8px"  height="240px" v-if="article.thumbnailUrl!=''" :src="article.thumbnailUrl"></v-img>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="8">
                <div class="my-1"><v-btn class="my-btn" small depressed>{{article.category}}</v-btn></div>
                <div class="headline font-weight-black my-2">{{article.title}} Impost</div>
                <div class="caption font-weight-thin my-2">{{article.summary}}</div>
                <div class="caption">
                    <v-avatar size="18">
                        <v-img :src="blogger.portraitUrl"></v-img>
                    </v-avatar>
                    <span> {{blogger.nickname}} · </span>
                    {{article.updateTime | dateFmt}}
                    <span class="float-right">
                        <v-icon small>mdi-eye-outline</v-icon>{{article.hits}}
                         <v-icon small>mdi-comment-processing-outline</v-icon>{{article.comments}}
                    </span>
                </div>
                <div class="mt-2"><v-divider></v-divider></div>
            </v-col>
        </v-row>

        <v-row justify="center">
            <v-col cols="8">
                <v-sheet elevation="0"   id="art" v-html="article.content"></v-sheet>
                <v-divider></v-divider>
                <div class="caption pa-2">
                    <span class="red--text">*</span>本站文章除注明转载/出处外，均为本站原创或翻译，转载前请务必署名 · 最后编辑时间为: {{ article.updateTime | dateFmt}}
                </div>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="8">
                <div class="title">评论 Comments</div>
                <div class="caption overline font-weight-thin"><span class="red--text">*</span>你的邮箱地址不会被展示出来</div>
                <v-form v-model="valid">
                    <v-container>
                        <v-row justify="start" class="mb-0 pb-0">
                            <v-col cols="4" class="mb-0 pb-0">
                                <v-text-field outlined dense solo v-model="nickname" label="昵称 Nickname" required></v-text-field>
                            </v-col>
                            <v-col cols="4" class="mb-0 pb-0">
                                <v-text-field outlined dense solo v-model="email" :rules="emailRules" label="电子邮箱 E-mail" required></v-text-field>
                            </v-col>
                            <v-col cols="8" class="mt-0 pt-0">
                                <v-textarea solo outlined dense v-model="content" placeholder="写下你的评论"></v-textarea>
                            </v-col>
                        </v-row>
                        <div><v-btn class="my-btn" @submit="getCom"  depressed color="primary">发表评论 <span class="caption"> Post Comment</span></v-btn></div>
                    </v-container>
                </v-form>
                <v-divider></v-divider>
                <div class="subtitle-1">{{ article.comments }} 条评论</div>
                <v-row>
                    <v-col cols="8">
                        <v-card flat class="mx-auto mb-1" light v-for="(item,i) in comments" :key="i">
                            <v-card-title>
                                <v-avatar left color="secondary">
<!--                                    <v-img class="elevation-6" src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"></v-img>-->
                                    <v-icon large color="primary">mdi-account</v-icon>
                                </v-avatar>
                                <span class="ml-1 title font-weight-light">{{item.nickname}}</span>

                            </v-card-title>
                            <v-card-text class="caption black--text font-weight-bold pb-0">
                                {{item.content}}
                            </v-card-text>
                            <v-card-actions class="my-0 pt-0">
                                <v-list-item class="caption">
                                    <v-row align="center" justify="start">
                                        <span class=" mr-2">#{{i+1}}</span>
                                        <span class="mr-1">·</span>
                                        <span class="subheading mr-2">{{article.updateTime|dateFmt("YYYY-MM-DD HH:mm")}}</span>
<!--                                        <span class="mr-1">·</span>-->
<!--                                        <a class="subheading">@ Talor</a>-->
                                    </v-row>
                                </v-list-item>
                            </v-card-actions>
                            <v-divider></v-divider>
                        </v-card>

                    </v-col>
                    <v-pagination style="justify-content: start" :length="length" circle v-model="pageNum" @click="getCom" total-visible="5"></v-pagination>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import {getArticleById, getComments, postComment} from "@/api/article";

    export default {
        name: "Article",
        data(){
            return{
                pageNum: 1,
                aid: 0,
                pageSize:10,
                length: 0,
                content: "",
                valid: false,
                nickname: '',
                nameRules: [
                    v => !!v || 'Name is required',

                ],
                email: '',
                emailRules: [
                    v => !!v || 'E-mail格式不正确',
                    v => /.+@.+/.test(v) || 'E-mail must be valid',
                ],
                blogger: {},
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
                comments:[
                    { id : 1,nickname:'Jeff',content: '费劲儿可能否成'},
                ],
            }
        },
        created:function () {
            this.getData()
        },
        methods:{
            getData() {
                this.blogger = JSON.parse(sessionStorage.getItem('blogger'))
                this.aid = this.$route.params.id
                getArticleById(this.aid ).then(response =>{
                    const res = response
                    this.article = res.data
                })
                this.getCom()
            },
            getCom(){
                getComments(this.aid ,this.pageNum-1,this.pageSize).then(res=>{
                    const re =res
                    if(re.code!=2000){
                        this.$toast(re.message)
                        return
                    }
                    this.comments = re.data.content
                    this.length = re.data.totalPages
                })
            },
            postCom(){
                postComment(this.aid ,this.nickname,this.email,this.content).then(res =>{
                    const re = res;
                    if(re.code===2000){
                        this.$toast(re.message);
                        this.$set(this.comments,0,re.data)
                    }
                })
            }
        },
    }
</script>

<style scoped>
.rshaped{
    border-radius: 8px;
}
.my-btn{
    background:linear-gradient(135deg, #2178ff 0%,#5d93e6 100%);
    color: #ffffff;
    /*background-image: linear-gradient(-135deg,#2178ff 100%, #ABDCFF 10%);*/
}
#art >>> code{
    margin: 4px;
    border-radius: 8px;
    /*border: #2178ff 2px solid;*/
    display: block;
    padding: 8px;
    font-size: 0.8em;
    background-color: #5fbeaa;
    color: #fff;
    overflow: scroll;
}
#art{
    background-color: #fff;
    padding: 10px;

}
#art >>> img{
    height: auto;
    width: 100%;
    border: 1px solid #2178ff;
}
</style>
