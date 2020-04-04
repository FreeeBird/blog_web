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
                <v-sheet elevation="0" min-height="400px"  id="art" v-html="article.content"></v-sheet>
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
                                <v-textarea solo outlined dense name="input-7-4" placeholder="写下你的评论"></v-textarea>
                            </v-col>
                        </v-row>
                        <div><v-btn class="my-btn" depressed color="primary">发表评论 <span class="caption"> Post Comment</span></v-btn></div>
                    </v-container>
                </v-form>
                <v-divider></v-divider>
                <div class="subtitle-1">{{ article.comments }} 条评论</div>
                <v-row>
                    <v-col cols="8">
                        <v-card flat class="mx-auto mb-1" light v-for="(item,i) in comments" :key="i">
                            <v-card-title>
                                <v-avatar left color="accent">
                                    <v-img class="elevation-6" src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"></v-img>
                                </v-avatar>
                                <span class="ml-1 title font-weight-light">{{item.nickname}}</span>
                            </v-card-title>
                            <v-card-text class="caption black--text font-weight-bold pb-0">
<!--                                "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."-->
                                "{{item.content}}"
                            </v-card-text>
                            <v-card-actions class="my-0 pt-0">
                                <v-list-item class="caption">
                                    <v-row align="center" justify="start">
                                        <span class=" mr-2">#{{i+1}}</span>
                                        <span class="mr-1">·</span>
                                        <span class="subheading mr-2">{{article.updateTime|dateFmt}}</span>
<!--                                        <span class="mr-1">·</span>-->
<!--                                        <a class="subheading">@ Talor</a>-->
                                    </v-row>
                                </v-list-item>
                            </v-card-actions>
                            <v-divider></v-divider>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import {getArticleById} from "@/api/article";
    import {blogger} from "@/api/common";

    export default {
        name: "Article",
        data(){
            return{
                str: "",
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
                    { id : 2,nickname:'Alantic',content: '没感觉就开始了'},
                    { id : 3,nickname:'魔人',content: '免费的房间嗯放得开就'},
                    { id : 4,nickname:'乔瑞风',content: '官方电话不规范大部分大幅度'},
                ],
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
                blogger().then(res => {
                    this.blogger = res.data
                })
            },
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
