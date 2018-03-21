<template>
  <div id="app" class="red">
  <v-app theme.primary id="inspire">
    <v-content>
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
      <v-btn flat>Full Website</v-btn>
      <v-btn flat>Download App</v-btn>
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




