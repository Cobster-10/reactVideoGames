import { Heading } from '@chakra-ui/react'
import React from 'react'
import { GameQuery } from '../App'

interface Props{
    gameQuery: GameQuery;
}

const GameHeading = ({gameQuery}:Props) => {

    let heading = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`
    if(heading === `Games`) heading = "coby goat";
  return (
    <Heading fontSize={"5xl"} marginY={5} as={"h1"}>{heading}</Heading>
  )
}

export default GameHeading