import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Package = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M12.89 1.45L20.89 5.45C21.2233 5.61558 21.5037 5.87083 21.6998 6.18705C21.8959 6.50327 21.9999 6.86792 22 7.24V16.77C21.9999 17.1421 21.8959 17.5067 21.6998 17.823C21.5037 18.1392 21.2233 18.3944 20.89 18.56L12.89 22.56C12.6122 22.699 12.3058 22.7714 11.995 22.7714C11.6843 22.7714 11.3779 22.699 11.1 22.56L3.10005 18.56C2.76718 18.3923 2.4878 18.1349 2.29344 17.8168C2.09907 17.4988 1.99745 17.1327 2.00005 16.76V7.24C2.00025 6.86792 2.10424 6.50327 2.30033 6.18705C2.49642 5.87083 2.77684 5.61558 3.11005 5.45L11.11 1.45C11.3866 1.31258 11.6912 1.24106 12 1.24106C12.3089 1.24106 12.6135 1.31258 12.89 1.45V1.45Z" />
      <path d="M2.31995 6.16L11.9999 11L21.6799 6.16" />
      <path d="M12 22.76V11" />
      <path d="M7 3.5L17 8.5" />
    </svg>
  );
});

Package.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Package.displayName = 'Package';

export default Package;
