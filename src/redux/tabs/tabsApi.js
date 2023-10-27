import { createApi } from "@reduxjs/toolkit/query/react";
import axios from "axios";

const axiosBaseQuery =
  () =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const tabsApi = createApi({
  reducerPath: "tabs",

  baseQuery: axiosBaseQuery({
    baseUrl: "",
  }),

  endpoints: (builder) => ({
    getTabs: builder.query({
      query: () => ({
        url: "http://localhost:3000/backendless-cms-test-task/.well-known/tabs.json",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetTabsQuery } = tabsApi;
