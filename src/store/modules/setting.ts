import { SETTING_TYPES } from '../types';

interface SettingState {
  showBottomNav: boolean;
}

const state: SettingState = {
  showBottomNav: true,
};

const mutations = {
  [SETTING_TYPES.SET_NAV_VISIBLE](state: SettingState, visible: boolean) {
    state.showBottomNav = visible;
  },
};

export default {
  state,
  mutations,
};
