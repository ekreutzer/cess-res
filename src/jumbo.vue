<template>
  <div id="app" class="red">
  <v-app theme.primary id="inspire">
      
    <v-content style="background-color:#EEEEEE">

        <v-toolbar id="toolbar">
            <img src = "./small-icon.png" style = "margin-top:75px; margin-left:50px">
    <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
    <v-toolbar-title class="blue--text mx-auto" id="ext-title" slot="extension"style="">
        CESS Breakout Space  <v-btn flat large color="success" absolute disabled style="right:27%; z-index:1">NEW!</v-btn>
         <p style="font-size:12px">Reserve a Space Now!</p>
    </v-toolbar-title>
    
      
    <!-- <v-toolbar-title>Title</v-toolbar-title> -->
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat @click="goToWebsite">Full Website</v-btn>
      <v-btn flat @click.stop="showDownloads = true">Download App</v-btn>
      <v-dialog v-model="showDownloads" max-width="700px">
          <v-card>
            <v-card-toolbar>
              <h4 style="font-weight: 100; font-size: 25px">Download the app</h4>
            </v-card-toolbar>
            <v-card-text class="mx-auto">
              <v-layout row>
                  <v-card class="mr-5 ml-2" color="white">
                      
                  <v-flex xs6 class="">
                      <a href="http://www.unitag.io/qreator/generate?setting=%7B%22LAYOUT%22%3A%7B%22COLORBG%22%3A%22transparent%22%2C%22COLOR1%22%3A%2268b7e7%22%7D%2C%22EYES%22%3A%7B%22EYE_TYPE%22%3A%22ER_IC%22%7D%2C%22BODY_TYPE%22%3A5%2C%22E%22%3A%22H%22%2C%22ARRONDI%22%3A10%2C%22LOGO%22%3A%7B%22L_NAME%22%3A%22https%3A%2F%2Fstatic-unitag.com%2Ffile%2Ffreeqr%2F278a02a2fde68b906ea8676311e01693.png%22%2C%22EXCAVATE%22%3Atrue%7D%7D&data=%7B%22TYPE%22%3A%22url%22%2C%22DATA%22%3A%7B%22URL%22%3A%22https%3A%2F%2Fitunes.apple.com%2Fus%2Fapp%2Frhume%2Fid1341372546%3Fmt%3D8%22%7D%7D "><img src="http://www.unitag.io/qreator/generate?setting=%7B%22LAYOUT%22%3A%7B%22COLORBG%22%3A%22transparent%22%2C%22COLOR1%22%3A%2268b7e7%22%7D%2C%22EYES%22%3A%7B%22EYE_TYPE%22%3A%22ER_IC%22%7D%2C%22BODY_TYPE%22%3A5%2C%22E%22%3A%22H%22%2C%22ARRONDI%22%3A10%2C%22LOGO%22%3A%7B%22L_NAME%22%3A%22https%3A%2F%2Fstatic-unitag.com%2Ffile%2Ffreeqr%2F278a02a2fde68b906ea8676311e01693.png%22%2C%22EXCAVATE%22%3Atrue%7D%7D&data=%7B%22TYPE%22%3A%22url%22%2C%22DATA%22%3A%7B%22URL%22%3A%22https%3A%2F%2Fitunes.apple.com%2Fus%2Fapp%2Frhume%2Fid1341372546%3Fmt%3D8%22%7D%7D" alt="QR Code - "></a>
                  </v-flex>
                  <v-card-title class="mx-auto" style="font-weight: 100; font-size: 18px">iOS App Store</v-card-title>
                  </v-card>
               
                  <v-card>
                  <v-flex xs6>
                      <a href="http://www.unitag.io/qreator/generate?setting=%7B%22EYES%22%3A%7B%22EYE_TYPE%22%3A%22ER_IR%22%7D%2C%22E%22%3A%22H%22%2C%22LOGO%22%3A%7B%22EXCAVATE%22%3Atrue%2C%22L_Y%22%3A0%2C%22L_X%22%3A0%2C%22L_X_Norm%22%3Anull%2C%22L_Y_Norm%22%3Anull%2C%22L_WIDTH%22%3A0%2C%22L_LENGTH%22%3A0%2C%22L_NAME%22%3A%22https%3A%2F%2Fstatic-unitag.com%2Ffile%2Fqr%2F2ea311882012dea08be8120b981d969c.png%22%7D%2C%22BODY_TYPE%22%3A5%2C%22LAYOUT%22%3A%7B%22COLORBG%22%3A%22transparent%22%2C%22COLOR1%22%3A%2268b7e7%22%7D%7D&data=%7B%22DATA%22%3A%7B%22URL%22%3A%22http%3A%5C%2F%5C%2Fopn.to%5C%2Fa%5C%2FZPk4f%22%7D%2C%22TYPE%22%3A%22url%22%7D "><img src="http://www.unitag.io/qreator/generate?setting=%7B%22EYES%22%3A%7B%22EYE_TYPE%22%3A%22ER_IR%22%7D%2C%22E%22%3A%22H%22%2C%22LOGO%22%3A%7B%22EXCAVATE%22%3Atrue%2C%22L_Y%22%3A0%2C%22L_X%22%3A0%2C%22L_X_Norm%22%3Anull%2C%22L_Y_Norm%22%3Anull%2C%22L_WIDTH%22%3A0%2C%22L_LENGTH%22%3A0%2C%22L_NAME%22%3A%22https%3A%2F%2Fstatic-unitag.com%2Ffile%2Fqr%2F2ea311882012dea08be8120b981d969c.png%22%7D%2C%22BODY_TYPE%22%3A5%2C%22LAYOUT%22%3A%7B%22COLORBG%22%3A%22transparent%22%2C%22COLOR1%22%3A%2268b7e7%22%7D%7D&data=%7B%22DATA%22%3A%7B%22URL%22%3A%22http%3A%5C%2F%5C%2Fopn.to%5C%2Fa%5C%2FZPk4f%22%7D%2C%22TYPE%22%3A%22url%22%7D" alt="QR Code - Rhume-gPlay"></a>
                  </v-flex>
                  <v-card-title class="mx-auto" style="font-weight: 100; font-size: 18px">Google Play Store</v-card-title>
                  </v-card>
              </v-layout>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" flat @click.stop="showDownloads=false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      <v-btn flat>Contact Us</v-btn>
    </v-toolbar-items>
  </v-toolbar>
  
<linear-stepper></linear-stepper>
  
  
  <!-- <app-powered></app-powered> -->
        <!-- <div height="50px">
            <v-text-field label="Gradient" v-model="gradient"></v-text-field>
            <v-jumbotron dark>
                <v-container height="200px">
                    <v-layout align-center>
                        <v-flex text-xs-center>
                            <h3 class="display-3">Rhume</h3>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-jumbotron>
        </div> -->
        <!-- <app-floater style = "margin-left:80%;top:500px"></app-floater> -->

    </v-content>
   
  </v-app>
</div>
</template>
<script>
export default {
  data(){
      return{
      el: '#app',
      showDownloads: false,
      }
      
  },
  methods:{
          goToWebsite:function(){
              location.href="http://rhume.squarespace.com";
              
          }
      }
}
</script>
<style scoped>
#toolbar{
    margin-top:-56px !important;
    padding-bottom: 20px;
    /* background: red; */
}
#ext-title{
    font-size: 48px;
    font-weight: 100;
}
</style>




