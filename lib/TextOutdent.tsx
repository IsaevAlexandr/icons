import * as React from 'react';
import {SVGProps} from 'react';
const TextOutdent = (props: SVGProps<SVGSVGElement>) => (
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
            d="M13.25 2H2.75a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5Zm0 3.5h-5.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5Zm0 3.5h-5.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5Zm-10.5 3.5h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5Zm2.01-7a.74.74 0 0 0-.463.162L2.39 7.188a1.04 1.04 0 0 0 0 1.624l1.907 1.526A.74.74 0 0 0 5.5 9.76V6.24a.74.74 0 0 0-.74-.74Z"
            clipRule="evenodd"
        />
    </svg>
);
export default TextOutdent;
