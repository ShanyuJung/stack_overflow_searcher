import { IQuestion } from "@/types/types";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 6.5rem;
  align-items: center;
  display: flex;
  border-bottom: 1px solid #ccc;
  padding-top: 0.5rem;
  &:hover {
    background-color: #eee;
  }
`;

const Wrapper = styled.div`
  display: flex;
  height: 6rem;
  flex-direction: column;
  flex-grow: 1;
`;

const StyleLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #000;
  &:hover {
    text-decoration: underline;
  }
`;

const Title = styled.h4``;

const SubtitleContainer = styled.div`
  display: flex;
`;

const SubTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

const SubTittle = styled.h5`
  color: brown;
`;

const CountNumber = styled.h5<{ isHightLighted?: boolean }>`
  color: ${(props) => (props.isHightLighted ? "red" : "#000")};
`;

const BorderedCountNumber = styled.h5<{
  isHightLighted: boolean;
  isAnswered: boolean;
}>`
  width: 5rem;
  text-align: center;
  border: ${(props) => (props.isHightLighted ? "1px solid green" : "none")};
  background-color: ${(props) => (props.isAnswered ? "green" : "")};
`;

const OwnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 8rem;
  height: 6rem;
  flex-shrink: 0;
`;

const OwnerProfileImage = styled.div<{ $bgImage: string }>`
  background-image: url(${(props) => props.$bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;

const OwnerName = styled.p`
  font-size: 0.5rem;
`;

const Question = ({ questionData }: { questionData: IQuestion }) => {
  const { title, score, answer_count, view_count, owner, is_answered, link } =
    questionData;

  return (
    <Container>
      <Wrapper>
        <StyleLink target="_blank" href={link}>
          <Title>{title}</Title>
        </StyleLink>
        <SubtitleContainer>
          <SubTitleWrapper>
            <SubTittle>Score</SubTittle>
            <CountNumber isHightLighted={score < 0}>{score}</CountNumber>
          </SubTitleWrapper>
          <SubTitleWrapper>
            <SubTittle>Answers</SubTittle>
            <BorderedCountNumber
              isHightLighted={answer_count > 0 && !is_answered}
              isAnswered={is_answered}
            >
              {answer_count}
            </BorderedCountNumber>
          </SubTitleWrapper>
          <SubTitleWrapper>
            <SubTittle>Viewed</SubTittle>
            <CountNumber>{view_count}</CountNumber>
          </SubTitleWrapper>
        </SubtitleContainer>
      </Wrapper>
      <OwnerContainer>
        <OwnerProfileImage $bgImage={owner.profile_image} />
        <OwnerName>{owner.display_name}</OwnerName>
      </OwnerContainer>
    </Container>
  );
};

export default Question;
