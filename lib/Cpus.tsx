import * as React from 'react';
import {SVGProps} from 'react';
const Cpus = (props: SVGProps<SVGSVGElement>) => (
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
                d="M7.75 0a.75.75 0 0 1 .75.75V2h2V.75a.75.75 0 0 1 1.5 0V2a2 2 0 0 1 2 2h1.25a.75.75 0 0 1 0 1.5H14v2h1.25a.75.75 0 0 1 0 1.5H14a2 2 0 0 1-2 2h-1v1a2 2 0 0 1-2 2v1.25a.75.75 0 0 1-1.5 0V14h-2v1.25a.75.75 0 0 1-1.5 0V14a2 2 0 0 1-2-2H.75a.75.75 0 0 1 0-1.5H2v-2H.75a.75.75 0 0 1 0-1.5H2a2 2 0 0 1 2-2h1V4a2 2 0 0 1 2-2V.75A.75.75 0 0 1 7.75 0ZM6.5 5H9a2 2 0 0 1 2 2v2.5h1a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0-.5.5v1Zm3 2a.5.5 0 0 0-.5-.5H4a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V7Z"
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
export default Cpus;
