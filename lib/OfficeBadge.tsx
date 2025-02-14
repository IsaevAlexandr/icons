import * as React from 'react';
import {SVGProps} from 'react';
const OfficeBadge = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8.75 1.75a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0v-3ZM5.25 4a.75.75 0 0 1 0 1.5H4A1.5 1.5 0 0 0 2.5 7v4A1.5 1.5 0 0 0 4 12.5h8a1.5 1.5 0 0 0 1.5-1.5V7A1.5 1.5 0 0 0 12 5.5h-1.25a.75.75 0 0 1 0-1.5H12a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1.25Zm6 4.5a.75.75 0 0 0 0-1.5h-6.5a.75.75 0 0 0 0 1.5h6.5ZM9 10.25a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1 0-1.5h3.5a.75.75 0 0 1 .75.75Z"
            clipRule="evenodd"
        />
    </svg>
);
export default OfficeBadge;
