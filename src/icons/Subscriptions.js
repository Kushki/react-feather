import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Subscriptions = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M12 8V20" />
      <path d="M15.5 10H9.99997C7.50001 10 7.5 14 9.99997 14H14C16.5 14 16.5 18 14 18H8.49998" />
      <path d="M19.7778 3H4.22222C2.99492 3 2 3.99492 2 5.22222V20.7778C2 22.0051 2.99492 23 4.22222 23H19.7778C21.0051 23 22 22.0051 22 20.7778V5.22222C22 3.99492 21.0051 3 19.7778 3Z" />
      <path d="M16 1V5" />
      <path d="M8 1V5" />
    </svg>
  );
});

Subscriptions.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Subscriptions.displayName = 'Subscriptions';

export default Subscriptions;
