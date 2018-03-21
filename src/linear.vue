<template>
<div id="app" style="overflow: none">
  <v-app id="inspire">
    <v-content class="elevation-5" height="200px">
  <v-stepper  v-model="e1" alt-labels>
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
      <v-stepper-content v-if="loginGood" step="1" class = "white" height="4000px">
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

                                <v-tooltip right light>
                                    <v-btn flat icon color="gray" slot="activator"><v-icon>help_outline</v-icon></v-btn>
                                    <span>Don't have a Rhume account? Click <strong>'Create Account'</strong> below to get started!</span>
                                </v-tooltip>
                                <p class = "mx-auto" style = "top: 15px; font-size: 12px; margin-top: -10px; color: gray">Forgot Password?</p>
                            </tr>
                        </tbody>
                    </table>
                    
                    
                </div>
                <v-btn  class="mx-auto mt-4" outline color="white" style="top: 35px">Create Account</v-btn>
            </div>
        </v-card>
        <v-btn color="success" @click.native="e1=2">LOGIN</v-btn>
        
        
      </v-stepper-content> 
      <v-stepper-content step="2">
         
        <v-card color="white" class="mb-2 elevation-0" height="480px">
            <v-layout row wrap>
                <v-flex  xs6 class = "mt-5">  
                    <div v-if="showTable">
                    <v-layout row>
                        <v-flex xs12 offset-sm1 style="margin-top:40px">
                            <v-card>
                                <v-toolbar style="background: #68b7e7" light>
                                    <v-toolbar-side-icon><v-icon>dashboard</v-icon></v-toolbar-side-icon>
                                    <v-toolbar-title id="lightweight">Select Table</v-toolbar-title> 

                                </v-toolbar>
                                <v-list two-line subheader>
                                    <v-subheader id="lightweight">Choose One</v-subheader>
                                    <v-divider></v-divider>
                                    <v-list-tile id="tileT">
                                        <v-list-tile-action>
                                            <v-checkbox v-model="tab1" @click="setTable1"></v-checkbox>
                                        </v-list-tile-action>
                                        <v-list-tile-content
                                            @click="setTable1"
                                        >
                                            <v-list-tile-title
                                                id="lightweight"
                                            >
                                            Table 1
                                            </v-list-tile-title>

                                            <v-list-tile-sub-title
                                                id="lightweight"
                                            >Capacity: 6</v-list-tile-sub-title>
                                        </v-list-tile-content>
                                    </v-list-tile>
                                    <v-divider></v-divider>
                                    <v-list-tile>
                                        <v-list-tile-action>
                                            <v-checkbox v-model="tab2" @click="setTable2"></v-checkbox>
                                        </v-list-tile-action>
                                        <v-list-tile-content @click="setTable2">

                                            <v-list-tile-title id="lightweight">Table 2</v-list-tile-title>

                                            <v-list-tile-sub-title id = "lightweight">Capacity: 4</v-list-tile-sub-title>
                                        </v-list-tile-content>
                                    </v-list-tile>

                                </v-list>
                            </v-card>
                        </v-flex>
                    </v-layout>

                    </div>
                </v-flex>
                <v-flex xs6 class="mt-5" style = "margin-left:0px" width="200px">
                    
                    <div v-if="showDateTime" >
                        <v-layout row>
                            <v-flex xs12 offset-sm1 style="margin-top: 40px; margin">
                                <v-card>
                                    <v-toolbar style = "background: #68b7e7">
                                        <v-toolbar-side-icon><v-icon>alarm_add</v-icon></v-toolbar-side-icon>
                                        <v-toolbar-title id = "lightweight">Select Date and Time</v-toolbar-title>
                                    </v-toolbar>
                                        <v-list three-line >
                                            <v-list-tile>
                                                <v-list-tile-content>
                                                    <v-list-tile-sub-title>
                                                  <v-flex style="margin-top:15px">
                                                    <v-dialog
                                                    id="datePicker"
                                                    transition="fade-transition"
                                                    class="mx-auto"
                                                    style="padding-right: 25px"
                                                        ref="dialog"
                                                        persistent
                                                        v-model="modal"
                                                        lazy
                                                        full-width
                                                        :return-value.sync="date"
                                                    >
                                                        <v-text-field
                                                        style="margin-left:15px"
                                                        slot="activator"
                                                        label="Select Date"
                                                        v-model="date"
                                                        prepend-icon="event"
                                                        readonly
                                                        ></v-text-field>
                                                        <v-date-picker v-model="date" scrollable>
                                                        <v-spacer></v-spacer>
                                                        <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
                                                        <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                                                        </v-date-picker>
                                                    </v-dialog>
                                                  </v-flex>
                                                    </v-list-tile-sub-title>
                                                </v-list-tile-content>
                                            </v-list-tile>
                                            <v-list-tile>
                                                <v-list-tile-content>
                                                <v-list-tile-sub-title>
                                                  <v-flex style="margin-bottom: 15px; padding-right:5px; padding-left: 35px" width="20px">
                                                        <v-select width="15px"
                                                        class="mx-auto"
                                                        style="padding"
                                                        label="Select Times"
                                                        :items="availTimes"
                                                        v-model="selectedTimes"
                                                        multiple
                                                        chips
                                                    
                                                        hint="Max. of 4 time slots"
                                                        persistent-hint
                                                        @click="showSelectedTimes"
                                                        ></v-select>
                                                    </v-flex>
                                                  </v-list-tile-sub-title>
                                                  </v-list-tile-content>
                                            </v-list-tile>
                                        </v-list>

                                </v-card>
                            </v-flex>
                        </v-layout>
                    </div>
                </v-flex>
               </v-layout> 
        </v-card>
        
       <v-tooltip color = "red" top v-if="date.length == 0 || selectedTimes.length == 0 || selectedTimes.length > 4">
           <v-btn v-if="date.length == 0 || selectedTimes.length == 0 || selectedTimes.length > 4" 
            color="primary"  
            @click ="goToPageThree"
            disabled depressed
            slot="activator"
        >Continue</v-btn>
           <span v-if="date.length ==0" attach="datePicker">Select a date!</span>
       </v-tooltip>
        
        
        <v-btn v-if="date.length !== 0 && selectedTimes.length !== 0 && selectedTimes.length <= 4" 
            color="primary" 

            @click.native = "sortTimes"
        >Continue</v-btn>
        <v-tooltip top light color="red">
            <v-btn  @click.native="resetData" slot="activator">Cancel</v-btn>
            <span>Wait! You will be <strong>logged out</strong> by cancelling</span>
        </v-tooltip>
        
      </v-stepper-content>
      <v-stepper-content step="3">
        <v-card color="white" class="mb-5 elevation-0" height="480px">
            <v-layout row>
                        <v-flex xs6 style="margin-top:40px" class="mx-auto">
                            <v-card class="mx-auto elevation-10" height="100%">
                                <v-toolbar style="background: #68b7e7" light class = "elevation-6">
                                    <v-toolbar-side-icon><v-icon large>class</v-icon></v-toolbar-side-icon>
                                    <v-toolbar-title id="lightweight" style="font-size:2vw">Confirm Reservation</v-toolbar-title> 

                                </v-toolbar>
                                <v-list three-line subheader class="mb-3">
                                    
                                    <v-list-tile id="tileT" height="100px">
                                        <v-list-tile-content>
                                        <v-subheader id="subheads" height="10px">Times</v-subheader>
                                        
                                        <v-list-tile-sub-title>
                                        
                                            
                                            <v-layout row>
                                                <!-- <v-flex xs2></v-flex> -->
                                                <v-flex v-for="time in selectedTimes" :key="time">
                                                    <v-chip class="mb-5 elevation-1" color="info">{{time}}</v-chip>
                                                </v-flex>
                                            </v-layout>
                                        </v-list-tile-sub-title>
                                        </v-list-tile-content>
                                    </v-list-tile>
                                    <v-divider></v-divider>
                                    <v-list-tile id="tileT">
                                        <v-list-tile-content>
                                        <v-subheader height="30px" id="subheads">Date</v-subheader>
                                      
                                        <v-list-tile-sub-title class="mx-auto">
                                        <v-layout row>
                                            <!-- <v-flex xs3 offset xs2></v-flex> -->
                                            <v-flex class="mx-auto">
                                                <p style="height:40px; font-size:2vw; font-weight:100; color: black" class="mb-5">&nbsp;&nbsp;{{date}}&nbsp;&nbsp;</p>
                                            </v-flex>
                                            </v-layout>
                                            <!-- <v-flex xs3></v-flex> -->
                                        </v-list-tile-sub-title>
                                        </v-list-tile-content>
                                    </v-list-tile>
                                    <v-divider></v-divider>
                                    <v-list-tile id="tileT">
                                        <v-list-tile-content>
                                            <v-subheader id="subheads">Table</v-subheader>
                                     
                                        <v-list-tile-sub-title style="font-size: 2vw; color: black; font-weight: 100">
                                            <v-layout row>
                                                <v-flex>
                                                    <p class="" color="info" style="height:40px; font-size:2vw">&nbsp;&nbsp;Table 2&nbsp;&nbsp;</p>

                                                </v-flex>
                                            </v-layout>
                                            
                                        </v-list-tile-sub-title>
                                        </v-list-tile-content>
                                    </v-list-tile>
                                </v-list>
                            </v-card>
                        </v-flex>
                    </v-layout>
                    <div class>
                        
                    <v-tooltip bottom color="success">
                        <v-btn slot = "activator" @click="confirmed = !confirmed" fab large id="confirm" color="success" style="height:100px; width:100px">
                            
                            <v-icon color="white" >done_all</v-icon>
                            
                        </v-btn>
                        <span><strong>Confirm Reservation</strong></span>
                    </v-tooltip>
                      

                    
                    <v-tooltip bottom debounce="200" close-delay="100" color="warning" v-model="showEdit">
                        <v-btn slot = "activator" @click.native="e1=2" fab large id="edit" color="warning" style="height:100px; width:100px">
                            <v-icon color="white">edit</v-icon>
                        </v-btn>
                        <span><strong>Make Changes</strong></span>
                    </v-tooltip>
                    
                    </div>
        </v-card>
        
        
      </v-stepper-content>
    </v-stepper-items>
    <app-footer></app-footer>
  </v-stepper>
    </v-content>
    <v-alert type="error"  :value="this.selectedTimes.length > 4" transition="slide-x-reverse-transition" icon="schedule" style="bottom:45%; margin-top:35px; left:52%;">
        Maximum 4 Time Slots
    </v-alert>
    <v-alert type="success" :value="confirmed" transition="slide-x-reverse-transition" id = "confirmALert" style="
                                                                        width:20%;
                                                                        bottom: 25%;
                                                                        left:35%;"
    >Confirmed</v-alert>
    
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
          showTimes: true,
          email: '',
          pwd: '',
          date: '',
          showTable: true,
          showDateTime: false,
          showtime: false,
          selectedTimes: [],
          loginGood: true,
          showEdit:false,
          confirmed:false,
          availTimes:[
              '9:30AM', '10:00AM','10:30AM','11:00AM','11:30AM','12:00PM','12:30PM', '1:00PM','1:30PM','2:00PM','2:30PM','3:00PM'
          ], 
          tab1:false,
          tab2:false,
          
         
          
      }
  },
  methods :{
      goToPageThree:function(){
          console.log(this.showEdit);
          this.e1=3;
          this.showEdit=true;
          console.log(this.showEdit);
      },
      sortTimes:function(){
          var i;
        for(i = 0; i < this.selectedTimes.length; i++){
            var sthg = this.selectedTimes[i].split();
            console.log((sthg[0]));
        }
          this.e1=3;
      },
      showTimes:function(){
          this.showtime = true;
          console.log(showtime);
      },
      resetData:function(){
          this.e1 = 1;
          this.selectedTimes=[];
          this.showDateTime = false;
          this.tab1=false;
          this.tab2=false;

      },
      verifyLogin:function(){
          this.loginGood = false;
          setTimeout(this.e1=2, 4000);
      },
      showDateTimeFunc: function(){
          console.log(this.showDateTime);
          this.showDateTime=true;
          console.log(this.showDateTime);
      },
      showTimeFunc: function(){
          console.log(this.showTime);
          this.showTime = true;
          console.log(this.showTimeFunc)
      },
      showSelectedTimes:function(){
          console.log(this.selectedTimes);
          console.log(this.date);
          console.log(this.date.length);
      },
      setTable1:function(){
          this.tab1=true;
          this.tab2=false;
          setTimeout(this.showDateTime=true, 40000);
      },
      setTable2:function(){
          this.tab1=false;
          this.tab2=true;
          setTimeout(this.showDateTime=true, 40000);
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
#lightweight{
    font-weight: 100;
}
#tileT:hover{
    background-color: black !important;
}
.content-wrap{
    background-color: transparent;
    border: none;
}
#subheads{
    font-size: 15px; 
    /* padding-top: 5%;  */
    font-weight: 100; 
    /* margin-bottom: -20px */
}
#confirm{
	left: 20%;
	margin-top: 25px;
    margin-bottom: 45px
}
#edit{
    right:20%;
    margin-top: 25px;
    margin-bottom: 45px;
}
#confirmAlert{
    width:20%;
    bottom: 35px;
    left:55px;
}
</style>

