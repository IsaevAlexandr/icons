import * as React from 'react';
import {SVGProps} from 'react';
const ListTimeline = (props: SVGProps<SVGSVGElement>) => (
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
            d="M5.75.5a.75.75 0 0 0-.75.75v13.5a.75.75 0 0 0 1.5 0V1.25A.75.75 0 0 0 5.75.5Zm-2 3.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm4 0a.75.75 0 0 1 .75-.75h5.75a.75.75 0 0 1 0 1.5H8.5A.75.75 0 0 1 7.75 4Zm0 8a.75.75 0 0 1 .75-.75h5.75a.75.75 0 0 1 0 1.5H8.5a.75.75 0 0 1-.75-.75Zm.75-4.75a.75.75 0 1 0 0 1.5h5.75a.75.75 0 0 0 0-1.5H8.5Zm-6 2a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.75 12a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
            clipRule="evenodd"
        />
    </svg>
);
export default ListTimeline;
