import * as React from 'react';
import {SVGProps} from 'react';
const CirclePause = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8 13.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11ZM8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm1.75-9.75a1 1 0 0 1 1 1v3.5a1 1 0 1 1-2 0v-3.5a1 1 0 0 1 1-1Zm-2.5 1a1 1 0 1 0-2 0v3.5a1 1 0 1 0 2 0v-3.5Z"
            clipRule="evenodd"
        />
    </svg>
);
export default CirclePause;
