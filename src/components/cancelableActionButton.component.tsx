import './cancelableActionButton.scss';
import React, { useRef, useState } from 'react';
import { getClassName } from '../utils/classNames.utils';
import { CancelableActionButtonProps } from './cancelableActionButton.definition';

const CancelableActionButton = (props: CancelableActionButtonProps): JSX.Element => {
  const defaultProps = new CancelableActionButtonProps(props);
  const { onClick, timeout, actionText, cancelText } = defaultProps;

  const [loading, setLoading] = useState(false);

  const timeoutHolder = useRef(0 as unknown as NodeJS.Timeout);
  const transitionDuration = loading ? (timeout / 1000) + 's' : '0s';
  const loaderClassName = getClassName('cancelable-action-button_loader', [
    { condition: loading, trueClassName: 'cancelable-action-button_loader--loading' },
  ]);

  function handleClick(): void {
    if (loading) {
      clearTimeout(timeoutHolder.current);
      setLoading(false);
    } else {
      setLoading(true);
      timeoutHolder.current = setTimeout(() => {
        setLoading(false);
        onClick();
      }, timeout);
    }
  }

  return (
    <button className='cancelable-action-button' onClick={handleClick}>
      {loading ? cancelText : actionText}
      <div className={loaderClassName} style={{ transitionDuration }} />
    </button>
  );
}

export default CancelableActionButton;