import * as React from 'react';
import {SVGProps} from 'react';
const ChartPie = (props: SVGProps<SVGSVGElement>) => (
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
            d="M13.45 8.75a5.501 5.501 0 1 1-6.2-6.2V8c0 .414.336.75.75.75h5.45Zm0-1.5h-4.7v-4.7a5.503 5.503 0 0 1 4.7 4.7ZM15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            clipRule="evenodd"
        />
    </svg>
);
export default ChartPie;
