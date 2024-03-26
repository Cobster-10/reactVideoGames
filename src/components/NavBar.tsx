import { HStack, Image, Text } from '@chakra-ui/react'
import logo from "../assets/logo.webp"
import { px } from 'framer-motion'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

interface Props{
  onSearch: (searchText: string)=>void;
}
const NavBar = ({onSearch}:Props) => {
  return (
    <HStack padding="10px">
        <Image src={logo} boxSize={50}></Image>
        <SearchInput onSearch={onSearch}></SearchInput>
        <ColorModeSwitch></ColorModeSwitch>
    </HStack>
    )
}

export default NavBar