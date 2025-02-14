import * as React from 'react';
import {SVGProps} from 'react';
const ChartDonut = (props: SVGProps<SVGSVGElement>) => (
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
            d="M4.111 2.18a7 7 0 1 1 7.778 11.64A7 7 0 0 1 4.111 2.18ZM8 6.02a1.98 1.98 0 1 0 0 3.96 1.98 1.98 0 0 0 0-3.96Zm-.75-3.469a5.5 5.5 0 1 0 6.199 6.199h-2.05a3.481 3.481 0 0 1-5.86 1.71A3.48 3.48 0 0 1 7.25 4.603v-2.05Zm1.5 0v2.05a3.48 3.48 0 0 1 2.648 2.649h2.05A5.498 5.498 0 0 0 8.75 2.551Z"
            clipRule="evenodd"
        />
    </svg>
);
export default ChartDonut;
