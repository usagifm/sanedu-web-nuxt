<template>
<v-layout>
     <v-container >
       <v-row>
        <div id="services" style="background: rgba(0,0,0,0)" class="section-bg">
            <div class="container">
<!-- 
                <header class="section-header">
                    <h3>Fitur</h3>
                </header> -->

                <div class="row">
                           <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
                        <div class="box">
                            <div class="icon" style="background: #fff0da;"><i class="ion-ios-bookmarks-outline" style="color: #e98e06;"></i></div>
                            <h4 class="title"><a href="">San Project</a></h4>
                            <p class="description">Fitur yang satu ini menyediakan program-program persiapan ujian dan pelatihan kemampuan siswa,seperti tryout, seminar motivasi, workshop minat bakat dan education camp.</p>
                        </div>
                    </div>



                    <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
                      <nuxt-link 

                          style="text-decoration: none"
                        :to="{
                          name: 'teacher-classes',
                          
                        }">
                        <div class="box">
                            <div class="icon" style="background: #fceef3;"><v-icon style="color: #ff689b;">mdi-google-classroom</v-icon></div>
                            <h4 class="title"><a href="">San Class</a></h4>
                            <p class="description">Melalui fitur ini, kamu dapat melatih kemampuan kamu dalam mengejerjakan soal-soal mulai dari yang mudah hingga yang sulit dilengkapi dengan analisis IRT dan pembahasannya.</p>
                        </div>
                      </nuxt-link>
                    </div>
           
                    <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
                        <div class="box">
                            <div class="icon" style="background: #e6fdfc;"><i class="ion-ios-calculator-outline" style="color: #3fcdc7;"></i></div>
                            <h4 class="title"><a href="">San Hitung</a></h4>
                            <p class="description">Fitur ini digunakan untuk menghitung berbagai potensi diri kamu, mulai dari minat dan bakat kamu, kecenderungan kecerdasan hingga potensi kuliah dan karir kamu.</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
                        <div class="box">
                            <div class="icon" style="background: #eafde7;"><i class="ion-ios-analytics-outline" style="color:#41cf2e;"></i></div>
                            <h4 class="title"><a href="">San Grade</a></h4>
                            <p class="description">Fitur yang satu ini dikhususkan untuk mereka yang akan melanjutkan pendidikan ke perguruan tinggi, terdapat batas minimum yang dapat dijadikan acuan dan tolak ukur untuk masuk ke suatu jurusan tertentu. </p>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
                        <div class="box">
                            <div class="icon" style="background: #e1eeff;"><i class="ion-ios-book-outline" style="color: #2282ff;"></i></div>
                            <h4 class="title"><a href="">San Les</a></h4>
                            <p class="description">Adalah fitur yang digunakan untuk menunjang proses belajar di sanedu center, mulai dari agenda belajar, jadwal guru, hingga dapat digunakan untuk memilih jadwal les kamu.</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
                        <div class="box">
                            <div class="icon" style="background: #ecebff;"><i class="ion-ios-videocam-outline" style="color: #8660fe;"></i></div>
                            <h4 class="title"><a href="">San Video</a></h4>
                            <p class="description">Adalah kumpulan pembahasan materi pembelajaran melalui video, yang dapat digunakan untuk memahami suatu materi lebih dalam.</p>
                        </div>
                    </div>

                </div>

            </div>
        </div><!-- #services -->
       </v-row>
     </v-container>

</v-layout>



  
</template>

<script>
export default {
  head() {
    return {
      title: "SANEDU | Teacher Dashboard"
    };
  },

    middleware: ['auth-teacher'],
    layout: 'home',

    data(){
        return {
            // isAuth: true

        }


    },
mounted: function () {
    
      // console.log(this.$auth.$storage._state["_token.local"]);

		}



}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
