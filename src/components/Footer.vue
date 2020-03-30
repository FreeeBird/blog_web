<template>
    <div id="myFooter">
        <v-row justify="center">
            <v-col class="mx-auto text-center">
                    <v-btn icon>
                        <v-icon>mdi-heart</v-icon>
                    </v-btn>
                    COPYRIGHT © {{ new Date().getFullYear() }} {{title}}
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
