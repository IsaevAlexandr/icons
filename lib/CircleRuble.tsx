import * as React from 'react';
import {SVGProps} from 'react';
const CircleRuble = (props: SVGProps<SVGSVGElement>) => (
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
            d="M13.5 8a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0ZM15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM6.75 4a.75.75 0 0 0-.75.75v2.5h-.125a.75.75 0 1 0 0 1.5H6v.5h-.125a.75.75 0 1 0 0 1.5H6v.5a.75.75 0 0 0 1.5 0v-.5H9a.75.75 0 0 0 0-1.5H7.5v-.5h1.125a2.375 2.375 0 0 0 0-4.75H6.75Zm1.875 3.25H7.5V5.5h1.125a.875.875 0 1 1 0 1.75Z"
            clipRule="evenodd"
        />
    </svg>
);
export default CircleRuble;
