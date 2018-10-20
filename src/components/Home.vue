<template>
    <div class="home">
      <b-container>
       <navbar></navbar><br>
         <b-row>
      <b-col>
    <user-profile></user-profile>
    </b-col>
    <b-col>
    <repos></repos>
    </b-col>
    </b-row>
      </b-container>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import UserProfile from '@/components/UserProfile'
import Repos from '@/components/Repos'

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    Navbar,
    'user-profile':UserProfile,
    Repos
  }

}
</script>