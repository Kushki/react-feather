import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const VolumeX = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M11 5L6 9H2V15H6L11 19V5Z" />
      <path d="M23 9L17 15" />
      <path d="M17 9L23 15" />
    </svg>
  );
});

VolumeX.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

VolumeX.displayName = 'VolumeX';

export default VolumeX;
