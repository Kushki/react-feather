import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Billing = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5H13ZM11 17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17H11ZM11 5V17H13V5H11Z"
        fill="#46525C"
      />
      <path
        d="M15.5 7H9.99997C7.50001 7 7.5 11 9.99997 11H14C16.5 11 16.5 15 14 15H8.49998"
        stroke="#46525C"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6 2H14H20V8V20L20 22L17 20L14.5 22L12 20L9.5 22L7 20L4 22V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21071 5.46957 2 6 2Z"
        stroke="#46525C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Billing.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Billing.displayName = 'Billing';

export default Billing;
