<template>
  <div >
  </div>
</template>

<script>
export default {

  data() {
      return {
        email:null,
        password:null
      }
    },

    created(){
      Bus.$emit('logout');
      this.$store.dispatch('logout').then(()=>{
        this.$router.push('/login')
      })
    }

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
