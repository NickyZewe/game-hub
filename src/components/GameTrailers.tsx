import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const results = useTrailers(gameId);

  console.log(results);

  if (results.isLoading) return null;
  if (results.error) throw results.error;

  const first = results.data?.results[0];

  return first ? (
    <video src={first?.data[480]} poster={first?.preview} controls />
  ) : null;
};

export default GameTrailer;
