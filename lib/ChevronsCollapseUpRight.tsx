import * as React from 'react';
import {SVGProps} from 'react';
const ChevronsCollapseUpRight = (props: SVGProps<SVGSVGElement>) => (
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
                d="M15.25 6.993a.75.75 0 0 0 0-1.5H10.5V.75a.75.75 0 1 0-1.5 0v5.493c0 .414.336.75.75.75h5.5ZM.75 9.007a.75.75 0 1 0 0 1.5H5.5v4.743a.75.75 0 0 0 1.5 0V9.757a.75.75 0 0 0-.75-.75H.75Z"
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
export default ChevronsCollapseUpRight;
