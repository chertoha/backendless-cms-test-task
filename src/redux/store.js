import { configureStore } from "@reduxjs/toolkit";
import { tabsApi } from "./tabs/tabsApi";

export const store = configureStore({
  reducer: {
    [tabsApi.reducerPath]: tabsApi.reducer,
  },

  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    tabsApi.middleware,
  ],
});
