import axios from "axios";

export const dataAxios = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v1/localidades",
});

export const MapaAxios = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v3/malhas/municipios/",
});
