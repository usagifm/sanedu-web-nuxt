export default function ({ $axios, store}){

    $axios.setHeader('Content-Type', 'application/json');

    // var token =  this.$auth.$storage._state["_token.local"];
    // token = token.substring(0, token.indexOf('Bearer '));

    
    $axios.setToken(store.state.access_token)


}