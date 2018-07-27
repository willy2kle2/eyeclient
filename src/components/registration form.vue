<template>
  <div >
   <b-row >
    <b-col  >
		
		
  <b-media>
    
	
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
        <b-col md="8"> 
		<div v-show="step === 1">
		<div class="card border-secondary mb-3" >
  <div class="card-header font-weight-bold">Bio Data</div>
  <div class="card-body text-secondary">
    
    <p class="card-text text-justify "> 
	
	<b-form @submit="onSubmit" @reset="onReset" v-if="show">
	<div class="form-row">
	  <b-col md="6">
     
      </b-form-group>
      <b-form-group id="exampleInputGroup3"
                    label="Select the type of participation:"
                    label-for="exampleInput3"
					class="font-weight-bold">
        <b-form-select id="exampleInput3"
                      :options="options"
                      required
                      v-model="form.food">
        </b-form-select>
      </b-form-group>
	  </b-col>
	  </div>
      <div class="form-row">
	  <b-col md="6">
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="First Name :"
                    label-for="exampleInput2"
					class="font-weight-bold">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Enter First Name ">
        </b-form-input>
     
      </b-form-group>
	  </b-col>
	  <b-col md="6">
      <b-form-group id="exampleInputGroup2"
                    label="Middle Name:"
                    label-for="exampleInput2"
					class="font-weight-bold">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Enter Middle Name">
        </b-form-input>
     
      </b-form-group>
	  </b-col>
	  </div>
	   <div class="form-row">
	  <b-col md="6">
       </b-form-group>
      <b-form-group id="exampleInputGroup3"
                    label="Sex:"
                    label-for="exampleInput3"
					class="font-weight-bold">
        <b-form-select id="exampleInput3"
                      :options="options"
                      required
                      v-model="form.food">
        </b-form-select>
      </b-form-group>
	  </b-col>
	   <b-col md="6">
       </b-form-group>
      <b-form-group id="exampleInputGroup3"
                    label="Date of Birth:"
                    label-for="exampleInput3"
					class="font-weight-bold">
        <b-form-select id="exampleInput3"
                      :options="options"
                      required
                      v-model="form.food">
        </b-form-select>
      </b-form-group>
	  </b-col>
	  </div>
	  <div class="form-row">
	  <b-col md="6">
       </b-form-group>
      <b-form-group id="exampleInputGroup3"
                    label="Nationality:"
                    label-for="exampleInput3"
					class="font-weight-bold">
        <b-form-select id="exampleInput3"
                      :options="options"
                      required
                      v-model="form.food">
        </b-form-select>
      </b-form-group>
	  </b-col>
	   <b-col md="6">
       </b-form-group>
      <b-form-group id="exampleInputGroup3"
                    label="State of origin:"
                    label-for="exampleInput3"
					class="font-weight-bold">
        <b-form-select id="exampleInput3"
                      :options="options"
                      required
                      v-model="form.food">
        </b-form-select>
      </b-form-group>
	  </b-col>
	  </div>
      <button @click.prevent="next()" type="button" class="btn btn-info btn-sm">Next</button>
      
    </b-form>
	<div>
   
</div>
	
	</p>
  </div>
  </div>
</div>

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
        email: '',
        name: '',
        food: null,
        checked: []
      },
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'Individual', text: 'Individual' },
        { value: 'Group', text: 'Group' }
        
      ],
      show: true,
	  step:1,
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
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
    }
 
	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>