<?php
 defined('BASEPATH') OR exit('No direct script access allowed');
 ?>
 <!DOCTYPE html>

 <head>
     <meta charset="UTF-8">
     <title>
         San Quiz
     </title>
     <meta charset="utf-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
     <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
     <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"> 
     <script src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/js/mdb.min.js" integrity="sha512-Mug9KHKmroQFMLm93zGrjhibM2z2Obg9l6qFG2qKjXEXkMp/VDkI4uju9m4QKPjWSwQ6O2qzZEnJDEeCw0Blcw==" crossorigin="anonymous"></script>
     <link rel="stylesheet" href="<?php echo base_url()?>assets/css/floatbutton.css" type="text/css">
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/compressorjs/1.0.7/compressor.min.js" integrity="sha512-ZNlHFR9FBdeIlhwh040g5JmmYj7DQOwkqb9Y+DBJ1MaTzRMxKZkfHWkQU/dazDn9XRriajfh7ZGFksBKeUCsCg==" crossorigin="anonymous"></script>
     <script src="https://unpkg.com/vue/dist/vue.min.js"></script>
     <?php include "application/views/Source/adminSources.php" ?>
     <style>
        .btn-soal-group { width: 100%;display:table; width:100%; table-layout:fixed; border-collapse:separate;}
        .btn-soal{ width:35px; height:35px; display: table-cell; font-weight:400; padding:0; margin-right:5px; margin-bottom:5px;}
        .btn-soal .flex {width:100%; height:100%; display:flex; align-items:center;}
        .btn-soal .flex span {text-align: center; display:block; width:100%;}
        .btn-select, .btn-select:active, .btn-select:focus {border: 2px solid #dea604; font-weight:800;}
        .btn-select.btn-filled { background: #dea604; border-color: #dea604;}
        .font-soal {font-size: 14px;}
        .font-soal p:last-child { margin-bottom: 0;}
            * .btn-space:last-child {margin-right: 0;}
        .jawaban { position: relative; } 
        .jawaban #jawabanNull { display: none; }  
        .jawaban input[name="jawaban"] { display: none; }  
        .jawaban label {  background: #FFF; min—height: 40px; padding: 10px 35px 10px 50px; border—radius: 5px; border: 1px solid #efefef; display: block; font—weight: 400;  }  
        .jawaban label .label—pilihan { position: absolute; left: 20px; }  
        .jawaban label:hover { cursor: pointer; background: #efefef; }  .jawaban label.hapus—jawaban { display: normal; background: #FFF; text—align: right; padding: 15px 0 0; border: none; font—weight: 400; } 
        .jawaban label.hapus—jawaban:hover { font—weight: 600 } 
        .jawaban input:checked + label { background: #87CB16; color: #FFF; } 
        .jawaban input:checked ~ label.hapus—jawaban { display: block; }  
        .jawaban #jawabanNull:checked + .hapus—jawaban { display: none; } 

            textarea{  
                /* box-sizing: padding-box; */
                overflow:hidden;
                /* demo only: */
                padding:10px;
                width:250px;
                font-size:14px;
                margin:50px auto;
                display:block;
                border-radius:10px;
                border:6px solid #556677;
                }




         .gradbot {
             background: linear-gradient(0deg, rgba(101, 172, 236, 1) 0%, rgba(139, 200, 255, 1) 100%);
             color: white;
             border-radius: 5px;
             border: 1px solid #65ACEC;
             margin: 2px;
             padding: 5px 35px;
         }

         .gradborder {
             background: #fff;
             color: white;
             border-radius: 5px;
             border: 1px solid #65ACEC;
             margin: 2px;
             color: #65ACEC;
             padding: 5px 35px;
         }

         .gradient-effect {
             position: relative;
             display: block;
         }

         .gradient-effect::before {
             content: '';
             position: absolute;
             left: 0;
             bottom: -1px;
             right: 0;
             height: 100%;
             background: linear-gradient(0deg, rgba(0, 0, 0, 0.8645833333333334) 0%, rgba(0, 0, 0, 0) 100%);
         }

         /* Centered text */
         .centered {
             position: absolute;
             top: 60%;
             left: 50%;
             transform: translate(-50%, -50%);
             color: white;
         }

         .botabsolute {
             position: absolute;
             width: 100%;
             bottom: 0px;
             padding: 15px;
             background: linear-gradient(0deg, rgba(101, 172, 236, 1) 0%, rgba(139, 200, 255, 1) 100%);
             left: 0px;
             right: 0px;
             color: white;
         }

         .imgresponsive {
             width: 100%;
             max-width: 500px;
             height: auto;
         }


          .sembunyi{

            display: block;
                width: 0px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            

         } 

         .container { 
  height: 60px;
position: relative; */
  /* border: 3px solid green;  */ */
}

.center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

     </style>

     </style>
     
 </head>

 <body>





 <div id="wrapper">
         <?php include "application/views/account/account_navbar.php" ?>
         <div id="main-content" style="background-color:#F8F8FD; width:auto;float:none">
             <div class="container-fluid" style="height:100%;padding:10px">



<div id='app'>
          


<span v-show="soal.question_type == 1">
<span class="label label-default label-md label-space font-soal">
    <span v-show="!isFinish && isMounted">SOAL NO: {{ noSoal }} : Pilihan Ganda</span>
    <span v-show="isFinish && isMounted">Rekap Jawaban</span>
    <span v-show="!isMounted">Loading Soal...</span>
</span>
</span>


<span v-show="soal.question_type == 2">
<span class="label label-default label-md label-space font-soal">
    <span v-show="!isFinish && isMounted">SOAL NO: {{ noSoal }} : Essai</span>
    <span v-show="isFinish && isMounted">Rekap Jawaban</span>
    <span v-show="!isMounted">Loading Soal...</span>
</span>
</span>


<span>
<span v-show="!isFinish && isMounted" id="timer" class="label label-default label-md pull-right label-icon font-soal"><i class="mdi mdi-time-countdown"></i> {{timer}}<span id="timer"></span></span>
</span> 


<div class="container-fuild">
    <div class="row">
    <div class="col-md-9">

            <div class="" v-show="!isFinish && isMounted">
            <span v-show="soal.question_type == 1">
        <div class="panel panel-default">

        <span v-show="soal.question_image">
        <div  clas="center-block"style="width:90%; margin:auto;">
        <img class="img-responsive center-block" style="margin-top:30px;" v-bind:src="soal.question_image" />

        </div>
        </span>

                <div style="margin-left:35px; margin-bottom:30px; margin-top:30px; " class="panel-body font-soal" v-html="soal.question"></div>
            </div>



            <div class="container">
                        <div class="center">
                    <button style="left: '50%', transform:'translateX(-50%" type="button" id="btnNext" @click="nextSoal" class="btn btn-primary btn-sm btn-icon" name="button"><i class="mdi mdi-arrow-right"></i>Simpan Jawaban</button>
                            <!-- <span v-show="isLastQuestion">
                            <button type="button" id="btnNext" @click="lihatRekap" class="btn btn-primary btn-sm btn-icon" name="button"><i class="mdi mdi-arrow-right"></i>Lihat Rekap</button>
                            </span> -->
                        </div>
                    </div>



        <div class="panel panel-default">
                <div class="panel-body font-soal">
                    <div class="jawaban mb-5">
                        <input id="jawabanA" type="radio" value="a" name="jawaban" v-model="jawabanUser[indexSoal]">
                        <label for="jawabanA"><strong class="label-pilihan">A. {{soal.a}}</strong>  </label>
                        <input id="jawabanB" type="radio" value="b" name="jawaban" v-model="jawabanUser[indexSoal]">
                        <label for="jawabanB"><strong class="label-pilihan">B. {{soal.b}} </strong> </label>
                        <input id="jawabanC" type="radio" value="c" name="jawaban" v-model="jawabanUser[indexSoal]">
                        <label for="jawabanC"><strong class="label-pilihan">C. {{soal.c}}</strong>  </label>
                        <input id="jawabanD" type="radio" value="d" name="jawaban" v-model="jawabanUser[indexSoal]">
                        <label for="jawabanD"><strong class="label-pilihan">D. {{soal.d}}</strong>  </label>
                        <input id="jawabanE" type="radio" value="e" name="jawaban" v-model="jawabanUser[indexSoal]">
                        <label for="jawabanE"><strong class="label-pilihan">E. {{soal.e}}</strong> </label>
                    </div>

                    <!-- <button type="button" id="btnNext" @click="nextSoal" class="btn btn-primary btn-sm btn-icon" name="button"><i class="mdi mdi-arrow-right"></i>Jawab / Update Jawaban</button> -->
                            <!-- <span v-show="isLastQuestion">
                            <button type="button" id="btnNext" @click="lihatRekap" class="btn btn-primary btn-sm btn-icon" name="button"><i class="mdi mdi-arrow-right"></i>Lihat Rekap</button>
                            </span> -->
        
                </div>

        </div>

        </span>

</div>


<div class="" v-show="!isFinish && isMounted">
<span v-show="soal.question_type == 2">
        <div class="panel panel-default">

                    <span v-show="soal.question_image">

                    <div  clas="center-block"style="width:90%; margin:auto;">
        <img class="img-responsive center-block" style="margin-top:30px;" v-bind:src="soal.question_image" />
                    </div>
                    </span>

                <div style="margin-left:35px; margin-bottom:30px; margin-top:30px; " class="panel-body font-soal" v-html="soal.question"></div>
        </div>



        <div class="container">
                        <div class="center">
                    <button style="left: '50%', transform:'translateX(-50%" type="button" id="btnNext" @click="nextSoal" class="btn btn-primary btn-sm btn-icon" name="button"><i class="mdi mdi-arrow-right"></i>Simpan Jawaban</button>
                            <!-- <span v-show="isLastQuestion">
                            <button type="button" id="btnNext" @click="lihatRekap" class="btn btn-primary btn-sm btn-icon" name="button"><i class="mdi mdi-arrow-right"></i>Lihat Rekap</button>
                            </span> -->
                        </div>
                    </div>

<div class="panel panel-default">
        <div class="panel-body font-soal">
            <div class="jawaban mb-5">

                            <!-- <textarea  id="essay" v-model="soal.essay_answer"> </textarea>  -->
                            <label class="panel-body font-soal" >Jawaban Essay </label>
                            <textarea style="width:90%;" class="form-control" id="exampleFormControlTextarea1" placeholder="Masukan Jawaban Essay Anda !" id="essay" v-model="jawabanUser[indexSoal]" rows="3"></textarea>
                         


                        
                            <label class="panel-body font-soal" >Jawaban Gambar </label>
                            <br>
                            

                            <input type="file" id="image" class="file-upload" name="userfile"  onchange="showMyImage(this)" />




                            <br>

                            <img  id="output" />
            
                     
                            <p class="sembunyi" id="dummyImage" v-model="answerImage" ></p>

                            <img class="img-responsive center-block" style='width:60%; ' v-bind:src="koreksiImage[indexSoal]" />
                            <br>
             
                  
<script>
    function showMyImage(fileInput) {

        var files = fileInput.files;
        $('#dummyImage').show();
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            var imageType = /image.*/;
            if (!file.type.match(imageType)) {
                continue;
            }



           
        
            var img = document.getElementById("dummyImage");

      
            img.file = file;

       

            var reader = new FileReader();
            reader.onload = (function (aImg) {
                return function (e) {

                const imgE = document.createElement("img")
                  
                        // console.log("Isi File :");
                        // console.log(file);


                        new Compressor(file, {
                            quality: 0.6,
                            success(result){
                                var reader = new FileReader()
                                reader.readAsDataURL(result);
                                reader.onloadend = function() {

                                    var base64data = reader.result;

                                    // console.log("Compressed");
                                    // console.log(base64data);



                                  aImg.innerHTML = base64data;

                                  this.imagePreview = base64data;


                                }


                            },
                            error(err){

                                console.log(err.message);
                            }
                         


                        })

                 
                        // const canvas = document.createElement("canvas");
                        // const MAX_WIDTH = 1280;


                        // console.log("Lebar Asli")
                        // console.log(event.target.width); 


                        // console.log("Tinggi Asli")
                        // console.log(event.target.height); 


                        // const scaleSize = MAX_WIDTH / event.target.width;
                        //     console.log("panjang");
                        // console.log(event.target.width);
                        // canvas.width = MAX_WIDTH;
                        // canvas.height = event.target.height * scaleSize;

                        // console.log("Lebar Terkompresi")
                        // console.log(canvas.width); 


                        // console.log("Tinggi Terkompresi")
                        // console.log(canvas.height); 



                        // console.log("panjang");
                        // console.log(event.target.height);

                        // console.log(event.target);  

                        // const ctx = canvas.getContext("2d");
                        // ctx.drawImage(event.target, 0, 0, canvas.width, canvas.height);

                        // const compressed = ctx.canvas.toDataURL(event.target, "image/jpeg");

                        // console.log("compressed");
                        // console.log(compressed);



                
                    
                };
            })(img);
            reader.readAsDataURL(file);
        }
    }
    

</script>

            </div>
<!--             
            <button type="button" id="btnNext" @click="nextSoal" class="btn btn-primary btn-sm btn-icon" name="button"><i class="mdi mdi-arrow-right"></i>Jawab / Update Jawaban</button>
            <span v-show="isLastQuestion">
            <button type="button" id="btnNext" @click="lihatRekap" class="btn btn-primary btn-sm btn-icon" name="button"><i class="mdi mdi-arrow-right"></i>Lihat Rekap</button>
            </span> -->
        </div>
</div>

</span> 

</div>

</div>


<div class="" v-show="isFinish && isMounted">
<span class="label label-default label-md pull-right label-icon font-soal"><i class="mdi mdi-time-countdown"></i> {{timer}}<span id="timer"></span></span>
    <div class="panel panel-default">
        <div class="panel-body text-center">
            <h4>Apakah Anda ingin menyelesaikan ujian?</h3>
            <p>Harap periksa kembali jawaban anda !</p>
            <div class="row">
                <div class="col-md-4 col-md-offset-4">
                    <table class="table table-condensed table-hover table-bordered table-striped">
                        <thead>
                            <tr>
                                <th width="5px" class="text-center">No</th>
                                <th class="text-center">Jawaban</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(soal, index) in soals">
                                <td>{{ index+1 }}</td>
                                <span v-show="soal.question_type == 1">
                                <td>{{ jawabanUser[index] == null ? "-" : jawabanUser[index] }}</td>
                                </span>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <button type="button" @click="finishQuiz" class="btn btn-success" name="button">wSELESAIKAN SEKARANG</button>
        </div>
    </div>
</div>

<div class="col-md-3"> 

<div class="panel panel-default">
        <div class="panel-body font-soal">

         <div class="btn-soal-group" v-for="(baris, index) in jumlahBarisNomor" :key="index">
            <button href="#" class="btn btn-sm btn-soal" v-for="(soal, no) in (index+1 < jumlahBarisNomor ? 5 : (jumlahSoal%5 == 0 ? 5 : jumlahSoal%5))" v-bind:class="[{'btn-select': ((index*5)+no == noSoal-1) && !isFinish}, jawabanUser[(index*5)+no] == null ? 'btn-default' : 'btn-warning btn-filled']">
                <span class="flex" @click="changeSoal((index*5)+no)"><span>{{ (index*5)+no+1 }}</span></span>
            </button>
        </div> 

        <button style="display: flex;
  align-items: center;" type="button" id="btnNext" @click="lihatRekap" class="btn btn-primary btn-sm btn-icon" name="button"><i class="mdi mdi-arrow-right"></i>Lihat Rekap</button>

        </div>  

      
    </div>
    
   

    </div></div>


</div>
     <?php include "application/views/Source/sidebarFooter.php" ?>
     <script type="text/javascript" src="https://cdn.datatables.net/v/bs4/dt-1.10.20/datatables.min.js"></script>
     <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
     <script src="<?php echo base_url()?>assets/js/moment.min.js"></script>
        <script src="https://unpkg.com/vue/dist/vue.min.js"></script>
 </body>

 <script src="https://unpkg.com/vue/dist/vue.min.js"></script>


<script type="text/javascript">
var quizId = <?php  echo $meetingDetail['quiz']['id'] ?>;
var meetingId = <?php  echo $meetingDetail['id'] ?>;
var classId = <?php  echo $meetingDetail['class_id'] ?>;
token = "<?php echo $this->session->userdata['pelangganLogin']['access_token'] ?>";
var app = new Vue({
    el: '#app',
    data: {
        imagePreview: null,
        jenis_soal: null, 
        message: quizId,
        soals: [],
        soal: {},
        noSoal: 0,
        indexSoal: 0,
        koreksis: [],
        koreksiSoal: [],
        updatedSoal: [],
        koreksi: {},
        koreksiId: [],
        answer_image: null,
        koreksiImage: [],
        jawabanUser: [],
        updatedKoreksiImage: [],
        jumlahBarisNomor: 0,
        jumlahSoal: 0,
        jawaban: null,
        answerImage: null,
        isLastQuestion: null,
        isErrorExist: false,
        errorMessage: null,
        isFinish: false,
        isMounted: false,
        endTimer: null,
        intervalHandler: null,
        timer: null
    },
    methods: {
        // finish: function() {
        //     this.isFinish = true;
        // },
        // clearError: function(){
        //     this.isErrorExist = false;
        //     this.errorMessage = null;
        // },
        getSoal: function(index) {
            window.scrollTo(0, 0);
            if(index < this.soals.length) {
                var self = this;
                self.soal = self.soals[index];
                self.noSoal = index+1;
                self.indexSoal = index;

                function isAnswer(cari) { 
                     return cari.quiz_question_id === self.soal.id;
                    }


                    let a = self.koreksis.find(isAnswer); 



                    if(a !== undefined){

                              self.jawabanUser[self.indexSoal] = a.answer;
                              self.koreksiId[self.indexSoal] = a.id;
                              self.koreksiImage[self.indexSoal] = a.answer_image;

                    }

                    if (self.updatedSoal[self.indexSoal] != null){

                             self.jawabanUser[self.indexSoal] = self.updatedSoal[self.indexSoal];

                    }

                    if (self.updatedKoreksiImage[self.indexSoal] != null){

                        self.koreksiImage[self.indexSoal] = self.updatedKoreksiImage[self.indexSoal];

                        }

            if(this.indexSoal == this.jumlahSoal-1){
                this.isLastQuestion = true;
            }else{
                this.isLastQuestion = false;
            }
                self.jawaban = self.jawabanUser[self.indexSoal];
            }
            $("#btnNext").attr("disabled", false);
            $("#btnHapus").attr("disabled", false);
        },
        nextSoal: function() {
            $("#btnNext").attr("disabled", true);
            if(this.indexSoal+1 == this.jumlahSoal){
                this.isFinish = true;
            }
            if(this.indexSoal == this.jumlahSoal-1){
                this.isLastQuestion = true;
            }


            if(this.jawabanUser[this.indexSoal] !== null && this.jawaban == null ) {
                this.sendJawaban();
            }else if(this.jawabanUser[this.indexSoal] !== null && this.jawaban !== null && this.jawaban == this.jawabanUser[this.indexSoal] && this.soal.question_type == 1) {
                this.changeSoal(this.indexSoal+1);
            }
            else if (this.jawabanUser[this.indexSoal] !== null && this.jawaban !== null && this.jawaban !== this.jawabanUser[this.indexSoal] && this.soal.question_type == 1 ) {
                this.updateJawaban();
            }else if (this.jawabanUser[this.indexSoal] !== null && this.jawaban !== null && this.jawaban !== this.jawabanUser[this.indexSoal] && this.soal.question_type == 2 ) {
                this.updateJawaban();
            }else if (this.jawabanUser[this.indexSoal] !== null && this.jawaban !== null && this.jawaban == this.jawabanUser[this.indexSoal] && this.soal.question_type == 2 ) {
                this.updateJawaban();
            }
             else {
                this.changeSoal(this.indexSoal+1);
            }
        },
        updateJawaban: function(){
            var self = this;
            let url = 'https://api.sanedu.id/user/quiz/'+ quizId +'/answer/update';

            if(self.soal.question_type == 2){


                

                self.soal.answer_image = document.getElementById('dummyImage').innerHTML ;

            } 

            // console.log(self.answerImage);

            if (self.soal.answer_image == null){

                // console.log(self.soal.answer_image);

            axios({
                method: 'post',
                url: url,
                data: {
                    "id" : self.koreksiId[self.indexSoal],
                    "attempt_id" : self.attemptId,
                    "answer" : self.jawabanUser[self.indexSoal],
                    "quiz_question_id" : self.soal.id,
                },
                headers: {'Authorization': 'Bearer '+token}
            })
            .then(function(response) {

                if(response.data) {
                    self.updatedSoal[self.indexSoal] = self.jawabanUser[self.indexSoal];
                    self.getSoal(self.indexSoal+1);
                }
                else {
                    self.isErrorExist = true;
                    self.errorMessage = "Anda Gagal !";
                    $("#btnNext").attr("disabled", false);
                    $("#btnHapus").attr("disabled", false);
                }
            })
            .catch(function(error) {
                console.log(error);
            });

             } else if (self.soal.answer_image != null){


                console.log(self.soal.answer_image);

                axios({
                method: 'post',
                url: url,
                data: {
                    "id" : self.koreksiId[self.indexSoal],
                    "attempt_id" : self.attemptId,
                    "answer" : self.jawabanUser[self.indexSoal],
                    "quiz_question_id" : self.soal.id,
                    "answer_image": self.soal.answer_image,
                },
                headers: {'Authorization': 'Bearer '+token}
            })
            .then(function(response) {

                if(response.data) {
                    self.updatedSoal[self.indexSoal] = self.jawabanUser[self.indexSoal];
                    self.updatedKoreksiImage[self.indexSoal] = response.data.answer_image;
                    self.getSoal(self.indexSoal+1);
                }
                else {
                    self.isErrorExist = true;
                    self.errorMessage = "Anda Gagal !";
                    $("#btnNext").attr("disabled", false);
                    $("#btnHapus").attr("disabled", false);
                }
            })
            .catch(function(error) {
                console.log(error);
            });

             }

        },
        lihatRekap: function(){

            this.isFinish = true;

        },
        // hapusJawaban: function() {
        //     $("#btnHapus").attr("disabled", true);
        //     var index = this.indexSoal+1;
        //     if(this.indexSoal+1 == this.jumlahSoal) index = 0;
        //     if(this.jawaban == null)
        //         this.changeSoal(index);
        //     else {
        //         this.soal.essay_answer = null;
        //         this.sendJawaban();
        //     }
        // },
        changeSoal: function(index) {
            if(!this.isFinish) this.jawabanUser[this.indexSoal] = this.jawaban;
            this.isFinish = false;
            this.getSoal(index);
        },


        sendJawaban: function(){
            var self = this;
            let url = 'https://api.sanedu.id/user/quiz/'+ quizId +'/answer/insert';

             if(self.soal.question_type == 2){
                
                self.soal.answer_image = document.getElementById('dummyImage').innerHTML ;

              
                } 


            if (self.soal.answer_image == null){

                console.log("Answer sent");

            axios({
                method: 'post',
                url: url,
                data: {
                    "attempt_id" : self.attemptId,
                    "answer" : self.jawabanUser[self.indexSoal],
                    "quiz_question_id" : self.soal.id,
                },
                headers: {'Authorization': 'Bearer '+token}
            })
            .then(function(response) {

                if(response.data) {
                    self.koreksiId[self.indexSoal] = response.data.id;
                    self.getSoal(self.indexSoal+1);
                }
                else {
                    self.isErrorExist = true;
                    self.errorMessage = "Anda Gagal !";
                    $("#btnNext").attr("disabled", false);
                    $("#btnHapus").attr("disabled", false);
                }
            })
            .catch(function(error) {
                console.log(error);
            });

            } else if (self.soal.answer_image != null){

                // console.log(self.soal.answer_image);

                self.jawabanUser[self.indexSoal] = "Dijawab dengan foto"

                axios({
                method: 'post',
                url: url,
                data: {
                    "attempt_id" : self.attemptId,
                    "answer" : self.jawabanUser[self.indexSoal],
                    "quiz_question_id" : self.soal.id,
                    "answer_image": self.soal.answer_image,
                },
                headers: {'Authorization': 'Bearer '+token}
            })
            .then(function(response) {

                if(response.data) {
                    self.koreksiId[self.indexSoal] = response.data.id;
                    // self.updatedKoreksiImage[self.indexSoal] = response.data.answer_image;
                    self.koreksiImage[self.indexSoal] = response.data.answer_image;
                    self.getSoal(self.indexSoal+1);
                }
                else {
                    self.isErrorExist = true;
                    self.errorMessage = "Anda Gagal !";
                    $("#btnNext").attr("disabled", false);
                    $("#btnHapus").attr("disabled", false);
                }
            })
            .catch(function(error) {
                console.log(error);
            });


            }
        },
        tick: function() {
            var self = this;

            // const dates = new Date(self.endTimer).getTime();

            const dates = moment(self.endTimer, 'YYYY-MM-DD HH:mm:ss').toDate();

			const now = new Date().getTime();

            // const dates = Date.parse(self.endTimer);
			// const now =  Date.parse();


			const distance = dates - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);
			
			const timerHtml = "WAKTU : " + hours + ":" + minutes + ":" + seconds ;
			self.timer = timerHtml;

			if (distance < 0 ) {
                document.getElementById("timer").innerHTML = "Waktu Habis";
                window.location.href = 'https://sanedu.id/AccountSanClass/kelas/'+ classId +'/pertemuan/'+ meetingId
                alert("Waktu pengerjaan kamu sudah habis !");

			}

		},


        reqSoal: function() {
            var self = this;

            let url = 'https://api.sanedu.id/user/quiz/'+ quizId +'/start';


            // console.log(url);
            axios({
                method: 'post',
                
                url: url,
                headers: { 'Authorization': 'Bearer '+token}
            })
            .then(function(response) {
                if(response.data){
                    self.isMounted = true;
                    self.attemptId = response.data.id;
                    self.soals = response.data.quiz.questions;
                    self.soal = self.soals[0];
                    self.koreksis = response.data.corrections;

                    // console.log("Koreksi");
                    // console.log(self.koreksis);
                    

                    for (i = 0; i <response.data.quiz.question_number; i++) {



                        if ( self.koreksis[i] !== undefined ){

                            // console.log("isi koreksi ke " + i);
                            // console.log(self.koreksis[i].quiz_question_id);


                            for (j=0; j<response.data.quiz.question_number; j++){

                                if (self.koreksis[i].quiz_question_id == self.soals[j].id) {

                                    self.jawabanUser[j] = self.koreksis[i].answer;
                                    self.koreksiId[j] = self.koreksis[i].id;
                                    self.koreksiImage[j] =self.koreksis[i].answer_image;


                                    // console.log("Koreksi ke - " + i);
                                    // console.log(self.jawabanUser[j]);
                                    // console.log(self.koreksiId[j]);
                                    // console.log(self.koreksiImage[j]);


                                }

                            }


                            // function isAnswer(cari) { 
                            // return cari.quiz_question_id === self.soals[i].id;
                            // }

                            // console.log("id soal ke-" + i);
                            // console.log(self.soals[i].id);

                            // console.log(self.koreksis.find(isAnswer)); 

                            //  let a = self.koreksis.find(isAnswer); 

                            //     self.jawabanUser[i] = a.answer;
                            //     self.koreksiId[i] = a.id;
                            //     self.koreksiImage[i] = a.answer_image;
                        }

                        

                    }

                


                    self.noSoal = 1;
                    self.indexSoal = 0;
                    self.jawaban = self.jawabanUser[self.indexSoal];
                    self.jumlahSoal = self.soals.length;
                    self.endTimer = response.data.finished_at;
                    self.jumlahBarisNomor = self.soals.length%5 == 0 ? Math.floor(self.soals.length/5) : (Math.floor(self.soals.length/5)) + 1;
                 
                    // console.log(response);       
                }
                else {

                    console.log(response);    
                    self.isErrorExist = true;
                    self.errorMessage = "Anda Gagal !";
                }


            })
            .catch(function(error) {
                console.log(error);
            });
        },


        finishQuiz: function(){

            var yakin = confirm("Apakah Kamu Yakin Untuk Menyelesaikan Quiz ?");

                if (yakin) {
                        
                    let url = 'https://api.sanedu.id/user/quiz/'+ quizId +'/finish';

                                axios({
                                method: 'post',
                                url: url,
                                headers: {'Authorization': 'Bearer '+token}
                        })
                        .then(function(response) {

                            location.reload();

                        //   alert("Quiz Telah Selesai !");window.location.href = "'.base_url().'kelas/"+ classId +"/pertemuan/"+ meetingId;

                        })
                        .catch(function(error) {
                            console.log(error);
                        });



                   } 


            
        },


        refreshReq: function(){ 


         alert("Gunakan Tombol 'Jawab / Update Jawaban' untuk Setiap mengisi atau mengupdate jawaban kamu ! , atau soal tidak akan terjawab. ");


        }

       

    },

    mounted: function () {
    
        this.refreshReq();
        this.reqSoal();
        const vue = this;
        this.intervalHandler = setInterval(function(){
			vue.tick();
		}, 1000);
    },

    // updated: function(){

        
    //     const vue = this;
    //     this.intervalHandler = setInterval(function(){
	// 		vue.tick();
	// 	}, 1000);
    // }


});

</script>





 </html>
