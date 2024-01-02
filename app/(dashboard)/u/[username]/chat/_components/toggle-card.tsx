'use client';

import { updateStream } from '@/actions/stream';
import { Skeleton } from '@/components/ui/skeleton';
import { Switch } from '@/components/ui/switch';
import { FC, useTransition } from 'react';
import { toast } from 'sonner';

type FieldTypes = 'isChatEnabled' | 'isChatDelayed' | 'isChatFollowersOnly';

type ToggleCardProps = {
  label: string;
  value: boolean;
  field: FieldTypes;
};

export const ToggleCard: FC<ToggleCardProps> = ({ field, label, value }) => {
  const [isPending, startTransition] = useTransition();

  const onChange = async () => {
    startTransition(() => {
      updateStream({
        [field]: !value,
      })
        .then(() => toast.success('Chat settings updated!'))
        .catch(() => toast.error('Something went wrong'));
    });
  };

  return (
    <div className='rounded-xl bg-muted p-6'>
      <div className='flex items-center justify-between'>
        <p className='font-semibold shrink-0'>{label}</p>
        <div className='space-y-2'>
          <Switch checked={value} onCheckedChange={onChange} disabled={isPending}>
            {value ? 'On' : 'Off'}
          </Switch>
        </div>
      </div>
    </div>
  );
};

export const ToggleCardSkeleton = () => {
  return <Skeleton className='rounded-xl p-10 w-full' />;
};
