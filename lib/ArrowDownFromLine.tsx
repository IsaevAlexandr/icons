import * as React from 'react';
import {SVGProps} from 'react';
const ArrowDownFromLine = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8.53 14.78a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06l1.22 1.22V4.75a.75.75 0 0 1 1.5 0v7.69l1.22-1.22a.75.75 0 1 1 1.06 1.06l-2.5 2.5ZM14.25 2.5a.75.75 0 0 0 0-1.5H1.75a.75.75 0 0 0 0 1.5h12.5Z"
            clipRule="evenodd"
        />
    </svg>
);
export default ArrowDownFromLine;
