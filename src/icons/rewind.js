import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Rewind = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M11 19L2 12L11 5V19Z" />
      <path d="M22 19L13 12L22 5V19Z" />
    </svg>
  );
});

Rewind.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Rewind.displayName = 'Rewind';

export default Rewind;
