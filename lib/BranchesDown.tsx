import * as React from 'react';
import {SVGProps} from 'react';
const BranchesDown = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M13.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm-.75-1.372a2.251 2.251 0 1 0 1.5 0v-.378a3 3 0 0 0-3-3H8.75V5.372a2.25 2.25 0 1 0-1.5 0V7.25H5a3 3 0 0 0-3 3v.378a2.251 2.251 0 1 0 1.5 0v-.378A1.5 1.5 0 0 1 5 8.75h2.25v1.878a2.251 2.251 0 1 0 1.5 0V8.75H11a1.5 1.5 0 0 1 1.5 1.5v.378ZM2.75 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm4.5.75a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM8 2.5A.75.75 0 1 0 8 4a.75.75 0 0 0 0-1.5Z"
            clipRule="evenodd"
        />
    </svg>
);
export default BranchesDown;
