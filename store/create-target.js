import Vue from 'vue';

const getDataFromLocalStorage = (itemName, defaultValue) => {
  const temp = localStorage.getItem(itemName);
  if(temp) {
    try {
      return JSON.parse(temp);
    } catch (e) {
      return defaultValue;
    }
  } else {
    return defaultValue;
  }
};

export const state = () => ({
  storeActiveTab: localStorage.getItem('storeActiveTab') || 'info-basic',
  storeTabTcpUdp: localStorage.getItem('storeTabTcpUdp') || 'tcp',
  formInfoBasic: getDataFromLocalStorage('formInfoBasic'),
  formScheduler: getDataFromLocalStorage('formScheduler'),
  formEmailEvents: getDataFromLocalStorage('formEmailEvents'),
  formAdvancedSetting: getDataFromLocalStorage('formAdvancedSetting')
});

export const getters = {
  storeActiveTab(state) {
    return state.storeActiveTab
  },
  storeTabTcpUdp(state) {
    return state.storeTabTcpUdp
  },
  formInfoBasic(state) {
    return state.formInfoBasic
  },
  formScheduler(state) {
    return state.formScheduler
  },
  formEmailEvents(state) {
    return state.formEmailEvents
  },
  formAdvancedSetting(state) {
    return state.formAdvancedSetting
  }
};

export const mutations = {
  CHANGE_ACTIVE_TAB(state, data) {
    state.storeActiveTab = data;
    if(data){
      localStorage.setItem("storeActiveTab", data);
    } else {
      localStorage.removeItem("storeActiveTab");
    }
  },

  CHANGE_TAB_TCP_UDP(state, data) {
    state.storeTabTcpUdp = data;
    if(data){
      localStorage.setItem("storeTabTcpUdp", data);
    } else {
      localStorage.removeItem("storeTabTcpUdp");
    }
  },

  CHANGE_FORM_INFO_BASIC(state, data) {
    state.formInfoBasic = data;
    if(data){
      localStorage.setItem("formInfoBasic", JSON.stringify(data));
    } else {
      localStorage.removeItem("formInfoBasic");
    }
  },

  CHANGE_FORM_SCHEDULE(state, data) {
    state.formScheduler = data;
    if(data) {
      localStorage.setItem("formScheduler", JSON.stringify(data));
    } else {
      localStorage.removeItem("formScheduler");
    }
  },

  CHANGE_FORM_EMAIL_NOTIFICATION(state, data) {
    // Use when you want to init data.
    // Dont use it for modify|replace an array
    // Reference: https://gist.github.com/DawidMyslak/2b046cca5959427e8fb5c1da45ef7748
    state.formEmailEvents = data;
    if(data) {
      // Vuex may have bug when state.formEmailEvents = data with data is an array.
      localStorage.setItem("formEmailEvents", JSON.stringify(data));
    } else {
      localStorage.removeItem("formEmailEvents");
    }
  },

  PATCH_FORM_EMAIL_NOTIFICATION(state, { index, emails }) {
    Vue.set(state.formEmailEvents[index], 'emails', emails);
    localStorage.setItem("formEmailEvents", JSON.stringify(state.formEmailEvents));
  },

  CHANGE_FORM_ADVANCED_SETTING(state, data) {
    state.formAdvancedSetting = data;
    if(data) {
      localStorage.setItem("formAdvancedSetting", JSON.stringify(data));
    } else {
      localStorage.removeItem("formAdvancedSetting");
    }
  }
};
