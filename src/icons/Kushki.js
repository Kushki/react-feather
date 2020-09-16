import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Kushki = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M21.8823 10.2115L21.9625 11.128C22.1492 13.2764 21.6364 15.4275 20.5007 17.2606C19.365 19.0937 17.6671 20.5106 15.6604 21.2999C13.6536 22.0892 11.4454 22.2087 9.36521 21.6405C7.28499 21.0724 5.44416 19.847 4.11726 18.1471C2.79037 16.4473 2.0485 14.364 2.00231 12.2081C1.95612 10.0522 2.60808 7.93907 3.86095 6.18395C5.11382 4.42882 6.90047 3.12571 8.95446 2.46895C11.0084 1.8122 13.2197 1.837 15.2584 2.53965" />
      <path
        d="M8 16C7.44772 16 7 16.4477 7 17C7 17.5523 7.44772 18 8 18V16ZM16 18C16.5523 18 17 17.5523 17 17C17 16.4477 16.5523 16 16 16V18ZM8 18H16V16H8V18Z"
        fill="#46525C"
      />
      <path d="M8 10.5L11.5 14L19 6" />
    </svg>
  );
});

Kushki.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Kushki.displayName = 'Kushki';

export default Kushki;
