import * as React from 'react';
import {SVGProps} from 'react';
const GeoPolygons = (props: SVGProps<SVGSVGElement>) => (
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
            d="M4.5 3h5.793L7.77 6.965 3.09 3.987A1.5 1.5 0 0 1 4.5 3Zm7 10H5.707l2.926-4.597 3.38-5.313A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5Zm-7-11.5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3h-7Z"
            clipRule="evenodd"
        />
    </svg>
);
export default GeoPolygons;
