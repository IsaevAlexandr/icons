import * as React from 'react';
import {SVGProps} from 'react';
const CircleChevronDownFill = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM6.03 6.72a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 1 0-1.06-1.06L8 8.69 6.03 6.72Z"
            clipRule="evenodd"
        />
    </svg>
);
export default CircleChevronDownFill;
