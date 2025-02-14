import * as React from 'react';
import {SVGProps} from 'react';
const NodesRight = (props: SVGProps<SVGSVGElement>) => (
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
            d="M11 2.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM14 4a3 3 0 1 0-5.895.79L6.15 5.908a3 3 0 1 0 0 4.185l1.955 1.117A3.003 3.003 0 0 0 11 15a3 3 0 1 0-2.15-5.092L6.895 8.79a3.003 3.003 0 0 0 0-1.58L8.85 6.092A3 3 0 0 0 14 4Zm-3 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM2.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
            clipRule="evenodd"
        />
    </svg>
);
export default NodesRight;
