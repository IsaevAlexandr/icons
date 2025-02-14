import * as React from 'react';
import {SVGProps} from 'react';
const HandPointLeft = (props: SVGProps<SVGSVGElement>) => (
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
                d="m13.5 6-2.906-3.737a1.978 1.978 0 0 0-3.48 1.694L7.375 5H1.942a1.942 1.942 0 0 0-.421 3.838L4.5 9.5l.457 2.744a3 3 0 0 0 3.732 2.405L13 13.5l.5-7.5Zm-5.197 7.2 3.272-.872.39-5.858L9.41 3.184a.478.478 0 0 0-.84.41l.26 1.042.466 1.864H1.942a.442.442 0 0 0-.096.874l2.98.662.987.22.167.997.457 2.744A1.5 1.5 0 0 0 8.303 13.2Zm7.195.103a.75.75 0 0 1-1.496-.106l.5-7a.75.75 0 0 1 1.496.106l-.5 7Z"
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
export default HandPointLeft;
