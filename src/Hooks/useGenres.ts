
import useData from "./useData";
import genreobj from "../data/games"

export interface Genre{
    id: number;
    name: string;
    image_background: string;
}


const useGenres = () =>{ return {data:genreobj, isLoading: false, error: null}  }
export default useGenres;