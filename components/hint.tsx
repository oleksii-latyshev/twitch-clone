import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { FC, ReactNode } from 'react';

type HintProps = {
  label: string;
  children: ReactNode;
  asChild?: boolean;
  side?: 'top' | 'bottom' | 'left' | 'right';
  align?: 'start' | 'center' | 'end';
};

export const Hint: FC<HintProps> = ({ label, children, asChild, side, align }) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild={asChild}>{children}</TooltipTrigger>
        <TooltipContent className='text-black bg-white' side={side} align={align}>
          <p className='font-semibold'>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
