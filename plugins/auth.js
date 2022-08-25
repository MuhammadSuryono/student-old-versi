export default function ({ store, $auth, $axios, redirect }) {
  $auth.onRedirect((to, from) => {
    if ($auth.toString().slice(0, 23) === 'ExpiredAuthSessionError') {
      store.commit('user/SET_LOGGEDIN', false)
      redirect('/')
    }
    if (!$auth.loggedIn) {
      if (localStorage.getItem('localAuth') === 'false') {
        store.commit('user/SET_EXPIRED', true)
      }
    }
  })
  $axios.onResponseError((err) => {
    if (err.toString().slice(0, 23) === 'ExpiredAuthSessionError') {
      store.commit('user/SET_LOGGEDIN', false)
      redirect('/')
    }
  })
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 401) {
      console.log('code :', code)
      store.commit('user/SET_LOGGEDIN', false)
      redirect('/')
    }
  })
}
