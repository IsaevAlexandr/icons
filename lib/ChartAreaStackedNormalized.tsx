import * as React from 'react';
import {SVGProps} from 'react';
const ChartAreaStackedNormalized = (props: SVGProps<SVGSVGElement>) => (
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
            d="M13.5 12.5h-11A.5.5 0 0 1 2 12v-1.611l2.812-1.985a1.25 1.25 0 0 1 1.414-.019l1.753 1.169a2.75 2.75 0 0 0 3.757-.681L14 5.728V12a.5.5 0 0 1-.5.5Zm.22-8.95-3.201 4.446a1.25 1.25 0 0 1-1.708.31L7.058 7.137a2.75 2.75 0 0 0-3.111.042L2 8.553V4a.5.5 0 0 1 .5-.5h11c.079 0 .153.018.22.05ZM.5 9.992V4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2V9.991Z"
            clipRule="evenodd"
        />
    </svg>
);
export default ChartAreaStackedNormalized;
