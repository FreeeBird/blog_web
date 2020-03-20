<template>
    <v-app id="keep">
        <v-app-bar app color="primary">
<!--            <v-app-bar-nav-icon @click="drawer = !drawer" />-->
            <span class="title ml-3 mr-5">Google&nbsp;<span class="font-weight-light">Keep</span></span>
            <v-text-field solo-inverted flat hide-details label="Search"/>
            <v-spacer />
        </v-app-bar>

        <v-content>
            <v-container fluid class="grey lighten-4 fill-height">
                <v-row justify="center" align="center">
                    <v-col class="shrink">
                        <v-tooltip right>
                            <template v-slot:activator="{ on }">
                                <v-btn
                                        :href="source"
                                        icon
                                        large
                                        target="_blank"
                                        v-on="on"
                                >
                                    <v-icon large>mdi-code-tags</v-icon>
                                </v-btn>
                            </template>
                            <span>Source</span>
                        </v-tooltip>
                        <v-tooltip right>
                            <template v-slot:activator="{ on }">
                                <v-btn
                                        icon
                                        large
                                        href="https://codepen.io/johnjleider/pen/zgxbYO"
                                        target="_blank"
                                        v-on="on"
                                >
                                    <v-icon large>mdi-codepen</v-icon>
                                </v-btn>
                            </template>
                            <span>Codepen</span>
                        </v-tooltip>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        name: 'Goo',
        props: {
            source: String,
        },
        data: () => ({
            drawer: null,
            items: [
                { icon: 'lightbulb_outline', text: 'Notes' },
                { icon: 'touch_app', text: 'Reminders' },
                { divider: true },
                { heading: 'Labels' },
                { icon: 'add', text: 'Create new label' },
                { divider: true },
                { icon: 'archive', text: 'Archive' },
                { icon: 'delete', text: 'Trash' },
                { divider: true },
                { icon: 'settings', text: 'Settings' },
                { icon: 'chat_bubble', text: 'Trash' },
                { icon: 'help', text: 'Help' },
                { icon: 'phonelink', text: 'App downloads' },
                { icon: 'keyboard', text: 'Keyboard shortcuts' },
            ],
        }),
    }
</script>

<style>
    #keep .v-navigation-drawer__border {
        display: none
    }
</style>