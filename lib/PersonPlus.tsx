import * as React from 'react';
import {SVGProps} from 'react';
const PersonPlus = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8 6.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM8 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1 1.225a.71.71 0 0 0-.679-.72A11.087 11.087 0 0 0 8 8.5c-3.85 0-7 2-7 4A2.5 2.5 0 0 0 3.5 15h8.75a.75.75 0 0 0 0-1.5H3.5a1 1 0 0 1-1-1c0-.204.22-.809 1.32-1.459C4.838 10.44 6.32 10 8 10c.058 0 .117 0 .175.002.442.008.825-.335.825-.777ZM13.75 8a.75.75 0 0 0-1.5 0v1.25H11a.75.75 0 0 0 0 1.5h1.25V12a.75.75 0 0 0 1.5 0v-1.25H15a.75.75 0 0 0 0-1.5h-1.25V8Z"
            clipRule="evenodd"
        />
    </svg>
);
export default PersonPlus;
