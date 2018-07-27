<template>
  <div id="app" class="mt-1">
  <b-container >
  <b-navbar toggleable="md" type="dark" variant="info" class="mb-3 mt-0 pt-1">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#"><img src="./assets/eye.png"></b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item href="#">Link</b-nav-item>
      <b-nav-item href="#" disabled>Disabled</b-nav-item>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
    <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">ES</b-dropdown-item>
        <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em>User</em>
        </template>
        <b-dropdown-item href="#">Profile</b-dropdown-item>
        <b-dropdown-item href="#">Signout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>

<!-- navbar-1.vue -->
<router-view/>
<footer class="mainfooter" role="contentinfo">
 <div class="footer-middle col-md-auto d-none d-md-block pr-0">
  <div class="container">
    <div class="row">
      <div class="col-md-3 col-sm-6">
        <!--Column1-->
        <div class="footer-pad">
          <h4>Address</h4>
          <address>
          </address>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        <!--Column1-->
        <div class="footer-pad">
          <h4>Popular Services</h4>
          <ul class="list-unstyled">
          <li><a href="#"></a></li>
           <li><a href="#">News and Updates</a></li>
           <li><a href="#">FAQs</a></li>
         </ul>
      </div>
     </div>
      <div class="col-md-3 col-sm-6">
        <!--Column1-->
        <div class="footer-pad">
          <h4>Website Information</h4>
          <ul class="list-unstyled">
            
            
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">FAQs</a></li>
            
          </ul>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        <!--Column1-->
        <div class="footer-pad">
          <h4>Online Store</h4>
          <ul class="list-unstyled">
            
            <li>
              <a href="#"></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  </div>
  <div class="footer-bottom">
    <div class="container"> 
      <div class="row">
        <div class="col-xs-6">
          <!--Footer Bottom-->
          <p class="text-center">&copy; Copyright 2010-2018 - Trident Technologies.  All rights reserved.</p>
        </div>
        <div class="col-xs-6 pl-5">
          <!--Footer Bottom-->
          <p class="text-center pl-3">
 

 <a href="#"><i class="fab fa-facebook fa-2x"></i></a>
  <a href="#"><i class="fab fa-twitter fa-2x"></i></a>
  <a href="#"><i class="fab fa-linkedin fa-2x"></i></a>
  <a href="#"><i class="fab fa-google-plus fa-2x"></i></a>
  <a href="#"><i class="fab fa-skype fa-2x"></i></a>
</p>
        </div>
      </div>
    </div>
  </div>
</footer>
	</b-container>
  </div>
  
</template>

<script>

import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      title:"PhoneBook",
      
    }
  },
  name: 'App',
  computed:mapGetters(['isAuthenticated','menus']),

  created(){

    axios.interceptors.response.use(undefined, function (err) {
    return new Promise(function (resolve, reject) {
      if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
        this.$store.dispatch('logout').then(()=>{
          this.$router.push('/login')
        })
      }
      throw err;
    });
  });

  }
  
 
}
</script>

<style>
footer {
  color: white; }

footer a {
  color: #bfffff; }

footer a:hover {
  color: white; }

.footer-bottom {
  background: #3d6277;
  padding: 1em; }

.footer-top {
  background: #2d4958; }

.footer-middle {
  background: #3d6277;
  padding-top: 1em;
  color: white; }

</style>
