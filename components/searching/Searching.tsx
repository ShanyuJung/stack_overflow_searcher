import { AppDispatch, RootState } from "@/store";
import { trendingActions } from "@/store/trending-slice";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const SearchingContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 1rem;
  align-items: center;
  position: sticky;
  top: 0;
  padding-top: 1rem;
  background-color: #fff;
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
  const [curTag, setCurTag] = useState<string>("");
  const timerRef = useRef<number | null>(null);
  const trending = useSelector((state: RootState) => state.trending);
  const dispatch = useDispatch<AppDispatch>();

  const searchingHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCurTag(event.target.value.trim());
  };

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (trending.selectedTag === curTag || !curTag) return;
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      dispatch(trendingActions.selectTag({ selectedTag: curTag }));
    }
  };

  useEffect(() => {
    if (trending.selectedTag === curTag || !curTag) return;
    timerRef.current = window.setTimeout(() => {
      dispatch(trendingActions.selectTag({ selectedTag: curTag }));
    }, 1000);

    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, [curTag, dispatch, trending.selectedTag]);

  return (
    <form onSubmit={onSubmitHandler}>
      <SearchingContainer>
        <SearchingInput placeholder="Tag" onChange={searchingHandler} />
        <SearchingButton>Search</SearchingButton>
      </SearchingContainer>
    </form>
  );
};

export default Searching;
