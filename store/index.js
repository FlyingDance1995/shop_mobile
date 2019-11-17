import utils from '@/utils';

export const state = () => ({
  locales: ['en', 'vi'],
  locale: localStorage.getItem('locale') || 'vi',
  root: JSON.parse(localStorage.getItem('root')) || 'ROOT',
  auth: JSON.parse(localStorage.getItem('auth') || '{}'),
  error: null,
  breadcrumbs: JSON.parse(localStorage.getItem('breadcrumbs') || '{}'),
  bookmarks: JSON.parse(localStorage.getItem('bookmarks') || '[]'),
  isReadyToUse: localStorage.getItem('isReadyToUse'),
  isOnline: localStorage.getItem('isOnline' || 'false'),
  viewMode: localStorage.getItem('viewMode') || 'grid', //list
});

export const getters = {
  auth(state) {
    return state.auth
  },
  root(state) {
    return state.root
  },
  locale(state) {
    return state.locale
  },
  breadcrumbs(state) {
    return state.breadcrumbs
  },
  bookmarks(state) {
    return state.bookmarks
  },
  isReadyToUse(state) {
    return state.isReadyToUse
  },
  isOnline(state) {
    return state.isOnline
  },
  viewMode(state) {
    return state.viewMode
  },
};

export const mutations = {
  ADD_BOOKMARK(state, payload) {
    state.bookmarks.push(payload);
    localStorage.setItem('bookmarks', JSON.stringify(payload));
  },

  SET_VIEW_MODE(state, payload) {
    state.viewMode = payload;
    localStorage.setItem('viewMode', payload);
  },

  SET_BOOKMARKS(state, payload) {
    state.bookmarks = payload;
    localStorage.setItem('bookmarks', JSON.stringify(payload));
  },

  SET_ERROR(state, payload) {
    state.error = payload;
  },

  SET_AUTH_TO_COOKIE(state, payload) {
    state.auth = payload;
    const cookies = utils.getCookies();

    // Set token
    if (payload.token) {
      cookies.set('token', payload.token.toString(), {
        path: '/',
        expires: new Date(payload.expiry)
      });
    }

    // Set user
    if (payload.user) {
      cookies.set('user', JSON.stringify(payload.user), {
        path: '/',
        expires: new Date(payload.expiry)
      });
    }
  },

  SET_AUTH(state, payload) {
    state.auth = payload;
    localStorage.setItem('auth', JSON.stringify(payload))
  },

  SET_LOCALE(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale;
      localStorage.setItem('locale', locale);
    }
  },

  SET_ROOT(state, root) {
      state.root = root;
      localStorage.setItem('root',  JSON.stringify(root));
  },

  SET_BREADCRUMBS(state, payload) {
      state.breadcrumbs = payload;
      localStorage.setItem('breadcrumbs', JSON.stringify(payload))
  },

  SET_IS_READY_TO_USE(state, payload) {
    state.isReadyToUse = payload;
    localStorage.setItem('isReadyToUse', payload)
  },

  SET_IS_ONLINE(state, payload) {
    state.isOnline = payload;
    localStorage.setItem('isOnline', payload)
  }
};

