<template>
    <v-snackbar left bottom v-model="open">
        {{ text }}
        <v-btn
                text dark
                @click="open = false"
        >
            关闭
        </v-btn>
    </v-snackbar>
</template>

<script>
    export default {
        name: "Snackbar",
        props:{},
        data() {
            return{
                open: true,
                text: "",
                color: "",
                multiLine: false,
                timeout: 2000,

            }
        },
    }
</script>

<style scoped>

</style>
