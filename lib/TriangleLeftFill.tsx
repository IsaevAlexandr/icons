import * as React from 'react';
import {SVGProps} from 'react';
const TriangleLeftFill = (props: SVGProps<SVGSVGElement>) => (
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
            d="M2.244 10.164c-1.665-.962-1.665-3.366 0-4.328L10.749.919c1.666-.964 3.751.239 3.751 2.164v9.834c0 1.925-2.085 3.128-3.751 2.164l-8.505-4.917Z"
        />
    </svg>
);
export default TriangleLeftFill;
