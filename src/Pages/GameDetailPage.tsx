import { Box, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  return (
    <>
      <Heading as="h1" fontSize="2xl">
        {game?.name}
      </Heading>
      <Box>{game?.description_raw}</Box>
    </>
  );
};

export default GameDetailPage;
