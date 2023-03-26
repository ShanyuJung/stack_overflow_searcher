import styled from "styled-components";

const SearchingContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 1rem;
  align-items: center;
`;

const SearchingInput = styled.input`
  border: 3px solid #b6d8e4;
  flex-grow: 1;
  height: 2.5rem;
  font-size: 1rem;
  border-radius: 0.5rem 0 0 0.5rem;
  padding-left: 0.5rem;
`;

const SearchingButton = styled.div`
  height: 2.5rem;
  padding: 0px 1rem;
  line-height: 2.5rem;
  font-size: 1rem;
  background-color: #b6d9e4;
  border-radius: 0 0.5rem 0.5rem 0;
`;

const Searching = () => {
  return (
    <SearchingContainer>
      <SearchingInput placeholder="Tag" />
      <SearchingButton>Search</SearchingButton>
    </SearchingContainer>
  );
};

export default Searching;
