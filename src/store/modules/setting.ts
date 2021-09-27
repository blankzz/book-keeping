interface SettingStore {
  showBottomNav: boolean;
}

const settingStoreState: SettingStore = {
  showBottomNav: true,
};

export default {
  namespaced: true,
  state: settingStoreState,
};
