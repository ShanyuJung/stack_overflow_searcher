import styled from "styled-components";

const SearchingContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  align-items: center;
`;

const SearchingInput = styled.input`
  border: 3px solid #b6d8e4;
  flex-grow: 1;
  height: 40px;
  border-radius: 10px 0px 0px 10px;
  padding-left: 10px;
`;

const SearchingButton = styled.div`
  height: 40px;
  padding: 0px 15px;
  line-height: 40px;
  background-color: #b6d9e4;
  border-radius: 0px 10px 10px 0px;
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
