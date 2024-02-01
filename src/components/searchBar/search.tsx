// Importez les éléments nécessaires
import React, { useState, ChangeEvent, MouseEvent } from 'react';
import { Input, Flex, InputGroup, InputLeftElement, Button } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <Flex>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <FaSearch />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Rechercher une ville"
          value={searchQuery}
          onChange={handleChange}
        />
      </InputGroup>
      <Button onClick={handleSubmit}>Rechercher</Button>
    </Flex>
  );
};

export default SearchBar;
