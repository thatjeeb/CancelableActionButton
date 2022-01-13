import './cancelableActionButton.scss';
import React, { useRef, useState } from 'react';
import { getClassName } from '../utils/classNames.utils';
import { CancelableActionButtonProps } from './cancelableActionButton.definition';

const CancelableActionButton = (props: CancelableActionButtonProps): JSX.Element => {
  const defaultProps = new CancelableActionButtonProps(props);
  const { onClick, cancelDuration, actionText, cancelText } = defaultProps;

  const [loading, setLoading] = useState(false);

  const durationRef = useRef(0 as unknown as NodeJS.Timeout);
  const transitionDuration = loading ? (cancelDuration / 1000) + 's' : '0s';
  const loaderClassName = getClassName('cancelable-action-button_loader', [
    { condition: loading, trueClassName: 'cancelable-action-button_loader--loading' },
  ]);

  function handleClick(): void {
    if (loading) {
      clearTimeout(durationRef.current);
      setLoading(false);
    } else {
      setLoading(true);
      durationRef.current = setTimeout(() => {
        setLoading(false);
        onClick();
      }, cancelDuration);
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