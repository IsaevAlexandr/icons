import * as React from 'react';
import {SVGProps} from 'react';
const LogoNotion = (props: SVGProps<SVGSVGElement>) => (
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
            d="M4 2.5h4.98a2.5 2.5 0 0 1 1.66.631l.977.869h-5.93a1.511 1.511 0 0 1-1.069-.443l-.092-.091-.915-.915c.124-.033.255-.051.389-.051ZM2.55 3.611A1.56 1.56 0 0 0 2.5 4v4.98a2.5 2.5 0 0 0 .631 1.66l.869.977v-5.8a1.826 1.826 0 0 0-.535-1.291l-.914-.915ZM7 5.5A1.5 1.5 0 0 0 5.5 7v5A1.5 1.5 0 0 0 7 13.5h5a1.5 1.5 0 0 0 1.5-1.5V7A1.5 1.5 0 0 0 12 5.5H7ZM7 15h-.653a3 3 0 0 1-2.242-1.007L2.01 11.637A4 4 0 0 1 1 8.979V4a3 3 0 0 1 3-3h4.98a4 4 0 0 1 2.657 1.01l2.356 2.095A3 3 0 0 1 15 6.347V12a3 3 0 0 1-3 3H7Zm.75-3a.75.75 0 0 1-.75-.75V8.08a1.08 1.08 0 0 1 1.96-.627l1.54 2.16V7.75a.75.75 0 0 1 1.5 0v3.168a1.082 1.082 0 0 1-1.963.628L8.5 9.392v1.858a.75.75 0 0 1-.75.75Z"
            clipRule="evenodd"
        />
    </svg>
);
export default LogoNotion;
