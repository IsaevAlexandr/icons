import * as React from 'react';
import {SVGProps} from 'react';
const Files = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8 10.5h4A1.5 1.5 0 0 0 13.5 9V7H12a3 3 0 0 1-3-3V2.5H8A1.5 1.5 0 0 0 6.5 4v5A1.5 1.5 0 0 0 8 10.5Zm5.06-5.318c.096.096.178.203.243.318H12A1.5 1.5 0 0 1 10.5 4V2.697c.115.065.223.147.318.242l2.243 2.243ZM15 6.242a3 3 0 0 0-.879-2.12L11.88 1.878A3 3 0 0 0 9.757 1H8a3 3 0 0 0-3 3H4a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3h1a3 3 0 0 0 3-3V6.243ZM9.5 12H8a3 3 0 0 1-3-3V5.5H4A1.5 1.5 0 0 0 2.5 7v5A1.5 1.5 0 0 0 4 13.5h4A1.5 1.5 0 0 0 9.5 12Z"
            clipRule="evenodd"
        />
    </svg>
);
export default Files;
