import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Grid = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M10 3H3V10H10V3Z" />
      <path d="M21 3H14V10H21V3Z" />
      <path d="M21 14H14V21H21V14Z" />
      <path d="M10 14H3V21H10V14Z" />
    </svg>
  );
});

Grid.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Grid.displayName = 'Grid';

export default Grid;
