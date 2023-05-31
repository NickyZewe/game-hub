import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const GameCardContainer = ({ children }: ContainerProps) => {
  return (
    <Box
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
      }}
      borderRadius={10}
      overflow="hidden"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
