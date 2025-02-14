import * as React from 'react';
import {SVGProps} from 'react';
const ArrowShapeUp = (props: SVGProps<SVGSVGElement>) => (
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
            d="M10 8.5h2.67a.33.33 0 0 0 .252-.542L8.5 2.733a.656.656 0 0 0-1.002 0l-4.42 5.225a.33.33 0 0 0 .252.542H6V13a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V8.5Zm1.5 4.5a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3H3.33a1.83 1.83 0 0 1-1.398-3.01l4.42-5.225a2.156 2.156 0 0 1 3.293 0l4.42 5.225A1.83 1.83 0 0 1 12.67 10H11.5v3Z"
            clipRule="evenodd"
        />
    </svg>
);
export default ArrowShapeUp;
