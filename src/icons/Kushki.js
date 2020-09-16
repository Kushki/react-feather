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
        d="M15.8618 18H8.13821C7.4878 18 7 17.5357 7 17C7 16.4286 7.52846 16 8.13821 16H15.8618C16.5122 16 17 16.4643 17 17C17 17.5714 16.4715 18 15.8618 18Z"
        fill="#46525C"
      />
      <path
        d="M11.6455 15C11.3897 15 11.1339 14.8853 10.9147 14.6942L7.33359 11.216C6.89509 10.7956 6.89509 10.1076 7.29705 9.64891C7.69901 9.19025 8.35676 9.19025 8.79526 9.61069L11.609 12.3627L18.1865 5.32982C18.5884 4.90938 19.2462 4.87116 19.6847 5.32982C20.0866 5.75026 20.1232 6.43826 19.6847 6.89692L12.3763 14.6942C12.1936 14.8853 11.9013 15 11.6455 15Z"
        fill="#46525C"
      />
    </svg>
  );
});

Kushki.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Kushki.displayName = 'Kushki';

export default Kushki;
