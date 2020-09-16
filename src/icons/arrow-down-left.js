import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowDownLeft = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.7071 6.29289C18.0976 6.68342 18.0976 7.31658 17.7071 7.70711L7.70711 17.7071C7.31658 18.0976 6.68342 18.0976 6.29289 17.7071C5.90237 17.3166 5.90237 16.6834 6.29289 16.2929L16.2929 6.29289C16.6834 5.90237 17.3166 5.90237 17.7071 6.29289Z"
        fill="#46525C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 6C7.55228 6 8 6.44772 8 7V16H17C17.5523 16 18 16.4477 18 17C18 17.5523 17.5523 18 17 18H7C6.44772 18 6 17.5523 6 17V7C6 6.44772 6.44772 6 7 6Z"
        fill="#46525C"
      />
    </svg>
  );
});

ArrowDownLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowDownLeft.displayName = 'ArrowDownLeft';

export default ArrowDownLeft;
