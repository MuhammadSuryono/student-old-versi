export default function ({ store, $auth, $axios, redirect }) {
  $auth.onRedirect((to, from) => {
    if (!$auth.loggedIn) {
      if (localStorage.getItem('localAuth') === 'false') {
        store.commit('user/SET_EXPIRED', true)
      }
    }
  })
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 401) {
      // store.commit('user/SET_LOGGEDIN', false)
      // redirect('/')
      // const self = setInterval(() => {
      //   console.log('after')
      localStorage.setItem('localAuth', true)
      this.$auth.logout()
      redirect('/login')
      //   clearInterval(self)
      // }, 5000)
    }
  })
}
