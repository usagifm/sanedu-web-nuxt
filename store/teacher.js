export const state = () => ({
    classes: [],
    classDetail: [],
    classMeetings: [],
    meetingDetail: [],
    lessonDetail: [],
    attemptDetail: [],
})


export const mutations = {

    SET_CLASSES_DATA(state, payload){
        state.classes = payload;
    },
    SET_CLASS_DETAIL_DATA(state, payload){
        state.classDetail = payload;
    },

    SET_MEETING_DETAIL_DATA(state, payload){
        state.meetingDetail = payload;
    },
    SET_ATTEMPT_DETAIL_DATA(state, payload){
        state.attemptDetail = payload;
    },
}



export const actions = {

    getClassesData({ commit }){
        return new Promise((resolve, reject) => {
            this.$axios.get('/teacher/class').then((response) => {
                commit('SET_CLASSES_DATA', response.data)
                resolve()

            })

        })

    },

    createClass({ dispatch }, payload){
        return new Promise((resolve, reject) => {
            this.$axios.post('teacher/class/create',payload).then((response) => {
            
              
                dispatch('getClassesData');
                resolve(response);

            })
            .catch((e) => {
                // console.log("Search Class : ");
                reject(e.response.data.message);
                // console.log(e.response.data.message);

            })

        })



    },
    deleteClass({ dispatch }, payload){
        return new Promise((resolve, reject) => {
            this.$axios.get(`teacher/class/delete/${payload}`).then((response) => {
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
            this.$axios.get(`/teacher/class/${payload}`).then((response) => {
                commit('SET_CLASS_DETAIL_DATA', response.data)
                resolve(response)

            })
            .catch((error) => {

                
                reject(error.response.data.message); 
                
            })

        })
    },


    editClassDetailData({ dispatch, commit }, payload){
        return new Promise((resolve, reject) => {
            this.$axios.post(`/teacher/class/edit/${payload.id}`, payload).then((response) => {
                commit('SET_CLASS_DETAIL_DATA', response.data)
                resolve(response)

                console.log(response)

            })
            .catch((error) => {

                console.log(error)

                
                reject(error); 
                
            })

        })
    },

    createMeeting({ dispatch, commit }, payload){
        return new Promise((resolve, reject) => {
            this.$axios.post(`/teacher/class/${payload.id}/meeting/create`, payload).then((response) => {
          
                dispatch('getClassDetailData', payload.id)
                resolve(response)

          

            })
            .catch((error) => {

                console.log(error)

                
                reject(error); 
                
            })

        })
    },

    editMeeting({ dispatch, commit }, payload){
        return new Promise((resolve, reject) => {
            this.$axios.post(`/teacher/class/${payload.class_id}/meeting/edit/${payload.id}`, payload).then((response) => {
          
                dispatch('getClassDetailData', payload.class_id)
                resolve(response)

          

            })
            .catch((error) => {

                console.log(error)

                
                reject(error); 
                
            })

        })
    },


    deleteMeeting({ dispatch, commit }, payload){
        return new Promise((resolve, reject) => {
            this.$axios.get(`/teacher/class/${payload.class_id}/meeting/delete/${payload.id}`, payload).then((response) => {
          
                dispatch('getClassDetailData', payload.class_id)
                resolve(response)

          

            })
            .catch((error) => {

                console.log(error)

                
                reject(error); 
                
            })

        })
    },


  
    
    deleteStudent({ dispatch, commit }, payload){
        return new Promise((resolve, reject) => {
            this.$axios.get(`/teacher/class/${payload.class_id}/students/delete/${payload.id}`).then((response) => {
          
                dispatch('getClassDetailData', payload.class_id)
                resolve(response)

          

            })
            .catch((error) => {

                console.log(error)

                
                reject(error); 
                
            })

        })
    },


    getMeetingDetailData({ commit }, payload){
        return new Promise((resolve, reject) => {
            this.$axios.get(`/teacher/class/${payload.id}/meeting/${payload.meetingid}`).then((response) => {
                commit('SET_MEETING_DETAIL_DATA', response.data)
                resolve(response)

            })
            .catch((error) => {

                
                reject(error.response.data.message); 
                
            })

        })
    },

    editMeetingDetail({ dispatch, commit }, payload){
        return new Promise((resolve, reject) => {
            this.$axios.post(`/teacher/class/${payload.class_id}/meeting/edit/${payload.meeting_id}`, payload).then((response) => {
                dispatch('getMeetingDetailDataForEditLesson', payload)
                resolve(response)

          

            })
            .catch((error) => {

                console.log(error)

                
                reject(error); 
                
            })

        })
    },

    deleteClassMeeting({ dispatch, commit }, payload){
        return new Promise((resolve, reject) => {
            this.$axios.get(`/teacher/class/${payload.class_id}/meeting/delete/${payload.id}`).then((response) => {
                dispatch('getClassDetailData', payload.class_id)
                resolve(response)

          

            })
            .catch((error) => {

                console.log(error)

                
                reject(error); 
                
            })

        })
    },


    


    // dispatch yang dipanggil ketika melakukan operasi untul lesson 

    getMeetingDetailDataForEditLesson({ commit }, payload){
        return new Promise((resolve, reject) => {
            this.$axios.get(`/teacher/class/${payload.class_id}/meeting/${payload.meeting_id}`).then((response) => {
                commit('SET_MEETING_DETAIL_DATA', response.data)
                resolve(response)

            })
            .catch((error) => {

                
                reject(error.response.data.message); 
                
            })

        })
    },



    createLesson({ dispatch, commit }, payload){
        return new Promise((resolve, reject) => {
            this.$axios.post(`/teacher/class/${payload.class_id}/meeting/${payload.meeting_id}/lesson/create`, payload).then((response) => {
          
                dispatch('getMeetingDetailDataForEditLesson', payload)
                resolve(response)

            })
            .catch((error) => {

                console.log(error)

                
                reject(error); 
                
            })

        })
    },



    editLesson({ dispatch, commit }, payload){
        return new Promise((resolve, reject) => {
            this.$axios.post(`/teacher/class/${payload.class_id}/meeting/${payload.meeting_id}/lesson/edit/${payload.id}`, payload).then((response) => {
                dispatch("getMeetingDetailDataForEditLesson", payload)
                resolve(response)

            })
            .catch((error) => {

                console.log(error)

                
                reject(error); 
                
            })

        })
    },


    deleteLesson({ dispatch, commit }, payload){
        return new Promise((resolve, reject) => {
            this.$axios.get(`/teacher/class/${payload.class_id}/meeting/${payload.meeting_id}/lesson/delete/${payload.id}`).then((response) => {
                dispatch('getMeetingDetailDataForEditLesson', payload)
                resolve(response)

          

            })
            .catch((error) => {

                console.log(error)

                
                reject(error); 
                
            })

        })
    },


    getAttemptDetail({ commit }, payload){
        return new Promise((resolve, reject) => {
            this.$axios.get(`teacher/quiz/${payload.quizid}/attempt/${payload.attemptid}`).then((response) => {
                commit('SET_ATTEMPT_DETAIL_DATA', response.data)
                resolve(response)

            })
            .catch((error) => {

                
                reject(error.response.data.message); 
                
            })

        })
    },



}