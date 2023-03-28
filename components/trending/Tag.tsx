import styled from "styled-components";

const Container = styled.button<{ isSelected: boolean }>`
  background-color: ${(props) => (props.isSelected ? "#b6d8e4" : "#fff")};
  border: 2px solid #b6d8e4;
  padding: 0.5rem 0.2rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;

const Tag = ({
  name,
  isSelected,
  onClick,
}: {
  name: string;
  isSelected: boolean;
  onClick: (selectedTag: string) => void;
}) => {
  return (
    <Container
      isSelected={isSelected}
      onClick={() => {
        onClick(name);
      }}
    >
      {name}
    </Container>
  );
};

export default Tag;
