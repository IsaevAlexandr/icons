import * as React from 'react';
import {SVGProps} from 'react';
const HandPointRight = (props: SVGProps<SVGSVGElement>) => (
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
                d="m2.5 6 2.906-3.737a1.978 1.978 0 0 1 3.48 1.694L8.626 5h5.432a1.942 1.942 0 0 1 .421 3.838L11.5 9.5l-.457 2.744a3 3 0 0 1-3.732 2.405L3 13.5 2.5 6Zm5.197 7.2-3.272-.872-.39-5.858L6.59 3.184a.478.478 0 0 1 .84.41l-.26 1.042L6.704 6.5h7.354a.442.442 0 0 1 .096.874l-2.98.662-.987.22-.166.997-.458 2.744A1.5 1.5 0 0 1 7.697 13.2Zm-7.195.103a.75.75 0 0 0 1.496-.106l-.5-7a.75.75 0 1 0-1.496.106l.5 7Z"
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
export default HandPointRight;
