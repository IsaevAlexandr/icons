import * as React from 'react';
import {SVGProps} from 'react';
const ChartColumn = (props: SVGProps<SVGSVGElement>) => (
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
            d="M11.5 3.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5Zm-2.5 9a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h2Zm-4.5 0A.5.5 0 0 0 5 12v-2a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2Zm-1 1.5h-1a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2c.173 0 .34.022.5.063V7a2 2 0 0 1 2-2h2c.173 0 .34.022.5.063V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-10Z"
            clipRule="evenodd"
        />
    </svg>
);
export default ChartColumn;
