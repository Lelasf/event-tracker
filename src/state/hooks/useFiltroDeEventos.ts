import { useSetRecoilState } from "recoil";
import { IFiltroDeEventos } from "../../interfaces/IFiltroDeEventos";
import { filtroDeEventos } from "../atom";

const useFiltroDeEventos = () => {
  return useSetRecoilState<IFiltroDeEventos>(filtroDeEventos);
};

export default useFiltroDeEventos;
