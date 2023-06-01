import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const limit = 300;

  if (!children) return null;

  const summary = expanded ? children : children.substring(0, limit) + "...";

  if (children.length <= limit) return <Text>{children}</Text>;

  return (
    <Text>
      {summary}
      <Button
        size="xs"
        colorScheme="yellow"
        fontWeight="bold"
        marginLeft={1}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
