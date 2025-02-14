import * as React from 'react';
import {SVGProps} from 'react';
const HandPointDown = (props: SVGProps<SVGSVGElement>) => (
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
                d="M6 2.5 2.263 5.406a1.978 1.978 0 0 0 1.694 3.48L5 8.625v5.433a1.942 1.942 0 0 0 3.838.421L9.5 11.5l2.744-.457a3 3 0 0 0 2.405-3.732L13.5 3 6 2.5Zm7.2 5.197-.872-3.272-5.858-.39L3.184 6.59a.478.478 0 0 0 .41.84l1.042-.26L6.5 6.704v7.354a.442.442 0 0 0 .874.096l.662-2.98.22-.987.997-.167 2.744-.457A1.5 1.5 0 0 0 13.2 7.697Zm.103-7.195a.75.75 0 0 1-.106 1.496l-7-.5A.75.75 0 1 1 6.303.002l7 .5Z"
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
export default HandPointDown;
