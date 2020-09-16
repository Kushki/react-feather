import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CloudRain = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <path d="M16 13V21" />
        <path d="M8 13V21" />
        <path d="M12 15V23" />
        <path d="M20 16.58C21.0513 16.1196 21.9121 15.3115 22.4381 14.2915C22.9641 13.2715 23.1232 12.1016 22.8886 10.9782C22.6541 9.85475 22.0402 8.8462 21.1501 8.12182C20.2599 7.39745 19.1477 7.00134 18 6.99999H16.74C16.4231 5.77251 15.8189 4.63794 14.9773 3.68979C14.1358 2.74164 13.081 2.00706 11.8998 1.54661C10.7186 1.08615 9.44494 0.913005 8.18372 1.04143C6.92249 1.16986 5.70984 1.59618 4.64573 2.28527C3.58161 2.97436 2.6965 3.90647 2.06334 5.00478C1.43018 6.1031 1.06711 7.33616 1.00404 8.60234C0.940984 9.86852 1.17974 11.1316 1.70064 12.2873C2.22153 13.4431 3.00965 14.4586 4.00003 15.25" />
      </g>
      <defs>
        <clippath id="clip0">
          <rect width="24" height="24" fill="white" />
        </clippath>
      </defs>
    </svg>
  );
});

CloudRain.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CloudRain.displayName = 'CloudRain';

export default CloudRain;
