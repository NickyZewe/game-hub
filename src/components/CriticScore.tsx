import { Badge } from "@chakra-ui/react";

interface ScoreProps {
  score: number;
}

const CriticScore = ({ score }: ScoreProps) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge fontSize="12px" borderRadius={2} paddingX={1.5} colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
