import * as React from 'react';
import {SVGProps} from 'react';
const DiamondFill = (props: SVGProps<SVGSVGElement>) => (
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
                d="M5.879.929a3 3 0 0 1 4.242 0l4.95 4.95a3 3 0 0 1 0 4.242l-4.95 4.95a3 3 0 0 1-4.242 0l-4.95-4.95a3 3 0 0 1 0-4.242l4.95-4.95Z"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
        </defs>
    </svg>
);
export default DiamondFill;
