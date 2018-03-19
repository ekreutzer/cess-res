<template>
  <div id="app" style = "height: 400px !important">
  <v-app id="inspire">
       <v-stepper-content step="1" class = "white" height="">
          <!-- <app-login height="400px"></app-login> -->
        <v-card color="blue lighten-5" class="mb-4 mt-2 mx-auto elevation-20" height="400px" width = "500px">
            <div class="mx-auto" height = "600px" width="400px" style="padding-top:45px; font-family: 'Roboto', sans-serif;">
                <img src='./2017_Sec_Logos_EduSoc_H_7484.png' style = "padding-bottom:35px">
                <div class = "mx-auto" style = "border:.5px solid blue; margin: 5px 5px; height: 100px; width: 300px; border-radius: 5px; padding-bottom: 50px">
                    <input v-model="email" type = "email" placeholder="   UVM Email" class = "mx-auto" style = "color: blue; font-weight:100; background-color: rgba(0, 0, 0, 0.1); margin: 15px 0px 10px 0px; padding-left:5px">

                    <v-tooltip right>
                    <v-btn flat icon color="gray" slot="activator"><v-icon>help_outline</v-icon></v-btn>
                    <span>Login using your <strong>UVM Email</strong></span>
                    </v-tooltip>
                    <input v-model="pwd" type = "password" placeholder = "   Rhume Password" class = "mx-auto" style = "color: blue; font-weight:100; background-color: rgba(0, 0, 0, 0.1); margin-bottom: 30px; padding-left: 5px">
                    <v-tooltip right>
                    <v-btn flat icon color="gray" slot="activator"><v-icon>help_outline</v-icon></v-btn>
                    <span>Don't have a Rhume account? Click <strong>'Create Account'</strong> below to get started!</span>
                    </v-tooltip>
                </div>
                <v-btn  class="mx-auto mr-5" outline color="green darken-5" style="margin-top:15px">Create Account</v-btn>
                      <!-- <br> -->

                <v-btn class="mx-auto" outline color="red darken-5" style="margin-top: 15px">Forgot Password?</v-btn>
      
            </div>
        </v-card>
        <v-btn color="primary" @click.native="e1 = 2">Continue</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
  </v-app>
</div>

</template>
<script>
export default {
  data(){
      return {
          el: '#login',
      }
  }
}
</script>
<style>

</style>


