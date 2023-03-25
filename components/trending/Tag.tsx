import styled from "styled-components";

const Container = styled.div<{ isSelected: boolean }>`
  background-color: ${(props) => (props.isSelected ? "#b6d8e4" : "#fff")};
  border: 2px solid #b6d8e4;
  padding: 0.5rem 0.2rem;
  border-radius: 0.5rem;
`;

const Tag = ({ name, isSelected }: { name: string; isSelected: boolean }) => {
  return <Container isSelected={isSelected}>{name}</Container>;
};

export default Tag;
