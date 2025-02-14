import * as React from 'react';
import {SVGProps} from 'react';
const BarsAscendingAlignCenter = (props: SVGProps<SVGSVGElement>) => (
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
            d="M1 12.75c0 .414.336.75.75.75h12.5a.75.75 0 0 0 0-1.5H1.75a.75.75 0 0 0-.75.75ZM3 8c0 .414.336.75.75.75h8.5a.75.75 0 0 0 0-1.5h-8.5A.75.75 0 0 0 3 8Zm3.75-4a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 1 0 1.5h-2.5Z"
            clipRule="evenodd"
        />
    </svg>
);
export default BarsAscendingAlignCenter;
