import * as React from 'react';
import {SVGProps} from 'react';
const ChartColumnStacked = (props: SVGProps<SVGSVGElement>) => (
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
            d="M11 4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V4Zm-2 8.5a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h2Zm-4.5 0A.5.5 0 0 0 5 12v-2a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2ZM2 7.5V4a.5.5 0 0 1 .5-.5h2A.5.5 0 0 1 5 4v3.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5Zm5-4h2a.5.5 0 0 1 .5.5v.5A.5.5 0 0 1 9 5H7a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5ZM7 2H2.5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7Z"
            clipRule="evenodd"
        />
    </svg>
);
export default ChartColumnStacked;
