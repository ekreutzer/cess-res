<template>
<div id="app" style="background: red !important">
  <v-app id="inspire">
    <v-content class="elevation-5" height="500px">
  <v-stepper v-model="e1" alt-labels>
    <v-stepper-header>
      <v-stepper-step step="1" :complete="e1 > 1"
          edit-icon accessibility
          ><v-icon class="mx-auto" id = "login" medium color="green darken-1">accessibility</v-icon>UVM Login</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="2" :complete="e1 > 2"><v-icon class="mx-auto" id = "login" medium color="blue darken-1">group_work</v-icon>Reserve</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="3" :complete="e1 > 3"><v-icon class="mx-auto" id = "login" medium color="green darken-2">done_all</v-icon>Confirm</v-stepper-step>
    </v-stepper-header>
    <v-stepper-items>
      <v-stepper-content step="1" class = "white" height="4000px">
          <!-- <app-login height="400px"></app-login> -->
         <v-card color="blue lighten-3" class="mb-4 mx-auto elevation-20" height="400px" width = "500px">
            <div class="mx-auto" height = "600px" width="400px" style="padding-top:45px; font-family: 'Roboto', sans-serif;">
                <img src='./2017_Sec_Logos_EduSoc_H_7484.png' style = "padding-bottom:35px">
                <div class = "mx-auto" style = "margin: 5px 5px; height: 100px; width: 300px; border-radius: 5px; padding-bottom: 50px">
                    <table class = "mx-auto pl-4 pr-2 pt-2" style = "border:.5px solid white; ">
                        <tbody>
                            <tr>
                                <input v-model="email" type = "email" placeholder="   UVM Email" class = "mx-auto" style = "color: blue; font-weight:100; background-color: white; margin: 15px 0px 10px 0px; padding-left:5px">
                                <v-tooltip right>
                                    <v-btn flat icon color="gray" slot="activator"><v-icon>help_outline</v-icon></v-btn>
                                    <span>Login using your <strong>UVM Email</strong></span>
                                </v-tooltip>
                            </tr>
                            <tr>
                                <input v-model="pwd" type = "password" placeholder = "   Rhume Password" class = "mx-auto" style = "color: blue; font-weight:100; background-color: white; margin-bottom: -20px; padding-left: 5px">

                                <v-tooltip right>
                                    <v-btn flat icon color="gray" slot="activator"><v-icon>help_outline</v-icon></v-btn>
                                    <span>Don't have a Rhume account? Click <strong>'Create Account'</strong> below to get started!</span>
                                </v-tooltip>
                                <p class = "mx-auto" style = "top: 15px; font-size: 12px; margin-top: -10px; color: gray">Forgot Password?</p>
                            </tr>
                        </tbody>
                    </table>
                    
                    
                </div>
                <v-btn  class="mx-auto mt-4" outline color="white" style="top: 35px">Create Account</v-btn>
                    

                <!-- <v-btn class="mx-auto" outline color="red darken-5" style="margin-top: 15px">Forgot Password?</v-btn> -->
      
            </div>
        </v-card>
        <v-btn color="primary" @click.native="e1 = 2">Continue</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content> 
      <v-stepper-content step="2">
         
        <v-card color="blue lighten-5" class="mb-2" height="480px">
            <v-layout row wrap>
                <v-flex  xs6 class = "mb-5">  
                    <div v-if="showTable">
                    <h1 class="headline pt-1" id = "headl">Select Space</h1>
                    <v-container fluid grid-list-xl id="tables">
                        <v-card color="blue" class = "mb-5 mt-4" height = "125px" @click="showDateTimeFunc">
                            <v-btn class = "mx-auto elevation-0" color="success" @click="showDateTimeFunc" id="table-btn">Table 1</v-btn><div id="card-labels"><p class="display-3 mb-0" style="font-weight:100">Table 1</p> <p class="mb-0">Capacity: 6</p> <p><strong>Samsung SmartTV</strong> available</p></div>
                        </v-card>
                        <v-card color="blue" class = "mb-5 mt-4" height = "125px" @click="showDateTimeFunc">

                            <v-btn class = "mx-auto elevation-0" color="success" @click="showDateTimeFunc" id="table-btn">Table 2</v-btn><p class="display-3 mb-0" style="font-weight:100">Table 2</p> <p class="mb-0">Capacity: 4</p> <p><strong>Samsung SmartTV</strong> available</p>
                        </v-card>
                    </v-container>
                    </div>
                </v-flex>
                <v-flex xs4 class="mx-auto" style="width:200px">
                    <div v-if="showDateTime">
                        <!-- shows date and time picker -->
                        <app-date></app-date>
                    </div>

                </v-flex>
                
                <!-- <v-flex xs4>
                    <v-container fluid grid-list-xl id="tables">
                        <h1 class="headline" id="headl" style="margin-top: -20px">Select Time</h1>
                        <v-flex style="margin-top:30%">
                            <v-select
                            label="Select"
                            :items="availTimes"
                            v-model="selectedTimes"
                            multiple
                            chips
                            hint="Max. of 4 time slots"
                            persistent-hint
                            ></v-select>
                        </v-flex>
                    </v-container>
                </v-flex> -->
            </v-layout> 
        </v-card>
        <v-btn color="primary" @click.native="e1 = 3">Continue</v-btn>
        <v-btn flat @click.native="e1=1">Cancel</v-btn>
      </v-stepper-content>
      <v-stepper-content step="3">
        <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
        <v-btn color="primary" @click.native="e1 = 1">Continue</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
  <!-- <app-footer></app-footer> -->
  <div fixed height="auto" style="margin-top: -50px">
            <app-footer></app-footer>
        </div>
    </v-content>
  </v-app>
</div>

</template>
<script>
export default {
  data() {
      return {
          el: '#app',
          message: 'hello',
          e1: 0,
          e2:0,
          email: '',
          pwd: '',
          date: '',
          showTable: true,
          showDateTime: false,
          showTime: false,
          selectedTimes: [],
          availTimes:[
              '9:30AM', '10:00AM','10:30AM','11:00AM','11:30AM','12:00PM','12:30PM', '1:00PM','1:30PM','2:00PM','2:30PM','3:00PM'
          ], 
          
      }
  },
  methods :{
      showDateTimeFunc: function(){
          console.log(this.showDateTime);
          this.showDateTime=true;
          console.log(this.showDateTime);
      },
      showTimeFunc: function(){
          console.log(this.showTime);
          this.showTime = true;
          console.log(this.showTimeFunc)
      }
  }
 
}
</script>
<style scoped>
#app{
    margin: 5% 15%;
    /* background: red; */
}
#login{
    padding-bottom:10px;
}
#headl{
    color:gray;
}
#tables{
    /* border-right: 1px solid black; */
    margin-bottom: 55px;
}
#table-btn{
    margin-top: 0px;
    height: 100%;
    position: absolute;
    right: 80%;
}
#card-labels{
    color: white !important;
}
</style>

