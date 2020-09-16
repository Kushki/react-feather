import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Archive = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        d="M3 7C3.55228 7 4 7.44772 4 8V20H20V8C20 7.44772 20.4477 7 21 7C21.5523 7 22 7.44772 22 8V21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21V8C2 7.44772 2.44772 7 3 7Z"
        fill="#46525C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 3C0 2.44772 0.447715 2 1 2H23C23.5523 2 24 2.44772 24 3V8C24 8.55228 23.5523 9 23 9H1C0.447715 9 0 8.55228 0 8V3ZM2 4V7H22V4H2Z"
        fill="#46525C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 12C9 11.4477 9.44772 11 10 11H14C14.5523 11 15 11.4477 15 12C15 12.5523 14.5523 13 14 13H10C9.44772 13 9 12.5523 9 12Z"
        fill="#46525C"
      />
    </svg>
  );
});

Archive.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Archive.displayName = 'Archive';

export default Archive;
