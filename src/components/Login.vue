<template>
    <div class="login">
         <b-card title="Login">
            <b-form-input  type="text"
                  placeholder="Enter your Github username">
              </b-form-input>
               <b-form-input type="password"
                  placeholder="Password">
              </b-form-input>
            <router-link to="/home">Login</router-link>
          </b-card>
    </div>
</template>
<script>


export default {
  name: 'Login',
  data () {
    return {
    }
  },
  methods: {
    goHome(){
       this.$router.push({name:'Home'})
    }
  }
}
</script>