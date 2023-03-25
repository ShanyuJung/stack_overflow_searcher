import { RootState } from "@/store";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Tag from "./Tag";

const TrendingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
              />
            );
          })
        )}
      </TagContainer>
    </TrendingContainer>
  );
};

export default Trending;
