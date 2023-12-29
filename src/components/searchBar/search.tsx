import React, { useState, ChangeEvent, MouseEvent } from 'react';
import { Input, Button, Flex } from '@chakra-ui/react';

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
      <Input
        type="text"
        placeholder="Rechercher une ville"
        value={searchQuery}
        onChange={handleChange}
      />
      <Button onClick={handleSubmit}>Rechercher</Button>
    </Flex>
  );
};

export default SearchBar;
