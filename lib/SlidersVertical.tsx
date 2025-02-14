import * as React from 'react';
import {SVGProps} from 'react';
const SlidersVertical = (props: SVGProps<SVGSVGElement>) => (
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
            d="M10.998 8.499a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm-.75-1.406a3.001 3.001 0 0 0 0 5.811v1.347a.75.75 0 0 0 1.5 0v-1.347a3.001 3.001 0 0 0 0-5.811V1.748a.75.75 0 0 0-1.5 0v5.345Zm-4.5 7.158V8.906a3.001 3.001 0 0 0 0-5.81V1.747a.75.75 0 1 0-1.5 0v1.347a3.001 3.001 0 0 0 0 5.811v5.345a.75.75 0 0 0 1.5 0Zm.75-8.25a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
            clipRule="evenodd"
        />
    </svg>
);
export default SlidersVertical;
