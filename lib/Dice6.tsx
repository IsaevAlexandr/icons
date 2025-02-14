import * as React from 'react';
import {SVGProps} from 'react';
const Dice6 = (props: SVGProps<SVGSVGElement>) => (
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
            d="M11.5 3h-7A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3Zm-7-1.5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3h-7ZM11.65 5a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0ZM5.5 12.15a1.15 1.15 0 1 0 0-2.3 1.15 1.15 0 0 0 0 2.3ZM11.65 11a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0ZM5.5 6.15a1.15 1.15 0 1 0 0-2.3 1.15 1.15 0 0 0 0 2.3ZM11.65 8a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0ZM5.5 9.15a1.15 1.15 0 1 0 0-2.3 1.15 1.15 0 0 0 0 2.3Z"
            clipRule="evenodd"
        />
    </svg>
);
export default Dice6;
