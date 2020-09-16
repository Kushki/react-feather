import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Gitlab = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <g clipPath="url(#clip0)">
        <path
          d="M22.65 14.39L12 22.13L1.35002 14.39C1.20725 14.285 1.10134 14.1375 1.04746 13.9687C0.993572 13.7999 0.99447 13.6183 1.05002 13.45L2.27002 9.67001L4.71002 2.16001C4.73369 2.09881 4.77136 2.04402 4.82002 2.00001C4.89926 1.92763 5.0027 1.8875 5.11002 1.8875C5.21734 1.8875 5.32078 1.92763 5.40002 2.00001C5.45141 2.04967 5.48927 2.11163 5.51002 2.18001L7.95002 9.67001H16.05L18.49 2.16001C18.5137 2.09881 18.5514 2.04402 18.6 2.00001C18.6793 1.92763 18.7827 1.8875 18.89 1.8875C18.9973 1.8875 19.1008 1.92763 19.18 2.00001C19.2314 2.04967 19.2693 2.11163 19.29 2.18001L21.73 9.69001L23 13.45C23.0505 13.6235 23.0438 13.8086 22.9807 13.978C22.9177 14.1473 22.8017 14.2918 22.65 14.39Z"
          stroke="#46525C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clippath id="clip0">
          <rect width="24" height="24" fill="white" />
        </clippath>
      </defs>
    </svg>
  );
});

Gitlab.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Gitlab.displayName = 'Gitlab';

export default Gitlab;
