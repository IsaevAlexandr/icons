import * as React from 'react';
import {SVGProps} from 'react';
const LogoWindows = (props: SVGProps<SVGSVGElement>) => (
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
            d="m11.788 2.974-3.038.434V7.25h4.75V4.459a1.5 1.5 0 0 0-1.712-1.485ZM13.5 8.75H8.75v3.842l3.038.434A1.5 1.5 0 0 0 13.5 11.54V8.75Zm-6.25-1.5V3.622l-3.462.495A1.5 1.5 0 0 0 2.5 5.602V7.25h4.75ZM2.5 8.75h4.75v3.628l-3.462-.495A1.5 1.5 0 0 1 2.5 10.398V8.75Zm1.076-6.118A3 3 0 0 0 1 5.602v4.796a3 3 0 0 0 2.576 2.97l8 1.143A3 3 0 0 0 15 11.54V4.459a3 3 0 0 0-3.424-2.97l-8 1.143Z"
            clipRule="evenodd"
        />
    </svg>
);
export default LogoWindows;
