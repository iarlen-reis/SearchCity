import React, { useState, createContext } from "react";

import { dataAxios } from "../services/api";

interface ISearchProvider {
  children: React.ReactNode;
}

interface IStates {
  id: number;
  nome: string;
}

interface ICitys {
  id: number;
  nome: string;
}

interface ISearchContext {
  state: string;
  city: string;
  setState: (state: string) => void;
  setCity: (city: string) => void;
  fetchStates: () => void;
  states: IStates[];
  fetchCitys: (search: string) => void;
  citys: ICitys[];
}

const initialContext = {
  state: "",
  city: "",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setState: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCity: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  fetchStates: () => {},
  states: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  fetchCitys: () => {},
  citys: [],
};

export const SearchContext = createContext<ISearchContext>(initialContext);

export const SearchProvider = ({ children }: ISearchProvider) => {
  const [city, setCity] = useState(initialContext.city);
  const [state, setState] = useState(initialContext.state);
  const [states, setStates] = useState<IStates[]>(initialContext.states);
  const [citys, setCitys] = useState<ICitys[]>(initialContext.citys);

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
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
