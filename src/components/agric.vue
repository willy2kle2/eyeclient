<template>
  <div >
   <b-row >
    
        <b-col md="12"> 
		<div v-show="step === 1">
		<div class="card border-secondary mb-3" >
  <div class="card-header font-weight-bold">Agribusiness Interest</div>
  <div class="card-body text-secondary">
    
    <p class="card-text text-justify ">
	
	
	<b-form @submit="onSubmit" @reset="onReset" v-if="show">
	
      
	   <div class="form-row">
	  <b-col md="6">
       </b-form-group>
      <b-form-group id="exampleInputGroup3"
                    label="Which Agricultural Consortium do you want to venture into? "
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
                    label="Which specific value chain do you want to venture into?"
                    label-for="exampleInput3"
					class="font-weight-bold">
        <b-form-select id="exampleInput3"
                      :options="options"
                      required
                      v-model="form.food">
        </b-form-select>
      </b-form-group>
	   </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Others  :"
                    label-for="exampleInput2"
					class="font-weight-bold">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.name"
                      required
                     >
        </b-form-input>
     
      </b-form-group>
	  </b-col>
	  </div>
	  <div class="form-row">
	  <b-col md="6">
       </b-form-group>
      <b-form-group id="exampleInputGroup3"
                    label="Do you have any past experience in the Value Chain selected above?"
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
                    label="What brought your interest into this value chain? *" 
                    label-for="exampleInput3"
					class="font-weight-bold">
					
        <b-form-select id="exampleInput3"
                      :options="options"
                      required
                      v-model="form.food">
        </b-form-select>
      </b-form-group>
	  </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Others  :"
                    label-for="exampleInput2"
					class="font-weight-bold">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.name"
                      required
                     >
        </b-form-input>
     
      </b-form-group>
	  </b-col>
	  </div>
	  
	  
	 
	  
	   
      <button @click.prevent="next()" type="button" class="btn btn-info btn-sm">Next</button>
	  <button @click.prevent="next()" type="button" class="btn btn-info btn-sm">Previous</button>
      
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
        { value: 'very weak', text: 'very weak' },
        { value: 'weak', text: 'Weak' },
		 { value: 'fair', text: 'Fair' },
		  { value: 'strong', text: 'Strong' },
		   { value: 'very strong', text: ' Very Strong' }
        
      ],
	  options2: [
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