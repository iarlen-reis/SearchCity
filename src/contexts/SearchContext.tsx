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

interface ICityResult {
  id: number;
  nome: string;
  microrregiao: {
    mesorregiao: {
      id: number,
      nome: string,
      UF: {
        sigla: string,
        regiao: {
          id: number,
          nome: string,
        },
      },
    },
  };
}

const CityResultMock = {
  id: 0,
  nome: "",
  microrregiao: {
    mesorregiao: {
      id: 0,
      nome: "",
      UF: {
        sigla: "",
        regiao: {
          id: 0,
          nome: "",
        },
      },
    },
  },
};

interface ISearchContext {
  state: string;
  city: string;
  setState: (state: string) => void;
  setCity: (city: string) => void;
  fetchStates: () => void;
  states: IStates[];
  fetchCitys: (search: string) => void;
  citys: ICitys[];
  fetchCity: (search: string) => void;
  cityResult: ICityResult;
  loading: boolean;
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
  // eslint-disable-next-line @typescript-eslint/no-empty-function
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
