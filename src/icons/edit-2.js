import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Edit2 = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        d="M15.2929 2.29289C15.6834 1.90237 16.3166 1.90237 16.7071 2.29289L21.7071 7.29289C22.0976 7.68342 22.0976 8.31658 21.7071 8.70711L8.70711 21.7071C8.51957 21.8946 8.26522 22 8 22H3C2.44772 22 2 21.5523 2 21V16C2 15.7348 2.10536 15.4804 2.29289 15.2929L15.2929 2.29289ZM4 16.4142V20H7.58579L19.5858 8L16 4.41421L4 16.4142Z"
        fill="#46525C"
      />
    </svg>
  );
});

Edit2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Edit2.displayName = 'Edit2';

export default Edit2;
