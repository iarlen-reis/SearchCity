import React, { useState, createContext } from "react";

interface ISearchProvider {
  children: React.ReactNode;
}

interface ISearchContext {
  state: string;
  city: string;
  setState: (state: string) => void;
  setCity: (city: string) => void;
}

const initialContext = {
  state: "",
  city: "",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setState: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCity: () => {},
};

export const SearchContext = createContext<ISearchContext>(initialContext);

export const SearchProvider = ({ children }: ISearchProvider) => {
  const [city, setCity] = useState(initialContext.city);
  const [state, setState] = useState(initialContext.state);

  return (
    <SearchContext.Provider value={{ city, setCity, state, setState }}>
      {children}
    </SearchContext.Provider>
  );
};
