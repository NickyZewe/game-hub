import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imageUrl";

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: Number;
}

const GenreList = ({ onSelectGenre, selectedGenreId }: GenreListProps) => {
  const { data, isLoading, error } = useGenres();

  return (
    <>
      <Heading marginBottom={5}>Genres</Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                objectFit={"cover"}
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign={"left"}
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                fontSize="lg"
                variant={"link"}
                onClick={() => {
                  onSelectGenre(genre);
                }}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
