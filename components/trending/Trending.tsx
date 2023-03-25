import { TagDataInterface } from "@/types/types";
import { useEffect, useState } from "react";
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

const Trending = () => {
  const [tags, setTags] = useState<TagDataInterface[]>([]);
  const [selectedTag, setSelectedTag] = useState<string>("");

  useEffect(() => {
    const fetchTagsHandler = async () => {
      const res = await fetch(
        "https://api.stackexchange.com/2.3/tags?page=1&pagesize=10&order=desc&sort=popular&site=stackoverflow"
      );
      const data = await res.json();
      setTags(data.items);
      setSelectedTag(data.items[0].name);
    };

    fetchTagsHandler();
  }, []);

  return (
    <TrendingContainer>
      <Title>Trending</Title>
      <TagContainer>
        {tags.map((tag) => {
          return (
            <Tag
              key={`tag-${tag.name}`}
              name={tag.name}
              isSelected={selectedTag === tag.name}
            />
          );
        })}
      </TagContainer>
    </TrendingContainer>
  );
};

export default Trending;
