import { Results, ResultsSkeleton } from '@/app/(browse)/search/_components/results';
import { redirect } from 'next/navigation';
import { FC, Suspense } from 'react';

type PageProps = {
  searchParams: {
    term?: string;
  };
};

const Page: FC<PageProps> = ({ searchParams }) => {
  if (!searchParams.term) {
    redirect('/');
  }

  return (
    <div className='h-full p-8 max-w-screen-2xl mx-auto'>
      <Suspense fallback={<ResultsSkeleton />}>
        <Results term={searchParams.term} />
      </Suspense>
    </div>
  );
};

export default Page;
