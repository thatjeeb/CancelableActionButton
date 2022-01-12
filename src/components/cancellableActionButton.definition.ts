import type { MouseEvent } from 'react';

export class CancellableActionButtonProps {
  actionText?= 'Send Important File';
  cancelText?= 'Cancel Sending';
  timeout?= 5000;
  onClick: (e?: MouseEvent) => void;

  constructor(props: CancellableActionButtonProps) {
    Object.assign(this, props);
  }
}