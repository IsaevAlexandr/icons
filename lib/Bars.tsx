import * as React from 'react';
import {SVGProps} from 'react';
const Bars = (props: SVGProps<SVGSVGElement>) => (
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
            d="M1.25 3.25A.75.75 0 0 1 2 2.5h12A.75.75 0 0 1 14 4H2a.75.75 0 0 1-.75-.75Zm0 4.75A.75.75 0 0 1 2 7.25h12a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 8ZM2 12a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5H2Z"
            clipRule="evenodd"
        />
    </svg>
);
export default Bars;
