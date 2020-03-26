<template>
    <div id="myFooter">
        <v-row align="center" justify="center">
            <p>
                <v-btn icon>
                    <v-icon large>mdi-heart</v-icon>
                </v-btn>
                COPYRIGHT © {{ new Date().getFullYear() }} {{title}}
            </p>
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
