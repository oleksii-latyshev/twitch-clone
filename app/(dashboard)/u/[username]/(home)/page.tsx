import { FC } from 'react';

type PageProps = {
  params: {
    username: string;
  };
};

const Page: FC<PageProps> = ({}) => {
  return <div>page</div>;
};

export default Page;
