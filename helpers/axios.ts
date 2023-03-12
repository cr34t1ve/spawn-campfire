/** @format */

import axios from "axios";

export const ISSERVER = typeof window === "undefined";

const API_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

export const request = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json",
  },
});

// export const secureRequest = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
//   headers: {
//     "Content-type": "application/json",
//     Accept: "application/json",
//   },
// });
