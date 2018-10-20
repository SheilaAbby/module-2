<template>
    <div class="login">

      <b-container v-if="authenticated">
        <b-jumbotron header="Login" lead="Login with Github" >

              <b-form>
              <b-form-group>
                <b-form-input type="text" v-model="user.username" required placeholder="Enter Username">
                  </b-form-input>
            </b-form-group>
            <b-form-group>
                <b-form-input type="password" v-model="user.password" required placeholder="Enter Password">
                  </b-form-input>
            </b-form-group>
            <b-btn variant="primary" type="submit" name="button" @click="auth">Login</b-btn>
              </b-form>
    </b-jumbotron>
      </b-container>
    </div>
</template>
<script>

import gitmixins from '../mixins/gitmixins';
const octokit = require('@octokit/rest')()
export default {
  name: 'Login',
  data () {
    return {
      user: {},
      authenticated: true,
      octokit: octokit,
      repositories: []
    }
  },
  mixins: [gitmixins]
}
</script>