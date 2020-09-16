import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Cpu = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4Z" />
      <path d="M15 9H9V15H15V9Z" />
      <path d="M9 1V4" />
      <path d="M15 1V4" />
      <path d="M9 20V23" />
      <path d="M15 20V23" />
      <path d="M20 9H23" />
      <path d="M20 14H23" />
      <path d="M1 9H4" />
      <path d="M1 14H4" />
    </svg>
  );
});

Cpu.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Cpu.displayName = 'Cpu';

export default Cpu;
