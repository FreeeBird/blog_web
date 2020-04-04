import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
    theme:{
        themes:{
            light:{
                primary: "#2178ff",
                // secondary: "#818383",
                secondary: "#f1f2f6",
                accent: "#000000",
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
