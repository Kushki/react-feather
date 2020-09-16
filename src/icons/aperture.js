import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Aperture = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
      <path d="M14.3101 8L20.0501 17.94" />
      <path d="M9.68994 8H21.1699" />
      <path d="M7.38 12L13.12 2.06" />
      <path d="M9.68995 16L3.94995 6.06" />
      <path d="M14.31 16H2.82996" />
      <path d="M16.62 12L10.88 21.94" />
    </svg>
  );
});

Aperture.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Aperture.displayName = 'Aperture';

export default Aperture;
