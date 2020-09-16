import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SkipBack = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M19 20L9 12L19 4V20Z" />
      <path d="M5 19V5" />
    </svg>
  );
});

SkipBack.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SkipBack.displayName = 'SkipBack';

export default SkipBack;
