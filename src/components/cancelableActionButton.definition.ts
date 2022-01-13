import type { MouseEvent } from 'react';

export class CancelableActionButtonProps {
  actionText?= 'Send Important File';
  cancelText?= 'Cancel Sending';
  timeout?= 5000;
  onClick: (e?: MouseEvent) => void;

  constructor(props: CancelableActionButtonProps) {
    Object.assign(this, props);
  }
}