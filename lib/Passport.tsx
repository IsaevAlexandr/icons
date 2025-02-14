import * as React from 'react';
import {SVGProps} from 'react';
const Passport = (props: SVGProps<SVGSVGElement>) => (
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
            d="M3.5 3v10a.5.5 0 0 0 .5.5h7a1.5 1.5 0 0 0 1.5-1.5V4A1.5 1.5 0 0 0 11 2.5H4a.5.5 0 0 0-.5.5ZM2 13a2 2 0 0 0 2 2h7a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H4a2 2 0 0 0-2 2v10Zm3.5-2.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75ZM9 6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm1.5 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
            clipRule="evenodd"
        />
    </svg>
);
export default Passport;
