import { Container } from '@/app/(browse)/_components/container';
import { Navbar } from '@/app/(browse)/_components/navbar';
import { Sidebar } from '@/app/(browse)/_components/sidebar';
import { FC, ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className='flex h-full pt-20'>
        <Sidebar />
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default Layout;
