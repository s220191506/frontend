/**@jsxImportSource @emotion/react */
import React from 'react';
import { Page } from './Page';
import { css } from '@emotion/react';
import { useSearchParams } from 'react-router-dom';
import { QuestionList } from './QuestionsList';
import { searchQuestions, QuestionData } from './QuestionsData';
export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [questions, setQuestions] = React.useState<QuestionData[]>([]);
  const search = searchParams.get('criteria') || '';
  React.useEffect(() => {
    const doSearch = async (criteria: string) => {
      const foundResults = await searchQuestions(criteria);
      setQuestions(foundResults);
    };
    doSearch(search);
  }, [search]);
  return (
    <Page title="Search Results">
      {search && (
        <p
          css={css`
            font-size: 16px;
            font-style: italic;
            margin-top: 0px;
          `}
        >
          for "{search}"
        </p>
      )}
      <QuestionList data={questions} />
    </Page>
  );
};
