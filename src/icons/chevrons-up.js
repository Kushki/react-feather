import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ChevronsUp = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M17 11L12 6L7 11" />
      <path d="M17 18L12 13L7 18" />
    </svg>
  );
});

ChevronsUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChevronsUp.displayName = 'ChevronsUp';

export default ChevronsUp;
