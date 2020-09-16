import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Dispersion = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M15.5 2H22V8.5" />
      <path d="M22 15.5V22H16" />
      <path d="M22 2L15 9" />
      <path d="M22 22L15 15" />
      <path d="M10 7H4C1 7 1 12 4 12H7.99999C11 12 11 17 7.99999 17H2" />
      <path d="M6 4V20" />
    </svg>
  );
});

Dispersion.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Dispersion.displayName = 'Dispersion';

export default Dispersion;
