import styled from "styled-components";
import { DUMMY_DATA } from "./DUMMY_DATA";
import Question from "./Question";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  max-width: 1280px;
`;

const QuestionListing = () => {
  return (
    <ListContainer>
      {DUMMY_DATA.items.map((item) => {
        return <Question key={item.question_id} questionData={item} />;
      })}
    </ListContainer>
  );
};

export default QuestionListing;
