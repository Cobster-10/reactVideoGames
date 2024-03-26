import {
  Button,
  HStack,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../Hooks/useGenres";
import getCroppedImageURL from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (isLoading) return <Spinner></Spinner>;
  if (error) return null;
  return (
    <>
    <Heading fontSize={"2xl"} marginBottom={5}>Genres</Heading>
    <List>
      {data.map((genre) => (
        <ListItem padding={"5px"} key={genre.id}>
          <HStack>
            {" "}
            <Image
              objectFit="cover"
              boxSize={"32px"}
              borderRadius={10}
              src={getCroppedImageURL(genre.image_background)}
            />
            <Button
              whiteSpace="normal"
              textAlign="left"
              fontWeight={selectedGenre === genre ? "bold" : "normal"}
              variant="link"
              fontSize={"lg"}
              onClick={() => onSelectGenre(genre)}
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
