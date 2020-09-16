import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const MousePointer = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" />
      <path d="M13 13L19 19" />
    </svg>
  );
});

MousePointer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MousePointer.displayName = 'MousePointer';

export default MousePointer;
