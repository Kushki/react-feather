import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Industry = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        d="M13 11.5868V22M13 11.5868C15.0513 13 15.3333 13 17.3846 11.5868C19.4359 13 19.9487 13 22 11.5868M13 11.5868C13 9 13.7949 7.5 15.8462 7.5H18.9231C20.9744 7.5 22 9 22 11.5868M22 11.5868V22L18.9231 21.9999L15.8462 22L13 22M13 22V2.00002C8.38461 2.00003 2 5.27677 2 8V22L13 22Z"
        stroke="#46525C"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9 17H6V22H9V17Z"
        stroke="#46525C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 17H16V22H19V17Z"
        stroke="#46525C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6 11H6.00999" stroke="#46525C" strokeWidth="2" strokeLinecap="round" />
      <path d="M9 11H9.00999" stroke="#46525C" strokeWidth="2" strokeLinecap="round" />
      <path d="M6 14H6.00999" stroke="#46525C" strokeWidth="2" strokeLinecap="round" />
      <path d="M9 14H9.00999" stroke="#46525C" strokeWidth="2" strokeLinecap="round" />
      <path d="M6 8H6.00999" stroke="#46525C" strokeWidth="2" strokeLinecap="round" />
      <path d="M9 8H9.00999" stroke="#46525C" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
});

Industry.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Industry.displayName = 'Industry';

export default Industry;
