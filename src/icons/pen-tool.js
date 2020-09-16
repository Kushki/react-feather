import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const PenTool = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M12 19L19 12L22 15L15 22L12 19Z" />
      <path d="M18 13L16.5 5.5L2 2L5.5 16.5L13 18L18 13Z" />
      <path d="M2 2L9.58579 9.58579" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  );
});

PenTool.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PenTool.displayName = 'PenTool';

export default PenTool;
