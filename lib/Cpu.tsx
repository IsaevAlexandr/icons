import * as React from 'react';
import {SVGProps} from 'react';
const Cpu = (props: SVGProps<SVGSVGElement>) => (
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
                d="M7 1.25a.75.75 0 0 0-1.5 0V2.5a3 3 0 0 0-3 3H1.25a.75.75 0 0 0 0 1.5H2.5v2H1.25a.75.75 0 0 0 0 1.5H2.5a3 3 0 0 0 3 3v1.25a.75.75 0 0 0 1.5 0V13.5h2v1.25a.75.75 0 0 0 1.5 0V13.5a3 3 0 0 0 3-3h1.25a.75.75 0 1 0 0-1.5H13.5V7h1.25a.75.75 0 1 0 0-1.5H13.5a3 3 0 0 0-3-3V1.25a.75.75 0 0 0-1.5 0V2.5H7V1.25ZM10.5 4h-5A1.5 1.5 0 0 0 4 5.5v5A1.5 1.5 0 0 0 5.5 12h5a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 10.5 4Zm0 2.25a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0-.75.75v3.5a.75.75 0 0 0 .75.75h3.5a.75.75 0 0 0 .75-.75v-3.5ZM7 7h2v2H7V7Z"
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
export default Cpu;
