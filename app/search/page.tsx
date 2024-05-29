// "use client";
import { getList } from '@/libs/microcms';
import ArticleList from '@/components/ArticleList';
import Pagination from '@/components/Pagination';

type Props = {
  searchParams: {
    q?: string;
  };
};

export const revalidate = 60;

export default async function Page({ searchParams }: Props) {
  const data = await getList({
    q: searchParams.q,
  });

  return (
    <>
      <ArticleList articles={data.contents} />
      <Pagination totalCount={data.totalCount} basePath="/search" q={searchParams.q} />
    </>
  );
}


// import React, { Suspense, useEffect } from 'react';
// import { useSearchParams } from 'next/navigation';
// import { client, getList } from '@/libs/microcms';
// import ArticleList from '@/components/ArticleList';
// import Pagination from '@/components/Pagination';

// const SearchResults = ({ searchParams }) => {
//   const { q } = searchParams;
//   const [data, setData] = React.useState(null);

//   React.useEffect(() => {
//     const fetchData = async () => {
//       const result = await getList({ q });
//       setData(result);
//     };

//     fetchData();
//   }, [q]);

//   if (!data) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <ArticleList articles={data.contents} />
//       <Pagination totalCount={data.totalCount} basePath="/search" q={q} />
//     </>
//   );
// };

// type Props = {
//   searchParams: {
//     q?: string;
//   };
// };

// export const revalidate = 60;

// export default function Page({ searchParams }: Props) {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <SearchResults searchParams={searchParams} />
//     </Suspense>
//   );
// }