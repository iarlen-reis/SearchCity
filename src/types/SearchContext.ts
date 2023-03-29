import { ICitys, ICityResult } from "./City";
import { IStates } from "./State";

export interface ISearchContext {
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
  cityImage: string;
}
