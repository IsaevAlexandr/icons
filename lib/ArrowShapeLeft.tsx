import * as React from 'react';
import {SVGProps} from 'react';
const ArrowShapeLeft = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8.5 6V3.33a.33.33 0 0 0-.543-.252L2.732 7.499a.656.656 0 0 0 0 1.002l5.225 4.421a.33.33 0 0 0 .543-.252V10H13a.5.5 0 0 0 .5-.5v-3A.5.5 0 0 0 13 6H8.5ZM13 4.5a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3v1.17a1.83 1.83 0 0 1-3.012 1.397L1.763 9.646a2.156 2.156 0 0 1 0-3.292l5.225-4.421A1.83 1.83 0 0 1 10 3.33V4.5h3Z"
            clipRule="evenodd"
        />
    </svg>
);
export default ArrowShapeLeft;
