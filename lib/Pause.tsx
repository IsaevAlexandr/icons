import * as React from 'react';
import {SVGProps} from 'react';
const Pause = (props: SVGProps<SVGSVGElement>) => (
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
            d="M3.5 3h1.75a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5H3.5a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5Zm-2 .5a2 2 0 0 1 2-2h1.75a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H3.5a2 2 0 0 1-2-2v-9Zm9.25-.5h1.75a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-1.75a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5Zm-2 .5a2 2 0 0 1 2-2h1.75a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-1.75a2 2 0 0 1-2-2v-9Z"
            clipRule="evenodd"
        />
    </svg>
);
export default Pause;
