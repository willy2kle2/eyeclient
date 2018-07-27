<template>
  <div >
   <b-row >
    
        <b-col md="12"> 
		<div v-show="step === 1">
		<div class="card border-secondary mb-3" >
  <div class="card-header font-weight-bold">Entrepreneurial Skills</div>
  <div class="card-body text-secondary">
    
    <p class="card-text text-justify ">
<h5>Instructions</h5>
As honestly as possible assess your self with a rating from 1 - 5. Where 1: very weak, 2: weak, 3: fair, 4: strong, 5: very strong.	
	
	<b-form @submit="onSubmit" @reset="onReset" v-if="show">
	
      
	   <div class="form-row">
	  <b-col md="6">
       </b-form-group>
      <b-form-group id="exampleInputGroup3"
                    label="1. Where others see problems, i see possibilities. :"
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
                    label="2. I am fairly curious and always in search of new discoveries.:"
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
                    label="3. For me it is possible to influence one's destiny. :"
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
                    label="4. I am a good team player.:" 
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
                    label="5. I am capable of seeing many solutions to a problem"
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
                    label="6. I prefer using the good old ways of doing things"
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
                    label="7. After a failure I am always ready to pick myself up and start over."
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
                    label="8. To be satisfied with myself i take up easier projects." 
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
                    label=9. I like to lead and not be led by others. "
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
                    label="10. When I take up a project I am convinced I can carry it out successfully."
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
                    label="11. I always try to take on calculated risks. "
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
                    label="12. Without money I cannot take up a whole lot" 
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
                    label="13. Being too ambitious is often perceived as negative. "
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
                    label="14. No matter what we do it does not depend on me but other variables beyond my control." 
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
                    label="15. I have a hard time anticipating an event or trend. "
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