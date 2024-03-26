import { Image, ImageProps } from "@chakra-ui/react";
import meh from "../assets/meh.webp";
import reccomended from "../assets/thumbs-up.webp";
import exceptional from "../assets/bulls-eye.webp";

interface Props{
    rating: number;
}
const Emoji = ({rating}:Props) => {

    if(rating < 3) return null;
    const emojiMap: {[key: number]: ImageProps} = {
        3: { src: meh, alt: "meh", boxSize: "25px"},
        4: {src: reccomended, alt: "reccomended", boxSize: "25px"},
        5: {src: exceptional, alt: "exceptional", boxSize: "35px"}
    }
    const selectedEmoji = emojiMap[rating];
  return (
    <Image {...selectedEmoji}></Image>
  )
}

export default Emoji