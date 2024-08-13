import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import liveChatSlice from "./liveChatSlice";

const appStore = configureStore({
  reducer: {
    app: appSlice,
    liveChat: liveChatSlice,
  },
});
export default appStore;
