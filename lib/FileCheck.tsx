import * as React from 'react';
import {SVGProps} from 'react';
const FileCheck = (props: SVGProps<SVGSVGElement>) => (
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
            d="M11 13.5H5A1.5 1.5 0 0 1 3.5 12V4A1.5 1.5 0 0 1 5 2.5h2.757a1.5 1.5 0 0 1 1.061.44l3.243 3.242a1.5 1.5 0 0 1 .439 1.06V12a1.5 1.5 0 0 1-1.5 1.5Zm2.121-8.379A3 3 0 0 1 14 7.243V12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h2.757a3 3 0 0 1 2.122.879L13.12 5.12ZM10.85 7.65a.75.75 0 1 0-1.2-.9L7.469 9.658 6.28 8.47a.75.75 0 0 0-1.06 1.06l1.8 1.8a.75.75 0 0 0 1.13-.08l2.7-3.6Z"
            clipRule="evenodd"
        />
    </svg>
);
export default FileCheck;
