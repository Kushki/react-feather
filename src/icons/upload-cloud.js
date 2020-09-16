import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const UploadCloud = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
          d="M16 16L12 12L8 16"
          stroke="#46525C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 12V21"
          stroke="#46525C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.39 18.39C21.3653 17.8583 22.1358 17.0169 22.5798 15.9986C23.0239 14.9804 23.1162 13.8432 22.8422 12.7667C22.5682 11.6902 21.9434 10.7355 21.0666 10.0535C20.1898 9.3714 19.1108 9.00075 18 9.00001H16.74C16.4373 7.82926 15.8731 6.74235 15.0899 5.82101C14.3067 4.89967 13.3248 4.16786 12.2181 3.68062C11.1113 3.19338 9.90851 2.96337 8.70008 3.0079C7.49164 3.05242 6.30903 3.37031 5.24114 3.93768C4.17325 4.50505 3.24787 5.30712 2.53458 6.2836C1.82129 7.26008 1.33865 8.38555 1.12294 9.57541C0.90723 10.7653 0.964065 11.9885 1.28917 13.1533C1.61428 14.318 2.1992 15.3939 2.99996 16.3"
          stroke="#46525C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 16L12 12L8 16"
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

UploadCloud.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UploadCloud.displayName = 'UploadCloud';

export default UploadCloud;
