import { Navbar } from '@/app/(browse)/_components/navbar';
import { FC, ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className='flex h-full pt-20'>{children}</div>
    </>
  );
};

export default Layout;
