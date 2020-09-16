import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Codepen = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M12 2L22 8.5V15.5L12 22L2 15.5V8.5L12 2Z" />
      <path d="M12 22V15.5" />
      <path d="M22 8.5L12 15.5L2 8.5" />
      <path d="M2 15.5L12 8.5L22 15.5" />
      <path d="M12 2V8.5" />
    </svg>
  );
});

Codepen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Codepen.displayName = 'Codepen';

export default Codepen;
