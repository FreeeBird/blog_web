

const toastConfig = {
    x: 'left',
    y: 'bottom',
    color: 'primary',
    icon: '',
    iconColor: '',
    classes:[],
    timeout: 3000,
    dismissable: true,
    multiLine: false,
    vertical: false, // default
    queueable: false, // default
    showClose: true, // default
    closeText: '', // default
    closeIcon: 'mdi-close', // default
    closeColor: 'white', // default
    slot: [], //default
    shorts: {
        custom: {
            color: 'purple'
        }
    },
    property: '$toast' // default
}

export default toastConfig
