import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Tablet = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path
        d="M12 18H12.01M18 22H6C4.89543 22 4 21.1046 4 20L4 4C4 2.89543 4.89543 2 6 2H18C19.1046 2 20 2.89543 20 4L20 20C20 21.1046 19.1046 22 18 22Z"
        stroke="#46525C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Tablet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Tablet.displayName = 'Tablet';

export default Tablet;
