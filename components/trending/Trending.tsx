import { AppDispatch, RootState } from "@/store";
import { trendingActions } from "@/store/trending-slice";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Tag from "./Tag";

const TrendingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 3rem;
`;

const Title = styled.div`
  font-size: 1.5rem;
  width: 100%;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 0.5rem;
`;

const WarningText = styled.h3`
  color: red;
`;

const Trending = () => {
  const trending = useSelector((state: RootState) => state.trending);
  const dispatch = useDispatch<AppDispatch>();

  const selectedTagHandler = (selectedTag: string) => {
    dispatch(trendingActions.selectTag({ selectedTag: selectedTag }));
  };

  return (
    <TrendingContainer>
      <Title>Trending</Title>
      <TagContainer>
        {trending.error ? (
          <WarningText>Failed to get trending tags</WarningText>
        ) : (
          trending.trendingTags.map((tag: { name: string }) => {
            return (
              <Tag
                key={`tag-${tag.name}`}
                name={tag.name}
                isSelected={trending.selectedTag === tag.name}
                onClick={selectedTagHandler}
              />
            );
          })
        )}
      </TagContainer>
    </TrendingContainer>
  );
};

export default Trending;
