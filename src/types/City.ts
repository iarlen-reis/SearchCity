export interface ICitys {
  id: number;
  nome: string;
}

export interface ICityResult {
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

export const CityResultMock = {
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
