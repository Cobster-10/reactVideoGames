import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./Hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./Hooks/usePlatforms";
import { Game } from "./Hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery{
  genre: Genre | null;
  platform: Platform | null;
  selectedOrder: string;
  searchString: string;
}

function App() {

  const [gamequery, setGamequery] = useState<GameQuery>({} as GameQuery)

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, 
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: "250px 1fr"
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(searchText)=>setGamequery({...gamequery, searchString:searchText})} />
      </GridItem>
      <Show above="lg">
        <GridItem paddingX={5} area="aside">
          <GenreList selectedGenre={gamequery.genre} onSelectGenre={(genre) => setGamequery({...gamequery, genre})}/>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2} >
          <GameHeading gameQuery={gamequery}></GameHeading>
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector selectedPlatform={gamequery.platform} onSelectPlatform={(platform) => setGamequery({...gamequery, platform})}></PlatformSelector>
            <SortSelector selectedOrder={gamequery.selectedOrder} onSelectOrder={(order) => setGamequery({...gamequery, selectedOrder: order} )}></SortSelector>
          </HStack>
        </Box>
        <GameGrid gameQuery={gamequery} />
      </GridItem>
    </Grid>
  );
}
export default App;