export default function ({store, $clientApi, $axios, redirect}) {
  if(!store.state.isReadyToUse) {
    $clientApi.startup.queryStarted($axios)
      .then(response => {
        if (response.data.status === 'success') {
          store.commit('SET_IS_READY_TO_USE', true);
        } else {
          redirect('/getting-started');
        }
      }).catch(error => {
      redirect('/getting-started');
    });
  }
}
