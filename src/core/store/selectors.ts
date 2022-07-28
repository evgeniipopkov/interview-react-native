import { RootState } from '.';

export default {
  user: {
    isRegistered: (state: RootState) => state.user.isRegistered,
  },

  app: {
    barStyle: (state: RootState) => state.app.barStyle,
    showModal: (state: RootState) => state.app.showModal,
  },
};
