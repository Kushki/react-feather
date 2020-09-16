import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BarChart = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M12 20V10" />
      <path d="M18 20V4" />
      <path d="M6 20V16" />
    </svg>
  );
});

BarChart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BarChart.displayName = 'BarChart';

export default BarChart;
