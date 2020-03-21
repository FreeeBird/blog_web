<template>
    <div id="home">
        <v-row justify="center">
            <v-col cols="2"></v-col>
<!--            左侧-->
            <v-col cols="2">
                <v-card class="mx-auto mb-4" max-width="400">
                    <v-avatar size="200">
                        <v-img  src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584708935012&di=dd98f67faf63c622604fd7dbda25a2e6&imgtype=0&src=http%3A%2F%2Fp2.ssl.cdn.btime.com%2Ft0188c6862d3ef51988.jpg">
                        </v-img>
                    </v-avatar>
                    <v-card-title class="justify-center">QiNuoBiKe</v-card-title>
                    <v-card-subtitle class="pb-0">MoGu Kingdom</v-card-subtitle>
                    <v-card-text class="text--primary">
                        <div>吹灭读书灯，满身都是月</div>

                        <v-row>
                            <v-col cols="4">
                                <div>文章</div>
                                <div>13</div>
                            </v-col>
                            <v-col cols="4">
                                <div>分类</div>
                                <div>5</div>
                            </v-col>
                            <v-col cols="4">
                                <div>评论</div>
                                <div>38</div>
                            </v-col>
                        </v-row>

                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="primary" outlined block>
                            <v-icon>mdi-email</v-icon>
                            QiNuoBiKe@163.com
                        </v-btn>
                    </v-card-actions>
                </v-card>
<!--                <v-subheader class="subtitle-1">分类</v-subheader>-->
                <v-card class="mx-auto mb-4" max-width="400">

                    <v-list>
                        <v-subheader>
                            分类
                        </v-subheader>
                        <v-list-item v-for="(item,i) in items2" :key="item.title" @click="true">
<!--                            <v-list-item-icon>-->
<!--                                <v-icon v-text="item.icon"></v-icon>-->
<!--                            </v-list-item-icon>-->

                            <v-list-item-content>
<!--                                <v-list-item-title v-text="item.text"></v-list-item-title>-->
                                {{ item.text }}
                            </v-list-item-content>
                            <v-list-item-action-text>
                                <v-chip label outlined >{{i}}</v-chip>
                            </v-list-item-action-text>
                        </v-list-item>
                        <v-btn text>More</v-btn>
                    </v-list>

                </v-card>

                <v-card class="mx-auto mb-4" max-width="400">
                    <v-list>
                        <v-subheader class="text--primary">
                            链接
                        </v-subheader>
                        <v-list-item v-for="item in items2" :key="item.title" @click="true">
                             <v-list-item-icon>
                                <v-icon>mdi-home</v-icon>
                             </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title class="text-left" v-text="item.text"></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-btn text>More</v-btn>
                    </v-list>
                </v-card>
            </v-col>
<!--            中间-->
            <v-col cols="4">
                <v-row>
                    <v-col v-for="(item, i) in items" :key="i" cols="12">
                        <v-card class="v-card--hover">
                            <v-list-item three-line>
                                <v-list-item-content>
                                    <v-list-item-title class="text-left">{{item.title}}</v-list-item-title>
                                    <v-list-item-subtitle class="text-left">
                                        Greyhound divisely hello coldly fonwderfully
                                        Greyhound divisely hello coldly fonwderfully
                                        Greyhound divisely hello coldly fonwderfully
                                        Greyhound divisely hello coldly fonwderfully
                                        Greyhound divisely hello coldly fonwderfully
                                        Greyhound divisely hello coldly fonwderfully..
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                                <v-list-item-avatar tile size="68">
                                    <v-img :src="item.src"></v-img>
                                </v-list-item-avatar>
                            </v-list-item>
                            <v-card-actions>
                                <v-btn class="ma-2" depressed text >
                                    <v-icon left>mdi-account</v-icon> 123
                                </v-btn>
                                <v-btn class="ma-2" depressed text >
                                    <v-icon left>mdi-account</v-icon> 1
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-btn text># {{ item.artist }}</v-btn>
                                <v-btn text class="subtitle-1">2020-01-10</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                    <v-pagination
                            v-model="page"
                            :length="14"
                            total-visible="6"
                    ></v-pagination>
                </v-row>
            </v-col>
<!--            右侧-->
            <v-col cols="2">
                <v-list elevation="2" class="mb-4">
                    <v-subheader>最近热门</v-subheader>
                    <v-list-item v-for="item in items" :key="item.title" @click="true">
<!--                        <v-list-item-avatar>-->
<!--                            <v-img :src="item.src"></v-img>-->
<!--                        </v-list-item-avatar>-->
                        <v-list-item-content >
                            {{item.title}}
                        </v-list-item-content>
                        <v-list-item-action-text>
                            <v-chip outlined label>{{ Math.floor(Math.random()*1000) }}</v-chip>
                        </v-list-item-action-text>
                    </v-list-item>
                </v-list>
                <v-list elevation="2" class="mb-4" >
                    <v-subheader>最新评论</v-subheader>
                    <v-list-item v-for="item in items" :key="item.title" @click="true" two-line>
                        <v-list-item-content >
                            <v-list-item-title v-text="item.title.slice(0,4)" class="text-left"></v-list-item-title>
                            <v-list-item-subtitle class="text-left">It's really good.</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action-text>
                            {{ new Date().toDateString() }}
                        </v-list-item-action-text>
                    </v-list-item>
                </v-list>
            </v-col>
            <v-col cols="2"></v-col>
        </v-row>

    </div>
</template>

<script>
    export default {
        name: "Home",
        data: () => ({
            page: 1,
            items: [
                {
                    src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                    title: 'JAVA并发优化',
                    artist: 'JAVA',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                    title: 'JS性能优化',
                    artist: 'JavaScript',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                    title: 'JAVA并发优化',
                    artist: 'JAVA',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                    title: 'JS性能优化',
                    artist: 'JavaScript',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                    title: 'JAVA并发优化',
                    artist: 'JAVA',
                },
            ],
            item2: 1,
            items2: [
                { text: '测试', icon: 'mdi-clock' },
                { text: '前端', icon: 'mdi-account' },
                { text: '后端', icon: 'mdi-flag' },
                { text: '运维', icon: 'mdi-flag' },
            ],
        }),
    }
</script>

<style scoped>

</style>