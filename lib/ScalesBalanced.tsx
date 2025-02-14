import * as React from 'react';
import {SVGProps} from 'react';
const ScalesBalanced = (props: SVGProps<SVGSVGElement>) => (
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
            d="M13.25 3h-4.5v10h2.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h2.5V3h-4.5a.75.75 0 0 1 0-1.5h10.5a.75.75 0 0 1 0 1.5ZM1.643 8.568l.007.018a1.454 1.454 0 0 0 2.7 0l.007-.018L3 5.854 1.643 8.568ZM3 4c-.46 0-.88.26-1.085.67L.2 8.099a1 1 0 0 0-.034.819l.09.226a2.954 2.954 0 0 0 5.486 0l.09-.226a1 1 0 0 0-.034-.819L4.085 4.671A1.214 1.214 0 0 0 3 4Zm8.643 4.568.007.018a1.454 1.454 0 0 0 2.7 0l.007-.018L13 5.854l-1.357 2.714ZM13 4c-.46 0-.88.26-1.085.67L10.2 8.099a1 1 0 0 0-.034.819l.09.226a2.954 2.954 0 0 0 5.486 0l.09-.226a1 1 0 0 0-.034-.819l-1.714-3.427A1.214 1.214 0 0 0 13 4Z"
            clipRule="evenodd"
        />
    </svg>
);
export default ScalesBalanced;
