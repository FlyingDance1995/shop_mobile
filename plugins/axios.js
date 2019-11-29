import iview from "iview"

export default function ({ $axios, store, redirect, app }) {
  $axios.onRequest(config => {
    console.log(`REQUEST: ${config.baseURL}${config.url}`)
  });

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);
    if (code === 401) {
      redirect('/login')
    }
    if (code === 404) {
      redirect('/errors/404')
    }
    if (code === "ETIMEDOUT") {
      redirect('/errors/timeout')
    }
    if (code === 504) {
      store.commit('SET_ERROR', {
        code: 504,
        message: error.response.data
      })
    }
    if (isNaN(code)) {
      store.commit('SET_IS_ONLINE', false);
      iview.Message.destroy();
      // iview.Message.error({
      //   render: h => {
      //     return h('div', {
      //         class: 'flex-row center middle',
      //         style: {
      //           height: '24px'
      //         }
      //       },
      //       [
      //         h('span', 'Mất kết nối. Vui lòng thử lại'),
      //         h('Icon', {
      //           props: {
      //             type: 'md-refresh',
      //             size: 16
      //           },
      //           class: 'ml-sm',
      //           style: {
      //             cursor: 'pointer',
      //             paddingTop: '1px'
      //           },
      //           on: {
      //             click: () => {
      //               location.reload();
      //             }
      //           },
      //         })
      //       ])
      //   },
      //   duration: 0,
      // })
    }
  });
}
