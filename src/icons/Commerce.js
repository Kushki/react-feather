import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Commerce = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M9 22V15H15V22" />
      <path d="M17 2H7C5 2 5.5 2 3 5V19.7778C3 21.0051 3.89543 22 5 22H19C20.1046 22 21 21.0051 21 19.7778V5C18.5 2 19 2 17 2Z" />
      <path d="M3 7C3 7 4.5 10 6.5 10C8.5 10 9 7.5 9 7.5C9 7.5 10 10 12 10C14 10 15 7.5 15 7.5C15 7.5 15.5 10 17.5 10C19.5 10 21 7 21 7" />
    </svg>
  );
});

Commerce.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Commerce.displayName = 'Commerce';

export default Commerce;
