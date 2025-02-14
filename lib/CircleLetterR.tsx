import * as React from 'react';
import {SVGProps} from 'react';
const CircleLetterR = (props: SVGProps<SVGSVGElement>) => (
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
            d="M13.5 8a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0ZM15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM5.75 5.5a.75.75 0 0 1 .75-.75h1.75a2.25 2.25 0 0 1 1.38 4.028l.771 1.35a.75.75 0 0 1-1.302.744L8.172 9.25H7.25v1.25a.75.75 0 0 1-1.5 0v-5Zm1.5 2.25h1a.75.75 0 0 0 0-1.5h-1v1.5Z"
            clipRule="evenodd"
        />
    </svg>
);
export default CircleLetterR;
