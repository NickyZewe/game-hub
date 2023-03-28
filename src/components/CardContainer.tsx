import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const CardContainer = ({ children }: ContainerProps) => {
  return (
    <Box borderRadius={10} overflow="hidden" width="300px" margin={10}>
      {children}
    </Box>
  );
};

export default CardContainer;
