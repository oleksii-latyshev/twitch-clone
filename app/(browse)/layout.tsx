import { Container } from '@/app/(browse)/_components/container';
import { Navbar } from '@/app/(browse)/_components/navbar';
import { Sidebar, SidebarSkeleton } from '@/app/(browse)/_components/sidebar';
import { FC, ReactNode, Suspense } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className='flex h-full pt-20'>
        <Suspense fallback={<SidebarSkeleton />}>
          <Sidebar />
        </Suspense>
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default Layout;
