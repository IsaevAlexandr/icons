import * as React from 'react';
import {SVGProps} from 'react';
const WeightHanging = (props: SVGProps<SVGSVGElement>) => (
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
            d="M7.25 4.886A2.497 2.497 0 0 1 5.5 2.5a2.5 2.5 0 1 1 3.25 2.386V6h2.904a2.5 2.5 0 0 1 2.389 1.765l1.36 4.423A2.173 2.173 0 0 1 13.328 15H2.673a2.173 2.173 0 0 1-2.077-2.812l.252-.82 1.109-3.603A2.5 2.5 0 0 1 4.347 6H7.25V4.886ZM9 2.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-4.654 5a1 1 0 0 0-.955.706L2.03 12.629a.673.673 0 0 0 .643.871h10.654a.673.673 0 0 0 .643-.871l-1.36-4.423a1 1 0 0 0-.956-.706H4.346Z"
            clipRule="evenodd"
        />
    </svg>
);
export default WeightHanging;
