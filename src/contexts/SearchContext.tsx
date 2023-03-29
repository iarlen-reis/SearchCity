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
};

export const SearchContext = createContext<ISearchContext>(initialContext);

export const SearchProvider = ({ children }: ISearchProvider) => {
  const [city, setCity] = useState(initialContext.city);
  const [state, setState] = useState(initialContext.state);
  const [states, setStates] = useState<IStates[]>(initialContext.states);
  const [citys, setCitys] = useState<ICitys[]>(initialContext.citys);
  const [cityResult, setCityResult] = useState(initialContext.cityResult);
  const [loading, setLoading] = useState(initialContext.loading);

  const fetchStates = async () => {
    try {
      const data = await dataAxios.get("/estados");

      const responseData = await data.data;

      setStates(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCitys = async (search: string) => {
    try {
      const data = await dataAxios.get(`/estados/${search}/municipios`);

      const responseData = await data.data;

      setCitys(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCity = async (search: string) => {
    setLoading(true);
    try {
      const data = await dataAxios(`/municipios/${search}`);

      const responseData = await data.data;

      setCityResult(responseData);
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
        loading,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
