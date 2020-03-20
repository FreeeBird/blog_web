<template>
    <div id="home">
        <v-row justify="center">
            <v-col cols="1"></v-col>
<!--            左侧-->
            <v-col cols="3">
                <v-card class="mx-auto" max-width="400">
                    <v-img class="white--text align-end" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                        <v-card-title>Top 10 Australian beaches</v-card-title>
                    </v-img>
                    <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>
                    <v-card-text class="text--primary">
                        <div>Whitehaven Beach</div>
                        <div>Whitsunday Island, Whitsunday Islands</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="orange" text>
                            Share
                        </v-btn>
                        <v-btn color="orange" text>
                            Explore
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
<!--            中间-->
            <v-col cols="4"></v-col>
<!--            右侧-->
            <v-col cols="3">
                <v-list three-line>
                    <v-list-item-title>最热</v-list-item-title>
                    <v-list-item-subtitle>2020</v-list-item-subtitle>
                    <v-divider></v-divider>
                    <v-list-item>
                        <v-list-item-avatar>
                            <v-icon>mdi-heart</v-icon>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title >对数据库查询优化</v-list-item-title>
                            <v-list-item-subtitle >2020-01-01</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-avatar>
                            <v-icon>mdi-heart</v-icon>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title >lir</v-list-item-title>
                            <v-list-item-subtitle >fads</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-col>
            <v-col cols="1"></v-col>
        </v-row>

    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>