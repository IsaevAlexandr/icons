import * as React from 'react';
import {SVGProps} from 'react';
const Diamond = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        {...props}
    >
        <g clipPath="url(#a)">
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M14.01 6.94 9.06 1.99a1.5 1.5 0 0 0-2.12 0L1.99 6.94a1.5 1.5 0 0 0 0 2.12l4.95 4.95a1.5 1.5 0 0 0 2.12 0l4.95-4.95a1.5 1.5 0 0 0 0-2.12ZM10.121.928a3 3 0 0 0-4.242 0l-4.95 4.95a3 3 0 0 0 0 4.242l4.95 4.95a3 3 0 0 0 4.242 0l4.95-4.95a3 3 0 0 0 0-4.242l-4.95-4.95Z"
                clipRule="evenodd"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
        </defs>
    </svg>
);
export default Diamond;
