import * as React from 'react';
import {SVGProps} from 'react';
const Cubes3Overlap = (props: SVGProps<SVGSVGElement>) => (
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
            d="M9.5 2.5h-3A1.5 1.5 0 0 0 5 4v1h1a3 3 0 0 1 3 3v.5h.5A1.5 1.5 0 0 0 11 7V4a1.5 1.5 0 0 0-1.5-1.5ZM9 10v1c0 .546-.146 1.059-.401 1.5H13a1.5 1.5 0 0 0 1.5-1.5V8A1.5 1.5 0 0 0 13 6.5h-.5V7a3 3 0 0 1-3 3H9Zm3.5-5V4a3 3 0 0 0-3-3h-3a3 3 0 0 0-3 3v1H3a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3h-.5ZM6 6.5H3A1.5 1.5 0 0 0 1.5 8v3A1.5 1.5 0 0 0 3 12.5h3A1.5 1.5 0 0 0 7.5 11V8A1.5 1.5 0 0 0 6 6.5Z"
            clipRule="evenodd"
        />
    </svg>
);
export default Cubes3Overlap;
