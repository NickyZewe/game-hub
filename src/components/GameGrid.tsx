import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGames, { Platform } from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
import CardContainer from "./CardContainer";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

interface GameGridProps {
  gameQuery: GameQuery;
}

export const GameGrid = ({ gameQuery }: GameGridProps) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text className="danger">{error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
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
  );
};

export default GameGrid;
