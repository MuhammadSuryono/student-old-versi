export default function ({ store, $auth, $axios, redirect, route }) {
  $auth.onRedirect((to, from) => {
    if ($auth.toString().slice(0, 23) === 'ExpiredAuthSessionError') {
      redirect('/login')
      store.commit('user/SET_LOGGEDIN', false)
    }
    if (!$auth.loggedIn) {
      redirect('/login')
      if (localStorage.getItem('localAuth')) {
        store.commit('user/SET_LOGGEDIN', true)
      } else {
        store.commit('user/SET_LOGGEDIN', false)
      }
    }
  })
  $axios.onResponseError((err) => {
    if (err.toString().slice(0, 23) === 'ExpiredAuthSessionError') {
      redirect('/login')
      store.commit('user/SET_LOGGEDIN', false)
    }
  })
  if (route.path !== '/login') {
    $axios.onError((error) => {
      const code = parseInt(error.response && error.response.status)
      if (code === 401) {
        redirect('/login')
        store.commit('user/SET_LOGGEDIN', false)
      }
    })
  }
}
