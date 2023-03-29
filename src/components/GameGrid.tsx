import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
import CardContainer from "./CardContainer";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

interface GameGridProps {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

export const GameGrid = ({
  selectedGenre,
  selectedPlatform,
}: GameGridProps) => {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text className="danger">{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={3}
        alignContent="center"
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <CardContainer key={skeleton}>
              <GameCardSkeleton />
            </CardContainer>
          ))}
        {data.map((game) => (
          <CardContainer key={game.id}>
            <GameCard game={game} />
          </CardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
