import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Loader = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M12 2V6" />
      <path d="M12 18V22" />
      <path d="M4.93005 4.93L7.76005 7.76" />
      <path d="M16.24 16.24L19.07 19.07" />
      <path d="M2 12H6" />
      <path d="M18 12H22" />
      <path d="M4.93005 19.07L7.76005 16.24" />
      <path d="M16.24 7.76L19.07 4.93" />
    </svg>
  );
});

Loader.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Loader.displayName = 'Loader';

export default Loader;
