import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import CardContainer from "./CardContainer";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

export const GameGrid = () => {
  const { data, error, isLoading } = useGames();
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
            <CardContainer>
              <GameCardSkeleton key={skeleton} />
            </CardContainer>
          ))}
        {data.map((game) => (
          <CardContainer>
            <GameCard key={game.id} game={game} />
          </CardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
