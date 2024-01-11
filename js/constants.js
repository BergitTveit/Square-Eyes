// export const baseUrl = "https://www.square-eyes.no";
// export const endpoint = "/wp-json/wc/store/products";
// export const url = baseUrl + endpoint;

const apiURL = "https://www.square-eyes.no";
const wcURL = "/wp-json/wc/store/products";

export const url = new URL(wcURL, apiURL);
