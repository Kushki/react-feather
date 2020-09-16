import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Minimize2 = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M4 14H10V20" />
      <path d="M20 10H14V4" />
      <path d="M14 10L21 3" />
      <path d="M3 21L10 14" />
    </svg>
  );
});

Minimize2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Minimize2.displayName = 'Minimize2';

export default Minimize2;
