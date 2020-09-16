import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Support = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        d="M4 13V8.6C4 6.84957 4.84285 5.17084 6.34315 3.9331C7.84344 2.69536 9.87827 2 12 2C14.1217 2 16.1566 2.69536 17.6569 3.9331C19.1571 5.17084 20 6.84957 20 8.6V13"
        stroke="#46525C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 15C20 15.5304 19.8127 16.0391 19.4793 16.4142C19.1459 16.7893 18.6937 17 18.2222 17H17.3333C16.8618 17 16.4097 16.7893 16.0763 16.4142C15.7429 16.0391 15.5556 15.5304 15.5556 15V12C15.5556 11.4696 15.7429 10.9609 16.0763 10.5858C16.4097 10.2107 16.8618 10 17.3333 10H20V15ZM4 15C4 15.5304 4.1873 16.0391 4.5207 16.4142C4.8541 16.7893 5.30628 17 5.77778 17H6.66667C7.13816 17 7.59035 16.7893 7.92375 16.4142C8.25714 16.0391 8.44444 15.5304 8.44444 15V12C8.44444 11.4696 8.25714 10.9609 7.92375 10.5858C7.59035 10.2107 7.13816 10 6.66667 10H4V15Z"
        stroke="#46525C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.9897 15C20.1377 17.3333 18.7469 22 12 22"
        stroke="#46525C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Support.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Support.displayName = 'Support';

export default Support;
