import * as React from 'react';
import {SVGProps} from 'react';
const NodesLeft = (props: SVGProps<SVGSVGElement>) => (
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
            d="M5 2.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM2 4a3 3 0 1 1 5.895.79L9.85 5.908a3 3 0 1 1 0 4.185L7.895 11.21A3.003 3.003 0 0 1 5 15a3 3 0 1 1 2.15-5.092L9.105 8.79a3.003 3.003 0 0 1 0-1.58L7.15 6.092A3 3 0 0 1 2 4Zm3 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM13.5 8a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"
            clipRule="evenodd"
        />
    </svg>
);
export default NodesLeft;
