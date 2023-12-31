import { LiveBadge } from '@/components/live-badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { User } from '@prisma/client';
import { VariantProps, cva } from 'class-variance-authority';
import { FC } from 'react';

const avatarSizes = cva('', {
  variants: {
    size: {
      default: 'h-8 w-8',
      lg: 'h-14 w-14',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

type UserAvatarProps = Pick<User, 'username' | 'imageUrl'> &
  VariantProps<typeof avatarSizes> & {
    isLive?: boolean;
    showBadge?: boolean;
  };

export const UserAvatar: FC<UserAvatarProps> = ({
  username,
  imageUrl,
  isLive,
  showBadge,
  size,
}) => {
  const canShowBadge = showBadge && isLive;

  return (
    <div className='relative'>
      <Avatar
        className={cn(
          isLive && 'ring-2 ring-rose-500 border border-background',
          avatarSizes({ size })
        )}
      >
        <AvatarImage src={imageUrl} className='object-cover' />
        <AvatarFallback>
          {username[0]}
          {username[username.length - 1]}
        </AvatarFallback>
      </Avatar>
      {canShowBadge && (
        <div className='absolute -bottom-3 left-1/2 transform -translate-x-1/2'>
          <LiveBadge />
        </div>
      )}
    </div>
  );
};

type UserAvatarSkeletonProps = VariantProps<typeof avatarSizes>;

export const UserAvatarSkeleton: FC<UserAvatarSkeletonProps> = ({ size }) => {
  return <Skeleton className={cn('rounded-full', avatarSizes({ size }))} />;
};
