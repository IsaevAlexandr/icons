import * as React from 'react';
import {SVGProps} from 'react';
const Sphere = (props: SVGProps<SVGSVGElement>) => (
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
            d="M13.5 8a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0ZM15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM8 4a.75.75 0 0 0 0 1.5A2.5 2.5 0 0 1 10.5 8 .75.75 0 1 0 12 8a4 4 0 0 0-4-4Z"
            clipRule="evenodd"
        />
    </svg>
);
export default Sphere;
