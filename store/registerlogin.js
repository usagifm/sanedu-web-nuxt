export const state = () => ({

    
})

export const mutations = {


} 





export const actions = {


    registerAccount({ dispatch } , payload){


        console.log(payload)
        return new Promise((resolve, reject) => {
            this.$axios.post('/sanclass/register', payload).then((response) => {
          
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