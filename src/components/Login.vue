<template>
  <div >
   <b-row >
   <b-col>
  <div >
 <div class="card border-secondary mb-3" style="max-width: 18rem;">
  <div class="card-header font-weight-bold">Login</div>
  <div class="card-body text-secondary">
  <p class="card-text text-justify ">
 <b-form @submit="onSubmit" @reset="onReset" >
 <b-alert variant="danger"
             dismissible
             :show="showDismissibleAlert"
             @dismissed="showDismissibleAlert=false">
     Error Not Logged In!
    </b-alert>
   </b-form-group>
   
      <b-form-group id="email"
                    label="Email:"
                    label-for="email"
					class="font-weight-bold">
        <b-form-input id="email"
                      type="text"
                      v-model="email"
                      required
                      placeholder="Enter email">
        </b-form-input>
    
      </b-form-group>
      <b-form-group id="password"
                    label="Password:"
                    label-for="password"
					class="font-weight-bold">
        <b-form-input id="password"
                      type="password"
                      v-model="password"
                      required
                      placeholder="Enter Password">
        </b-form-input>
     
      </b-form-group>
	
      <b-button type="submit" variant="primary" @click.prevent="logIn()">Login</b-button>
      
    </b-form>
	<div>
   <p>Not Signed Up? <span><button @click.prevent="next()" type="button" class="btn btn-info btn-sm">CLick Here</button></span></p>
</div>
	
	</p>
  </div>
  </div>
</div>

		
		
		</b-col>
        <b-col cols="8" >
		
		
  <b-media>
    
	<img src="../assets/abu.jpg" >
    <h5 class="mt-0">Application Instructions</h5>
	<h6 class="text-success"> ELIGIBILITY </h6>
    <p class="text-justify">
	To qualify for the competition, applicants MUST:
      <ol>
	  <li> Be full time students of Ahmadu Bello University Zaria</li>
	  <li>Be certified to be 100, 200, or 300 level students at the time of application </li>
	  </ol>
    </p>
	<h6 class="text-success"> PROCEDURES  </h6>
    <p class="text-justify">
     <ol>
	 
	<li> Signup by filling the form.  </li>
<li>A link will be sent to your email box, click on this link to fill the full form.</li>
<li> You can login with your username and password to complete the registration</li>
<li>Make sure all forms are completed and filled before the closing date.</li>
	 </ol>
    </p>
      
  </b-media>

		
		
		
		</b-col>
        
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
		
        email:'',
        password:'',
		
		
      }
	  
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.email = '';
      this.name = '';
     
      
    }, 
	
	
	 logIn(){
        this.$store.dispatch('login',{email:this.email,password:this.password}).then(()=>{
            this.$router.push('/');
        })
        
      }
 
	
  },
 
  computed: {
  showDismissibleAlert () {
    return this.$store.getters.errors_display
  }
}
 	
  }
  

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
