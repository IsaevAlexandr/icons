import * as React from 'react';
import {SVGProps} from 'react';
const ChartTreemap = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8 3H4.5A1.5 1.5 0 0 0 3 4.5v4h5V3Zm1.5 0v5.5H13v-4A1.5 1.5 0 0 0 11.5 3h-2ZM3 11.5V10h3v3H4.5A1.5 1.5 0 0 1 3 11.5Zm8.25 1.5H7.5v-3h3.75v3ZM4.5 1.5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3h-7Z"
            clipRule="evenodd"
        />
    </svg>
);
export default ChartTreemap;
