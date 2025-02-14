import * as React from 'react';
import {SVGProps} from 'react';
const CircleChevronDown = (props: SVGProps<SVGSVGElement>) => (
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
            d="M2.5 8a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0ZM1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Zm5.03-1.28a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 1 0-1.06-1.06L8 8.69 6.03 6.72Z"
            clipRule="evenodd"
        />
    </svg>
);
export default CircleChevronDown;
