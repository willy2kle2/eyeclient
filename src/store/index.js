import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    contacts: [],
    token: localStorage.getItem('token') || '',
	 token: localStorage.getItem('user') || '',
    status: '',
	error: false
	
	
   
  },

  mutations:{
      setContacts(state,contacts){
          state.contacts=contacts;

      },
      authSuccess(state,token){
          state.token=token;
          state.status='success';
		  
		  
         
         
      },
      
      authError(state){
          state.token='';
          state.status='error';
		  state.error  = true;
		 
		  
      },
      authLogout(state){
        state.token=''
      }
  },

  actions: {
      fetchContacts(context){
        axios.get('/contact')
          .then(response=>{
            context.commit('setContacts',response.data.data)
            // this.contacts=response.data.data;
          })

      },
      login(context, payload) {

        return new Promise((resolve,reject)=>{

          axios.post('/login', payload)
            .then((response) => {
              let accessToken = response.data.auth.access_token;
			  let userdata = response.data.user.email;
              context.commit('authSuccess', accessToken)
              localStorage.setItem('token', accessToken);
			  localStorage.setItem('user', userdata);
              axios.defaults.headers.common['Authorization'] = "Bearer " + accessToken;

              resolve(response);

            })
            .catch((error) => {
              localStorage.removeItem('token');
              context.commit('authError')
              console.log(error);
              reject(error);
            })

        })
         
      },

      logout(context){
        return new Promise((resolve,reject)=>{
            context.commit('authLogout')
            localStorage.removeItem('user');
			           localStorage.removeItem('token');
            delete axios.defaults.headers.common['Authorization'] ;

            resolve();


        })
      }

  },


  getters: {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status,
	errors_display: state => state.error,
    menus:(state,getters)=>{
      if(getters.isAuthenticated){
        return [{
          name: "Logout", route: "Logout"
        }]
      }
      return [
        { name: "Signup", route: "Signup" },
        { name: "Login", route: "Login" },
      ];
    }
  }




})
