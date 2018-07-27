<template>
  <div >
  <b-row><b-col> <b-progress :value="counter" :max="max" show-progress animated></b-progress></b-col></b-row> 
   <b-row >
   <b-col cols="3">
  <h4> Registration Status </h4>
 <b-list-group>
  <b-list-group-item class="d-flex justify-content-between align-items-center">
    Cras justo odio
    <b-badge variant="primary" pill>14</b-badge>
  </b-list-group-item>
  <b-list-group-item class="d-flex justify-content-between align-items-center">
    Dapibus ac facilisis in
    <b-badge variant="primary" pill>2</b-badge>
  </b-list-group-item>
  <b-list-group-item class="d-flex justify-content-between align-items-center">
    Morbi leo risus
    <b-badge variant="primary" pill>1</b-badge>
  </b-list-group-item>
   <b-list-group-item class="d-flex justify-content-between align-items-center">
    Morbi leo risus
    <b-badge variant="primary" pill>1</b-badge>
  </b-list-group-item>
   <b-list-group-item class="d-flex justify-content-between align-items-center">
    Morbi leo risus
    <b-badge variant="primary" pill>1</b-badge>
  </b-list-group-item>
   <b-list-group-item class="d-flex justify-content-between align-items-center">
    Morbi leo risus
    <b-badge variant="primary" pill>1</b-badge>
  </b-list-group-item>
</b-list-group>
		</b-col>
        <b-col cols="6" >
		
		
 <b-media>
    
	
    <h5 class="mt-0">Welcome </h5>
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
		<b-col cols="3" >
		<h4> News/Announcement </h4>
		</b-col>
        
    </b-row>
  </div>
</template>

<script>

export default {
  data () {
    return {
      counter: 50,
      max: 100
    }
  },
  methods: {
    clicked () {
      this.counter = Math.random() * this.max
      console.log('Change progress to ' +
        Math.round(this.counter * 100) / 100)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
