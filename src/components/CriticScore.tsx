import { Badge } from '@chakra-ui/react'
import React from 'react'

interface Props{
    score: number
}

const CriticScore = ({score}: Props) => {
    let color = score > 95 ? "green" : score > 90 ? "yellow" : "red"
  return (
    <Badge fontSize="14px" padding={"5px"} borderRadius={"4px"} colorScheme={color}>{score}</Badge>
  )
}

export default CriticScore