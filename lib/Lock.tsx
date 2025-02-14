import * as React from 'react';
import {SVGProps} from 'react';
const Lock = (props: SVGProps<SVGSVGElement>) => (
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
            d="M10.5 6V5a2.5 2.5 0 0 0-5 0v1h5ZM4 5v1a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3V5a4 4 0 0 0-8 0Zm6.5 2.5H12A1.5 1.5 0 0 1 13.5 9v3a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 12V9A1.5 1.5 0 0 1 4 7.5h6.5Zm-1.75 2a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2Z"
            clipRule="evenodd"
        />
    </svg>
);
export default Lock;
