import * as React from 'react';
import {SVGProps} from 'react';
const RectanglePulse = (props: SVGProps<SVGSVGElement>) => (
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
            d="M12.5 12.5h-9A1.5 1.5 0 0 1 2 11V9h3a.75.75 0 0 0 .648-.372l1.02-1.748 1.9 4.18a.75.75 0 0 0 1.33.068L11.43 8.5H14V11a1.5 1.5 0 0 1-1.5 1.5ZM14 7h-3a.75.75 0 0 0-.648.372L9.332 9.12l-1.9-4.18a.75.75 0 0 0-1.33-.068L4.57 7.5H2V5a1.5 1.5 0 0 1 1.5-1.5h9A1.5 1.5 0 0 1 14 5v2ZM3.5 14h9a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3h-9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3Z"
            clipRule="evenodd"
        />
    </svg>
);
export default RectanglePulse;
