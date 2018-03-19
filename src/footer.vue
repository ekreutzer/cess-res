<template>
  <div id="app">
      <!-- <v-app id="inspire"> -->
          <!-- <v-content> -->
              <!-- <v-footer height="auto" fixed>
                <v-card
                flat
                tile
                class="indigo lighten-1 white--text text-xs-center"
                >
                <v-card-text>
                    <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    icon
                    class="mx-3 white--text"
                    >
                    <v-icon size="24px">{{ icon }}</v-icon>
                    </v-btn>
                </v-card-text>
                <v-card-text class="white--text pt-0">
                    Rhume uses blockchain and cloud computing to stay on the bleeding edge of the lastest block chain cloud computing virtualization technology by using crypto currency to hash the blockchain for the IPO of our VQC in the SPF based on Agile for our custom API with big data, neural networks and AI.
                </v-card-text>
                <v-card-text class="white--text">
                    &copy; 2018 <strong>vuetifyjs.com</strong>
                </v-card-text>
                </v-card>
            </v-footer> -->
        <!-- <v-footer fixed height="auto">
            <v-layout row wrap justify-center>
            <v-btn
                color="white"
                flat
                v-for="link in links"
                :key="link"
            >
                {{ link }}
            </v-btn>
            <v-flex xs12 py-3 text-xs-center blue--text>
                &copy; 2018 Powered by <strong>Rhume</strong>
            </v-flex>
            </v-layout>
        </v-footer> -->
        <v-layout row wrap justify-center >
            <v-flex xs12 py-3 text-xs-center blue--text>
                &copy; 2018 Powered by <strong>Rhume</strong>
                <table  class = "mx-auto">
                    <tbody>
                        <td style = "border-right: 1px solid black; padding-right: 15px">Contact Us</td>
                        <td style = "padding-left: 15px">Download</td>
                    </tbody>
                </table>
            </v-flex>
        </v-layout>
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



