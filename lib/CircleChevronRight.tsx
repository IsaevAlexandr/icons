import * as React from 'react';
import {SVGProps} from 'react';
const CircleChevronRight = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11ZM8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14ZM6.72 9.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 1.06L8.69 8 6.72 9.97Z"
            clipRule="evenodd"
        />
    </svg>
);
export default CircleChevronRight;
