import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Type = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M4 7V4H20V7" />
      <path d="M9 20H15" />
      <path d="M12 4V20" />
    </svg>
  );
});

Type.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Type.displayName = 'Type';

export default Type;
