// Constants.js
const prod = {
 url: {
  API_URL: 'https://evanmoses.com/realtimepre/backend'
}
};
const dev = {
 url: {
  API_URL: 'http://localhost:9000'
 }
};
export const config = process.env.NODE_ENV === 'development' ? dev : prod;
