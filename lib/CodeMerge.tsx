import * as React from 'react';
import {SVGProps} from 'react';
const CodeMerge = (props: SVGProps<SVGSVGElement>) => (
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
            d="M5.312 11.091a1.25 1.25 0 1 0-2.123 1.316 1.25 1.25 0 0 0 2.123-1.316ZM3.188 4.909a1.25 1.25 0 1 1 2.125-1.318 1.25 1.25 0 0 1-2.125 1.318ZM5 6.896v2.208a2.751 2.751 0 1 1-1.5 0V6.896A2.751 2.751 0 1 1 6.896 3.5H9.5a3 3 0 0 1 3 3v2.604a2.751 2.751 0 1 1-1.5 0V6.5A1.5 1.5 0 0 0 9.5 5H6.896A2.756 2.756 0 0 1 5 6.896Zm7.812 4.195a1.25 1.25 0 1 1-2.125 1.318 1.25 1.25 0 0 1 2.125-1.318Z"
            clipRule="evenodd"
        />
    </svg>
);
export default CodeMerge;
