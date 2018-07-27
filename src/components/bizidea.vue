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
  <div class="card-header font-weight-bold">Your Idea/Business</div>
  <div class="card-body text-secondary">
    
    <p class="card-text text-justify "> 
	
	<b-form @submit="onSubmit" @reset="onReset" v-if="show">
	<div class="form-row">
	  
	 
	  <b-col md="12">
     
      </b-form-group>
      <b-form-group id="exampleInputGroup3"
                    label="A Brief on your Business Idea: (no more than 100 words) "
                    label-for="exampleInput3"
					class="font-weight-bold">
        <b-form-textarea id="textarea1"
                     v-model="text"
                     placeholder="Enter something"
                     :rows="3"
                     :max-rows="6">
    </b-form-textarea>
      </b-form-group>
	  </b-col>
	  </div>
	<div class="form-row">
	  
	   <b-col md="12">
      <b-form-group id="exampleInputGroup2"
                    label="What problem is your idea intending to solve? (Describe in a single sentence) "
                    label-for="exampleInput2"
					class="font-weight-bold">
        <b-form-textarea id="textarea1"
                     v-model="text"
                     placeholder="Enter something"
                     :rows="3"
                     :max-rows="6">
    </b-form-textarea>
     
      </b-form-group>
	  </b-col>
	  </div>
     <div class="form-row">
	  
	   <b-col md="12">
      <b-form-group id="exampleInputGroup2"
                    label="How does your product or service solve the problem described? (No more than 30 words)"
                    label-for="exampleInput2"
					class="font-weight-bold">
        <b-form-textarea id="textarea1"
                     v-model="text"
                     placeholder="Enter something"
                     :rows="3"
                     :max-rows="6">
    </b-form-textarea>
     
      </b-form-group>
	   <b-form-group label="Apart from finance, select two (2) basic problems listed below, that you think will be the greatest obstacles to the
	   actualization of your business idea. ">
     <b-form-checkbox-group stacked v-model="selected" name="flavour2" :options="rskills">
      </b-form-checkbox-group>
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
     
	   rskills: [
        
        { value: 'Lack of Access to Resources', text: 'Lack of Access to Resources' },
		 { value: 'Lack of Expertise', text: 'Lack of Expertise' },
		  { value: 'Lack of Industry Knowledge', text: 'Lack of Industry Knowledge' },
		  { value: 'Lack of Moral Support', text: 'Lack of Moral Support' },
        { value: 'Lack of Man Power', text: 'Lack of Man Power' }
        
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