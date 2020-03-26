import vue from 'vue'
import Snackbar from "@/components/snackbar/Snackbar";


const snackCon = vue.extend(Snackbar)

function showSnack(text){
    const sdom = new snackCon({
        data(){
            return{
                text: text
            }
        },
        el: document.createElement('div')
    })
    document.body.appendChild(sdom.$el)
}

function registrySnack() {
    vue.prototype.$toast = showSnack
}

export default registrySnack
