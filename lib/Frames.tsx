import * as React from 'react';
import {SVGProps} from 'react';
const Frames = (props: SVGProps<SVGSVGElement>) => (
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
                d="M13.25.75a.75.75 0 0 1 .75.75V2h.5a.75.75 0 0 1 0 1.5H14v5h.5a.75.75 0 0 1 0 1.5H14v.5a.75.75 0 0 1-1.5 0V10H10v2.5h.5a.75.75 0 0 1 0 1.5H10v.5a.75.75 0 0 1-1.5 0V14h-5v.5a.75.75 0 0 1-1.5 0V14h-.5a.75.75 0 0 1 0-1.5H2v-5h-.5a.75.75 0 0 1 0-1.5H2v-.5a.75.75 0 0 1 1.5 0V6H6V3.5h-.5a.75.75 0 0 1 0-1.5H6v-.5a.75.75 0 0 1 1.5 0V2h5v-.5a.75.75 0 0 1 .75-.75ZM7.5 6h1v-.5a.75.75 0 0 1 1.5 0V6h.5a.75.75 0 0 1 0 1.5H10v1h2.5v-5h-5V6Zm-4 6.5v-5h5v5h-5Z"
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
export default Frames;
