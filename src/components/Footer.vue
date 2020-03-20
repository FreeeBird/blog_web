<template>
    <div id="myFooter">
        <v-row align="center" justify="center">
            <p>
                <v-btn icon>
                    <v-icon large>mdi-heart</v-icon>
                </v-btn>
                COPYRIGHT © {{ new Date().getFullYear() }} FreeeBird'S BLOG
            </p>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "myFooter"
    }
</script>

<style scoped>

</style>