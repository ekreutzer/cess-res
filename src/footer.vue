<template>
  <div id="app">
      <v-footer height="70px" style=" background-color: transparent !important" width="100%">
            <v-flex xs12 py-3 text-xs-center dark blue--text height="auto" style ="background-color: inherit">
                <div style="background-color: inherit">
                &copy; 2018 Powered by <strong style="background-color: inherit">Rhume</strong>
                </div>
                <table  class = "mx-auto">
                    <tbody style="background-color: inherit">
                        <td style = "border-right: 1px solid black; padding-right: 15px; background-color: inherit !important">Contact Us</td>
                        <td style = "padding-left: 15px; background-color: inherit !important">Download</td>
                    </tbody>
                </table>
            </v-flex>
            </v-footer>
          <!-- </v-content> -->
      <!-- </v-app> -->
  </div>
</template>
<script>
export default {
  data(){
      return{
          el: '#app'
      }
  }
}
</script>
<style scoped>
*{
    background: #FAFAFA;
}
</style>



