export default function ({ store, $auth }) {
  $auth.onRedirect((to, from) => {
    if (!$auth.loggedIn) {
      if (localStorage.getItem('localAuth') === 'false') {
        store.commit('user/SET_EXPIRED', true)
      }
    }
  })
}
