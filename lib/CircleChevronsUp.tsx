import * as React from 'react';
import {SVGProps} from 'react';
const CircleChevronsUp = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8 13.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11ZM8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm2.28-3.97a.75.75 0 0 1-1.06 0L8 9.81l-1.22 1.22a.75.75 0 1 1-1.06-1.06l1.75-1.75a.75.75 0 0 1 1.06 0l1.75 1.75a.75.75 0 0 1 0 1.06ZM9.22 7.28a.75.75 0 1 0 1.06-1.06L8.53 4.47a.75.75 0 0 0-1.06 0L5.72 6.22a.75.75 0 0 0 1.06 1.06L8 6.06l1.22 1.22Z"
            clipRule="evenodd"
        />
    </svg>
);
export default CircleChevronsUp;
