import * as React from 'react';
import {SVGProps} from 'react';
const ChevronsCollapseFromLines = (props: SVGProps<SVGSVGElement>) => (
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
            d="M1.5 2.75a.75.75 0 0 0-1.5 0v10.5a.75.75 0 0 0 1.5 0V2.75Zm14.5 0a.75.75 0 0 0-1.5 0v10.5a.75.75 0 0 0 1.5 0V2.75ZM3.47 4.97a.75.75 0 0 0 0 1.06L5.44 8 3.47 9.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0Zm9.06 1.06a.75.75 0 0 0-1.06-1.06l-2.5 2.5a.75.75 0 0 0 0 1.06l2.5 2.5a.75.75 0 1 0 1.06-1.06L10.56 8l1.97-1.97Z"
            clipRule="evenodd"
        />
    </svg>
);
export default ChevronsCollapseFromLines;
