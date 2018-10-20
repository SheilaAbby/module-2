<template>
    <div class="navbar">
     <b-navbar 
    md="auto"
    toggleable="md"
    type="dark"
    variant="dark" class="navbar">
   <b-navbar-brand :to="{name: 'Home'}">Git Manager</b-navbar-brand>
    
     <b-navbar-nav class="ml-auto">
        <b-navbar-nav>
      <b-nav-item :to="{ name: 'About' }">About</b-nav-item>
    </b-navbar-nav>&nbsp;

      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="find a repository"/>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>

       <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em>User</em>
        </template>
        <b-dropdown-item :to="{name: 'UserProfile'}">Profile</b-dropdown-item>
        <b-dropdown-item href="#">Signout</b-dropdown-item>
      </b-nav-item-dropdown>

       </b-navbar-nav>
  </b-navbar>
    </div>
</template>
<script>

export default {
  name: 'Navbar',
  data () {
    return {
    }
  }
}
</script>