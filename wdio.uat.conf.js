import { config as wdioConf } from "./wdio.conf.js";
import merge from "deepmerge";

export const config = merge(wdioConf, {
  baseUrl: "https://rahulshettyacademy.com",
  waitForTimeout: 5000,
});
