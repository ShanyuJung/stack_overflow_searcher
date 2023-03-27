import { RootState } from "@/store";
import { IQuestion } from "@/types/types";
import { api } from "@/utils/api";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Question from "./Question";
import loadingSpinner from "../../assets/images/loading.gif";

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  max-width: 1280px;
`;

const ObserverContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const LoadingSpinner = styled.div`
  background-image: url(${loadingSpinner.src});
  width: 3rem;
  height: 3rem;
  background-repeat: no-repeat;
  background-size: cover;
`;

const QuestionListing = () => {
  const [data, setData] = useState<IQuestion[]>([]);
  const [curPage, setCurPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trending = useSelector((state: RootState) => state.trending);

  const fetchQuestionHandler = useCallback(async () => {
    if (isLoading || !hasMore) return;

    console.log("fetch", curPage);
    try {
      setIsError(false);
      setIsLoading(true);
      const res = await api.fetchQuestion(curPage, trending.selectedTag);
      const data = res.items as IQuestion[];
      setData((prev) => [...prev, ...data]);
      setCurPage((prev) => prev + 1);
      if (!res.has_more) {
        setHasMore(false);
      }
      setIsLoading(false);
    } catch (err) {
      setIsError(true);
      setIsLoading(false);
    }
  }, [curPage, hasMore, isLoading, trending.selectedTag]);

  useEffect(() => {
    const observerHandler = (entries: { isIntersecting: boolean }[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fetchQuestionHandler();
        }
      });
    };
    let observerRefValue: HTMLDivElement | null = null;

    const observer = new IntersectionObserver(observerHandler, options);
    if (containerRef.current) {
      observer.observe(containerRef.current);
      observerRefValue = containerRef.current;
    }

    return () => {
      if (observerRefValue) observer.unobserve(observerRefValue);
    };
  }, [fetchQuestionHandler]);

  return (
    <ListContainer>
      {data.map((item) => {
        return <Question key={item.question_id} questionData={item} />;
      })}
      <ObserverContainer ref={containerRef}>
        {isLoading && <LoadingSpinner />}
      </ObserverContainer>
    </ListContainer>
  );
};

export default QuestionListing;
