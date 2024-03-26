import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectOrder: (selectedOrder: string) => void;
  selectedOrder: string;
}

const SortSelector = ({ onSelectOrder, selectedOrder }: Props) => {
  const sortValues = [
    { value: "", label: "Relevance" },

    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const currentSelectedOrder = sortValues.find(
    (order) => selectedOrder === order.value
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {selectedOrder ? currentSelectedOrder?.label : "Relevance"}
      </MenuButton>
      <MenuList>
        {sortValues.map((sortVal) => (
          <MenuItem
            onClick={() => onSelectOrder(sortVal.value)}
            key={sortVal.value}
            value={sortVal.value}
          >
            {sortVal.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
