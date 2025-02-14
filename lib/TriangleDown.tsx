import * as React from 'react';
import {SVGProps} from 'react';
const TriangleDown = (props: SVGProps<SVGSVGElement>) => (
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
            d="M7.134 13.005 2.217 4.5A1 1 0 0 1 3.083 3h9.834a1 1 0 0 1 .866 1.5l-4.917 8.505a1 1 0 0 1-1.732 0Zm3.03.751c-.962 1.665-3.366 1.665-4.329 0L.918 5.251C-.045 3.584 1.158 1.5 3.083 1.5h9.834c1.925 0 3.128 2.084 2.164 3.751l-4.917 8.505Z"
            clipRule="evenodd"
        />
    </svg>
);
export default TriangleDown;
