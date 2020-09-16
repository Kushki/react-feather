import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Maximize2 = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M15 3H21V9" />
      <path d="M9 21H3V15" />
      <path d="M21 3L14 10" />
      <path d="M3 21L10 14" />
    </svg>
  );
});

Maximize2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Maximize2.displayName = 'Maximize2';

export default Maximize2;
