export const state = () => ({

    
})

export const mutations = {


} 





export const actions = {


    editPersonalData({ dispatch } , payload){


        console.log(payload)
        return new Promise((resolve, reject) => {
            this.$axios.post('/profile/edit', payload).then((response) => {
          
               resolve(response.data);
           
            })
            .catch((e) => {
                // console.log("Search Class : ");
                reject(e.response.data.message);
                // console.log(e.response.data.message);

            })

        })



    },

    editPassword({ dispatch } , payload){


        console.log(payload)
        return new Promise((resolve, reject) => {
            this.$axios.post('/profile/edit', payload).then((response) => {
          
               resolve(response.data);
           
            })
            .catch((e) => {
                // console.log("Search Class : ");
                reject(e.response.data.message);
                // console.log(e.response.data.message);

            })

        })



    },

    editProfileImage({ dispatch } , payload){


        console.log(payload)
        return new Promise((resolve, reject) => {
            this.$axios.post('/profile/edit', payload).then((response) => {
          
               resolve(response.data);
           
            })
            .catch((e) => {
                // console.log("Search Class : ");
                reject(e.response.data.message);
                // console.log(e.response.data.message);

            })

        })



    },

    editProfileImage({ dispatch } , payload){


        console.log(payload)
        return new Promise((resolve, reject) => {
            this.$axios.post('/profile/edit', payload).then((response) => {
          
               resolve(response.data);
           
            })
            .catch((e) => {
                // console.log("Search Class : ");
                reject(e.response.data.message);
                // console.log(e.response.data.message);

            })

        })



    },

    editWhatsapp({ dispatch } , payload){


        console.log(payload)
        return new Promise((resolve, reject) => {
            this.$axios.post('/profile/edit', payload).then((response) => {
          
               resolve(response.data);
           
            })
            .catch((e) => {
                // console.log("Search Class : ");
                reject(e.response.data.whatsapp[0]);
                // console.log(e.response.data.message);

            })

        })



    },

    editEmail({ dispatch } , payload){


        console.log(payload)
        return new Promise((resolve, reject) => {
            this.$axios.post('/profile/edit', payload).then((response) => {
          
               resolve(response.data);
           
            })
            .catch((e) => {
                // console.log("Search Class : ");
                reject(e.response.data.email[0]);
                // console.log(e.response.data.message);

            })

        })



    },

    getCity({dispatch}, payload){


        console.log(payload)
        return new Promise((resolve, reject) => {



            fetch("https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi="+payload).then((response) => {
          
               resolve(response);
           
            })
            .catch((e) => {
                // console.log("Search Class : ");
                reject(e);
                // console.log(e.response.data.message);

            })

        })

    }

}