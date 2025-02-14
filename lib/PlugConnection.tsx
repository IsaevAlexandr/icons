import * as React from 'react';
import {SVGProps} from 'react';
const PlugConnection = (props: SVGProps<SVGSVGElement>) => (
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
                d="M15.53 1.53A.75.75 0 0 0 14.47.47l-1.29 1.29a4.243 4.243 0 0 0-5.423.483l-.58.58a.958.958 0 0 0 0 1.354l4.646 4.646a.958.958 0 0 0 1.354 0l.58-.58a4.243 4.243 0 0 0 .484-5.423l1.29-1.29Zm-8.5 4.94a.75.75 0 0 1 0 1.06L5.78 8.78l1.44 1.44 1.25-1.25a.75.75 0 0 1 1.06 1.06l-1.25 1.25.543.543a.958.958 0 0 1 0 1.354l-.58.58a4.243 4.243 0 0 1-5.423.484l-1.29 1.29A.75.75 0 0 1 .47 14.47l1.29-1.29a4.243 4.243 0 0 1 .483-5.423l.58-.58a.958.958 0 0 1 1.354 0l.543.543 1.25-1.25a.75.75 0 0 1 1.06 0ZM3.5 8.62l-.197.197a2.743 2.743 0 0 0 3.879 3.879l.197-.197L3.5 8.621Zm9.197-1.439-.197.197L8.621 3.5l.197-.197a2.743 2.743 0 0 1 3.879 3.879Z"
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
export default PlugConnection;
