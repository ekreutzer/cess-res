<template>
   <v-flex xs4 class="mx-auto" style="width:200px">
                    
                    <div v-if="showDateTime">
                        <!-- shows date and time picker -->
                        <h1 class="headline pt-1 mb-2" id="headl" >Select Date</h1>
                        <v-flex style="margin-top: 30%">
                            <v-dialog
                                ref="dialog"
                                persistent
                                v-model="modal"
                                lazy
                                full-width
                                :return-value.sync="date"
                            >
                                <v-text-field
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
                        <v-flex style="margin-top:10%" width="20px">
                            <v-select width="20px"
                            label="Select Times"
                            :items="availTimes"
                            v-model="selectedTimes"
                            multiple
                            chips
                            hint="Max. of 4 time slots"
                            persistent-hint
                            @click="showSelectedTimes"
                            ></v-select>
                            <v-btn @click="showSelectedTimes">Click</v-btn>
                        </v-flex>
                    </div>

                </v-flex>
  
</template>
<script>
export default {
  data(){
      return{
          el: '#app',
          date:'',
          showTable: true,
          showDate: false,
          showTime: true,
          selectedTimes: [],
          availTimes:[
              '9:30AM', '10:00AM','10:30AM','11:00AM','11:30AM','12:00PM','12:30PM', '1:00PM','1:30PM','2:00PM','2:30PM','3:00PM'
          ], 
      }
  },
  methods:{
      showSelectedTimes:function(){
          console.log(this.selectedTimes);
      }
  }

  }

</script>

