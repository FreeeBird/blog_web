import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
    theme:{
        themes:{
            light:{
                primary: "#9c27b0",
                secondary: "#4caf50",
                accent: "#ffc107",
                error: "#f44336",
                warning: "#ff9800",
                info: "#03a9f4",
                success: "#3f51b5"
            },
            dark:{

            }

        }

    },
}

export default new Vuetify(opts)
