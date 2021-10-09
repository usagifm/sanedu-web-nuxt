export const state = () => ({
    classes: [],
    classDetail: [],
    classMeetings: [],
    meetingDetail: [],
    lessonDetail: []
})


export const mutations = {

    SET_CLASSES_DATA(state, payload){
        state.classes = payload;
    },
    SET_CLASS_DETAIL_DATA(state, payload){
        state.classDetail = payload;
    },
    SET_CLASS_MEETINGS(state, payload){
        state.classMeetings = payload;
    },
    SET_MEETING_DETAIL_DATA(state, payload){
        state.meetingDetail = payload;
    },
    SET_LESSON_DETAIL_DATA(state, payload){
        state.lessonDetail = payload;
    }




} 


export const actions = {

    getClassesData({ commit }){
        return new Promise((resolve, reject) => {
            this.$axios.get('/user/classes').then((response) => {
                commit('SET_CLASSES_DATA', response.data)
                resolve()

            })

        })


    },
    joinClass({ dispatch }, payload){
        return new Promise((resolve, reject) => {
            this.$axios.post('/user/search',payload).then((response) => {
               this.$axios.get('/user/class/'+response.data.id+'/register').then(() =>{
               dispatch('getClassesData');
               resolve(response);

                }).catch((error) =>{

                   
                    
                    reject(error.response.data.message);
           
                  
                })
            })
            .catch((e) => {
                // console.log("Search Class : ");
                reject(e.response.data.message);
                // console.log(e.response.data.message);

            })

        })



    },  
    unenrollFromClass({ dispatch }, payload){
        return new Promise((resolve, reject) => {
            this.$axios.get(`/user/class/${payload}/resign`).then((response) => {
          
               dispatch('getClassesData');
               resolve(response.data.message);
           
            })
            .catch((e) => {
                // console.log("Search Class : ");
                reject(e.response.data.message);
                // console.log(e.response.data.message);

            })

        })



    },
    getClassDetailData({ commit }, payload){
        return new Promise((resolve, reject) => {
            this.$axios.get(`/user/class/${payload}`).then((response) => {
                commit('SET_CLASS_DETAIL_DATA', response.data)
                resolve(response)

            })
            .catch((error) => {

                
                reject(error.response.data.message); 
                
            })

        })
    },
    getClassMeetings({ commit }, payload){
        return new Promise((resolve, reject) => {
            this.$axios.get(`/user/class/${payload}/meetings`).then((response) => {
                commit('SET_CLASS_MEETINGS', response.data)
                resolve()

            })

        }).catch((e) => {

  
            reject(e.response.data.message);

        })
    },

    getClassDetailData({ commit }, payload){

           

        return new Promise((resolve, reject) => {
            this.$axios.get(`/user/class/${payload}`).then((response) => {
                commit('SET_CLASS_DETAIL_DATA', response.data)
                resolve(response)

            })
            .catch((error) => {

                
                reject(error.response.data.message); 
                
            })

        })
    },

    getMeetingDetailData({ commit }, payload){
        return new Promise((resolve, reject) => {
            this.$axios.get(`/user/class/${payload.id}/meeting/${payload.meetingid}`).then((response) => {
                commit('SET_MEETING_DETAIL_DATA', response.data)
                resolve(response)

            })
            .catch((error) => {

                
                reject(error.response.data.message); 
                
            })

        })
    },


    getLessonDetailData({ commit }, payload){
        return new Promise((resolve, reject) => {
            this.$axios.get(`/user/class/${payload.id}/meeting/${payload.meetingid}/lesson/${payload.lessonid}`).then((response) => {



                this.$axios.post(`/user/class/attendlesson/+${payload.lessonid}`).then(() =>{

                    }).catch((error) =>{


                     })


                commit('SET_LESSON_DETAIL_DATA', response.data)
                resolve(response)

            })
            .catch((error) => {

                
                reject(error.response.data.message); 
                
            })

        })
    },
    
  
}