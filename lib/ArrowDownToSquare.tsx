import * as React from 'react';
import {SVGProps} from 'react';
const ArrowDownToSquare = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8.75 2a.75.75 0 0 0-1.5 0v7.19L6.03 7.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 1 0-1.06-1.06L8.75 9.19V2ZM5 4.75A.75.75 0 0 0 4.25 4H4a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3h-.25a.75.75 0 0 0 0 1.5H12A1.5 1.5 0 0 1 13.5 7v5a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 12V7A1.5 1.5 0 0 1 4 5.5h.25A.75.75 0 0 0 5 4.75Z"
            clipRule="evenodd"
        />
    </svg>
);
export default ArrowDownToSquare;
