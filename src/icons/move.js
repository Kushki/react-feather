import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Move = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M5 9L2 12L5 15" />
      <path d="M9 5L12 2L15 5" />
      <path d="M15 19L12 22L9 19" />
      <path d="M19 9L22 12L19 15" />
      <path d="M2 12H22" />
      <path d="M12 2V22" />
    </svg>
  );
});

Move.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Move.displayName = 'Move';

export default Move;
