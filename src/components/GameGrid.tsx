import { SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import useGames from "../Hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameContainer from "./GameContainer";
import { Genre } from "../Hooks/useGenres";
import { Platform } from "../Hooks/usePlatforms";
import { GameQuery } from "../App";

interface Props{
  gameQuery: GameQuery;
  
}

const GameGrid = ({gameQuery}: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6];

  if(error) return <Text>{error}</Text>
  return (
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameContainer key={skeleton}>
              <GameCardSkeleton ></GameCardSkeleton>
            </GameContainer>
          ))}

        {data.map((game) => (
          <GameContainer key={game.id}>
              <GameCard  game={game}></GameCard>
          </GameContainer>
        ))}
      </SimpleGrid>
  );
};

export default GameGrid;
