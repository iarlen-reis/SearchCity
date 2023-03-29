/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-empty-function */

import React, { useState, createContext } from "react";

import { dataAxios } from "../services/api";

import { ISearchContext } from "../types/SearchContext";
import { ICitys, CityResultMock } from "../types/City";
import { IStates } from "../types/State";

interface ISearchProvider {
  children: React.ReactNode;
}

const initialContext = {
  state: "",
  city: "",
  setState: () => {},
  setCity: () => {},
  fetchStates: () => {},
  states: [],
  fetchCitys: () => {},
  citys: [],
  fetchCity: () => {},
  cityResult: CityResultMock,
  loading: false,
  cityImage: "",
};

export const SearchContext = createContext<ISearchContext>(initialContext);

export const SearchProvider = ({ children }: ISearchProvider) => {
  const [city, setCity] = useState(initialContext.city);
  const [state, setState] = useState(initialContext.state);
  const [states, setStates] = useState<IStates[]>(initialContext.states);
  const [citys, setCitys] = useState<ICitys[]>(initialContext.citys);
  const [cityResult, setCityResult] = useState(initialContext.cityResult);
  const [cityImage, setCityImage] = useState(initialContext.cityImage);
  const [loading, setLoading] = useState(initialContext.loading);

  const fetchStates = async () => {
    try {
      const data = await (await dataAxios.get("/estados")).data;

      setStates(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCitys = async (search: string) => {
    try {
      const data = await (
        await dataAxios.get(`/estados/${search}/municipios`)
      ).data;

      setCitys(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCity = async (search: string) => {
    setLoading(true);
    try {
      const data = await (await dataAxios(`/municipios/${search}`)).data;

      const imageCity =
        await `https://servicodados.ibge.gov.br/api/v3/malhas/municipios/${search}`;

      setCityImage(imageCity);

      setCityResult(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        city,
        setCity,
        state,
        setState,
        fetchStates,
        states,
        fetchCitys,
        citys,
        cityResult,
        fetchCity,
        cityImage,
        loading,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
