'use client';

import { FollowingSkeleton } from '@/app/(browse)/_components/sidebar/following';
import { RecommendedSkeleton } from '@/app/(browse)/_components/sidebar/recommended';
import { ToggleSkeleton } from '@/app/(browse)/_components/sidebar/toggle';
import { cn } from '@/lib/utils';
import { useSidebar } from '@/store/use-sidebar';
import { FC, ReactNode } from 'react';
import { useIsClient } from 'usehooks-ts';

type WrapperProps = {
  children: ReactNode;
};

export const Wrapper: FC<WrapperProps> = ({ children }) => {
  const isClient = useIsClient();
  const { collapsed } = useSidebar((state) => state);

  if (!isClient) {
    return (
      <aside
        className={
          'fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2d2e35] z-50'
        }
      >
        <ToggleSkeleton />
        <FollowingSkeleton />
        <RecommendedSkeleton />
      </aside>
    );
  }

  return (
    <aside
      className={cn(
        'fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2d2e35] z-50',
        collapsed && 'w-[70px]'
      )}
    >
      {children}
    </aside>
  );
};
