import * as React from 'react';
import {SVGProps} from 'react';
const Circles4Diamond = (props: SVGProps<SVGSVGElement>) => (
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
                d="M10.502 4.392a2.75 2.75 0 1 0-5.004-2.285 2.75 2.75 0 0 0 5.004 2.285Zm-4.75 2.466a2.76 2.76 0 0 0-1.36-1.36 2.75 2.75 0 1 0 1.36 1.36Zm1.106 3.39a2.76 2.76 0 0 0-1.36 1.36 2.75 2.75 0 1 0 1.36-1.36Zm3.39-1.106a2.753 2.753 0 0 0 1.36 1.36 2.75 2.75 0 1 0-1.36-1.36ZM8 2a1.25 1.25 0 1 0 0 2.5A1.25 1.25 0 0 0 8 2Zm6 6a1.25 1.25 0 1 0-2.5 0A1.25 1.25 0 0 0 14 8Zm-6 3.5A1.25 1.25 0 1 0 8 14a1.25 1.25 0 0 0 0-2.5ZM4.5 8A1.25 1.25 0 1 0 2 8a1.25 1.25 0 0 0 2.5 0Z"
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
export default Circles4Diamond;
