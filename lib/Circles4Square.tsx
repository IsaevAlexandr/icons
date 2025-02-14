import * as React from 'react';
import {SVGProps} from 'react';
const Circles4Square = (props: SVGProps<SVGSVGElement>) => (
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
            d="M3.047 7.125A3 3 0 1 0 4.5 1.5a3 3 0 0 0-1.453 5.625ZM4.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm5.547 1.125A3 3 0 1 0 11.5 1.5a3 3 0 0 0-1.453 5.625ZM11.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-7 8.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm1.5-3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm4.047 2.625A3 3 0 1 0 11.5 8.5a3 3 0 0 0-1.453 5.625ZM11.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
            clipRule="evenodd"
        />
    </svg>
);
export default Circles4Square;
