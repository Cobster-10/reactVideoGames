import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";
import { GameQuery } from "../App";

export interface platform{
    id: number;
    name: string;
    slug: string;

}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: platform}[];
    metacritic: number;
    rating_top: number;
  }


const useGames = (gameQuery: GameQuery) => useData<Game>("/games", {params:{genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id, ordering: gameQuery.selectedOrder, search: gameQuery.searchString}}, [gameQuery])


export default useGames;