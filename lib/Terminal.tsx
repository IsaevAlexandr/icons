import * as React from 'react';
import {SVGProps} from 'react';
const Terminal = (props: SVGProps<SVGSVGElement>) => (
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
            d="M12 3.5H4A1.5 1.5 0 0 0 2.5 5v6A1.5 1.5 0 0 0 4 12.5h8a1.5 1.5 0 0 0 1.5-1.5V5A1.5 1.5 0 0 0 12 3.5ZM4 2a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H4Zm.47 8.53a.75.75 0 0 1 0-1.06L5.94 8 4.47 6.53a.75.75 0 0 1 1.06-1.06l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06 0ZM8.75 9.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z"
            clipRule="evenodd"
        />
    </svg>
);
export default Terminal;
