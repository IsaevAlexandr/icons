import * as React from 'react';
import {SVGProps} from 'react';
const GeoPin = (props: SVGProps<SVGSVGElement>) => (
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
            d="M10.293 3H4.5a1.5 1.5 0 0 0-1.41.987L7 6.475a2.5 2.5 0 0 1 2.654-2.47L10.293 3Zm.785 1.56a2.501 2.501 0 0 1-.836 4.328.75.75 0 0 1 .008.112v2a.75.75 0 0 1-1.5 0V9c0-.038.003-.075.008-.112a2.483 2.483 0 0 1-.347-.137L5.707 13H11.5a1.5 1.5 0 0 0 1.5-1.5v-7a1.5 1.5 0 0 0-.987-1.41l-.935 1.47Zm-7.091 8.35 2.978-4.68L3 5.707V11.5c0 .648.411 1.2.987 1.41ZM1.5 4.5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3v-7Zm9 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
            clipRule="evenodd"
        />
    </svg>
);
export default GeoPin;
