<template>

<div>
 
<app-jumbo>
</app-jumbo>

  <!-- <app-footer></app-footer> -->

  </div>

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'UVM Login',
      email: 'Email:',
      pwd: 'Password:',
    }
  }
}
</script>

<style>
#app {
  background: white;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  /* margin: 0 10px; */
}

a {
  color: #42b983;
}
</style>
