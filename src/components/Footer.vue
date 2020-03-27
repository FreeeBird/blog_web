<template>
    <div id="myFooter">
        <v-row>
            <v-col cols="8" offset="2">
                <p class="mx-auto">
                    <v-btn icon>
                        <v-icon color="primary">mdi-heart</v-icon>
                    </v-btn>
                    COPYRIGHT © {{ new Date().getFullYear() }} {{title}}
                </p>
            </v-col>

        </v-row>
    </div>
</template>

<script>
    export default {
        name: "myFooter",
        props:{
            title:{
                type: String,
                default: "blog",
                require: true
            },
        },
    }
</script>

<style scoped>

</style>
