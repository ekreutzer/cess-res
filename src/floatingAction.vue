<template>
  <div id="app">
      <v-app id="inspire">
          <v-content>
              <v-speed-dial class="speed-dial"
                v-model="fab"
                right
                :direction="direction"
                :open-on-hover="hover"
                :transition="transition"
                >
                <!-- <v-tooltip right> -->
                    <v-btn
                        slot="activator"
                        color="blue darken-2"
                        dark
                        fab
                        hover
                        v-model="fab"
                    >
                        <v-icon>account_circle</v-icon>
                        <v-icon>close</v-icon>
                    </v-btn>
                    <!-- <span>Right</span>
                </v-tooltip> -->
                 
      <v-btn
        fab
        dark
        small
        color="green"
      >
        <v-icon>edit</v-icon>
        <v-title>Right tooltip</v-title>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="indigo"
      >
        <v-icon>add</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="red"
      >
        <v-icon>delete</v-icon>
      </v-btn>
    </v-speed-dial>
          </v-content>
      </v-app>
  </div>
</template>
<script>
export default {
    data: () => ({
      direction: 'bottom',
      fab: true,
      fling: true,
      hover: false,
      tabs: null,
      top: false,
      right: true,
      bottom: true,
      left: false,
      transition: 'slide-y-reverse-transition'
    }),

    computed: {
      activeFab () {
        switch (this.tabs) {
          case 'one': return { 'class': 'purple', icon: 'account_circle' }
          case 'two': return { 'class': 'red', icon: 'edit' }
          case 'three': return { 'class': 'green', icon: 'keyboard_arrow_up' }
          default: return {}
        }
      }
    },

    watch: {
      top (val) {
        this.bottom = !val
      },
      right (val) {
        this.left = !val
      },
      bottom (val) {
        this.top = !val
      },
      left (val) {
        this.right = !val
      }
    }
  }
</script>
<style scoped>
*{

}
.speed-dial{
    top:-800px;
    left:0px;
}
</style>


