import { cn } from '@/lib/utils';
import { FC } from 'react';

type LiveBadgeProps = {
  className?: string;
};

export const LiveBadge: FC<LiveBadgeProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'bg-rose-500 text-center p-0.5 px-1.5 rounded-md uppercase text-[10px] border border-background font-semibold tracking-wide',
        className
      )}
    >
      Live
    </div>
  );
};
