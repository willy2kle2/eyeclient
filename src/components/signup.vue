<template>
  <div >
   <b-row >
    
        <b-col> 
		<div v-show="step === 1">
		<div class="card border-secondary mb-3" style="max-width: 18rem;">
  <div class="card-header font-weight-bold">Login</div>
  <div class="card-body text-secondary">
    
    <p class="card-text text-justify "> 
	
	<b-form @submit="onSubmit" @reset="onReset" v-if="show">
      
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Username:"
                    label-for="username"
					class="font-weight-bold">
        <b-form-input id="username"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Enter Username">
        </b-form-input>
     
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Password:"
                    label-for="password"
					class="font-weight-bold">
        <b-form-input id="password"
                      type="password"
                      v-model="form.name"
                      required
                      placeholder="Enter Password">
        </b-form-input>
     
      </b-form-group>
      <b-button type="submit" variant="primary" @click.prevent="loginuser()">Login</b-button>
      
    </b-form>
	<div>
   <p>Not Signed Up? <span><button @click.prevent="next()" type="button" class="btn btn-info btn-sm">CLick Here</button></span></p>
</div>
	
	</p>
  </div>
  </div>
</div>
<div v-show="step === 2">
<div class="card border-secondary mb-3" style="max-width: 18rem;">
  <div class="card-header font-weight-bold">Signup</div>
  <div class="card-body text-secondary">
    <p class="card-text text-justify">
	
	<b-form @submit="onSubmit" @reset="onReset" v-if="show">
      
      </b-form-group>
	  <b-form-group id="phone"
                    label="Phone Number:"
                    label-for="phone"
                    description="We'll never share your phone with anyone else."
					class="font-weight-bold">
        <b-form-input id="phone"
                      type="text"
                      v-model="form.phone"
                      required
                      placeholder="Enter Phone No.">
        </b-form-input>
      </b-form-group><b-form-group id="email"
                    label="email:"
                    label-for="email"
                    class="font-weight-bold">
        <b-form-input id="email"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="Enter email">
        </b-form-input>
      </b-form-group>
      <b-form-group id="username1"
                    label="Username1:"
                    label-for="username"
					class="font-weight-bold">
        <b-form-input id="username"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Enter username">
        </b-form-input>
     
      </b-form-group>
      <b-form-group id="password1"
                    label="Password:"
                    label-for="password"
					class="font-weight-bold">
        <b-form-input id="password"
                      type="password"
                      v-model="form.password"
                      required
                      placeholder="Enter password">
        </b-form-input>
     
      </b-form-group>
      <b-button type="submit" variant="info" @click.prevent="registeruser()">Sign Up</b-button>
      
    </b-form>
	<div>
   <p>Already Signed Up? <span><button @click.prevent="prev()" type="button" class="btn btn-primary btn-sm">Login</button></span></p>
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
	<h6 class="text-success"> PROCEDURES</h6>
    <p class="text-justify">
     <ol>
	 
	<li> Signup by filling the form. </li>
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
  name: 'HelloWorld',
  data () {
    return {
     form: {
        email:'',
        name:'',
       phone:'',
	   password:''
       
      },
      
      show: true,
	  step:1,
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }, 
	
	prev() {
      this.step--;
    },
    next() {
      this.step++;
    },
	loginuser() {
       this.$store.dispatch('login',{email:this.email,password:this.password}).then(()=>{
            this.$router.push('/');
        })
    },
	registeruser() {
     axios.post('/register', {name:this.form.name, email:this.form.email, password:this.form.password})
			.then((response)=>{
			console.log(response);
			let accessToken=response.data.auth.access_token;
			localStorage.setItem('token', accessToken);
			localStorage.setItem('user', response.data.user.name);
			})
			.catch((error)=>{console.log(error)})
		
			
    }
 
	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
