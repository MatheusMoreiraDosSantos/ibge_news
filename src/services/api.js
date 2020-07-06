import axios from "axios";
const api = axios.create({
  baseURL: "http://servicodados.ibge.gov.br",
});
export default api;
