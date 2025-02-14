import * as React from 'react';
import {SVGProps} from 'react';
const NodesDown = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M13.5 11a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM12 14a3 3 0 1 0-.79-5.895L10.092 6.15a3 3 0 1 0-4.185 0L4.79 8.105A3.003 3.003 0 0 0 1 11a3 3 0 1 0 5.092-2.15L7.21 6.895a3.003 3.003 0 0 0 1.58 0L9.908 8.85A3 3 0 0 0 12 14Zm-6.5-3a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM8 2.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
            clipRule="evenodd"
        />
    </svg>
);
export default NodesDown;
