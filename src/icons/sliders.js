import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Sliders = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M4 21V14" />
      <path d="M4 10V3" />
      <path d="M12 21V12" />
      <path d="M12 8V3" />
      <path d="M20 21V16" />
      <path d="M20 12V3" />
      <path d="M1 14H7" />
      <path d="M9 8H15" />
      <path d="M17 16H23" />
    </svg>
  );
});

Sliders.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Sliders.displayName = 'Sliders';

export default Sliders;
