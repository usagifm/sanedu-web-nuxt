export const state = () => ({

    
})

export const mutations = {


} 





export const actions = {


    registerStudent({ dispatch } , payload){


        console.log(payload)
        return new Promise((resolve, reject) => {
            this.$axios.post('/register', payload).then((response) => {
          
               resolve(response.data);
           
            })
            .catch((e) => {
                // console.log("Search Class : ");
                reject(e.response);
                console.log(e.response);

            })

        })



    },



}