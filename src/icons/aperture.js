import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Aperture = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12Z"
        fill="#46525C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.8099 7.134C14.2882 6.85782 14.8998 7.02164 15.176 7.49991L20.916 17.4399C21.1921 17.9182 21.0283 18.5298 20.5501 18.806C20.0718 19.0822 19.4602 18.9183 19.184 18.4401L13.444 8.50006C13.1678 8.02179 13.3316 7.41018 13.8099 7.134Z"
        fill="#46525C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.68994 8C8.68994 7.44772 9.13766 7 9.68994 7H21.1699C21.7222 7 22.1699 7.44772 22.1699 8C22.1699 8.55228 21.7222 9 21.1699 9H9.68994C9.13766 9 8.68994 8.55228 8.68994 8Z"
        fill="#46525C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.6201 1.194C14.0984 1.47018 14.2622 2.08179 13.986 2.56006L8.24603 12.5001C7.96985 12.9783 7.35824 13.1421 6.87998 12.866C6.40171 12.5898 6.23788 11.9782 6.51407 11.4999L12.2541 1.55991C12.5303 1.08164 13.1419 0.917815 13.6201 1.194Z"
        fill="#46525C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.44992 5.194C3.92819 4.91782 4.53979 5.08164 4.81598 5.55991L10.556 15.4999C10.8322 15.9782 10.6683 16.5898 10.1901 16.866C9.7118 17.1421 9.1002 16.9783 8.82401 16.5001L3.08401 6.56006C2.80783 6.08179 2.97165 5.47018 3.44992 5.194Z"
        fill="#46525C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.82996 16C1.82996 15.4477 2.27767 15 2.82996 15H14.31C14.8622 15 15.31 15.4477 15.31 16C15.31 16.5523 14.8622 17 14.31 17H2.82996C2.27767 17 1.82996 16.5523 1.82996 16Z"
        fill="#46525C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.1201 11.134C17.5984 11.4102 17.7622 12.0218 17.486 12.5001L11.746 22.4401C11.4698 22.9183 10.8582 23.0822 10.38 22.806C9.90171 22.5298 9.73788 21.9182 10.0141 21.4399L15.7541 11.4999C16.0303 11.0216 16.6419 10.8578 17.1201 11.134Z"
        fill="#46525C"
      />
    </svg>
  );
});

Aperture.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Aperture.displayName = 'Aperture';

export default Aperture;
