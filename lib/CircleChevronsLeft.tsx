import * as React from 'react';
import {SVGProps} from 'react';
const CircleChevronsLeft = (props: SVGProps<SVGSVGElement>) => (
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
            d="M13.5 8a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0ZM15 8A7 7 0 1 0 1 8a7 7 0 0 0 14 0Zm-3.97-2.28a.75.75 0 0 1 0 1.06L9.81 8l1.22 1.22a.75.75 0 1 1-1.06 1.06L8.22 8.53a.75.75 0 0 1 0-1.06l1.75-1.75a.75.75 0 0 1 1.06 0ZM7.28 6.78a.75.75 0 0 0-1.06-1.06L4.47 7.47a.75.75 0 0 0 0 1.06l1.75 1.75a.75.75 0 1 0 1.06-1.06L6.06 8l1.22-1.22Z"
            clipRule="evenodd"
        />
    </svg>
);
export default CircleChevronsLeft;
