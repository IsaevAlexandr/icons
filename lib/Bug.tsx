import * as React from 'react';
import {SVGProps} from 'react';
const Bug = (props: SVGProps<SVGSVGElement>) => (
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
                d="M5.865.031a.75.75 0 0 1 .918.53l.531 1.981a5.554 5.554 0 0 1 2.384.225 2.5 2.5 0 1 1 3.535 3.535 5.496 5.496 0 0 1 .225 2.384l1.98.53a.75.75 0 0 1-.388 1.45l-1.98-.53a5.49 5.49 0 0 1-.687 1.187l1.45 1.45a.75.75 0 0 1-1.06 1.06l-1.45-1.45a5.493 5.493 0 0 1-1.188.687l.53 1.98a.75.75 0 1 1-1.448.388l-.531-1.98a5.5 5.5 0 0 1-6.144-6.143l-1.98-.532A.75.75 0 0 1 .95 5.334l1.98.531c.18-.426.411-.824.687-1.188l-1.45-1.45a.75.75 0 1 1 1.06-1.06l1.45 1.45a5.494 5.494 0 0 1 1.188-.687L5.335.95a.75.75 0 0 1 .53-.919ZM8 12a4 4 0 1 0-3.309-1.752L8.42 6.52a.75.75 0 0 1 1.06 1.06l-3.728 3.73c.64.435 1.414.69 2.248.69Z"
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
export default Bug;
