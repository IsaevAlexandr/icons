import * as React from 'react';
import {SVGProps} from 'react';
const LayoutCellsLarge = (props: SVGProps<SVGSVGElement>) => (
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
            d="M12 3.5H8.75v3.75h4.75V5A1.5 1.5 0 0 0 12 3.5Zm1.5 5.25H8.75v3.75H12a1.5 1.5 0 0 0 1.5-1.5V8.75Zm-6.25-1.5V3.5H4A1.5 1.5 0 0 0 2.5 5v2.25h4.75ZM2.5 8.75h4.75v3.75H4A1.5 1.5 0 0 1 2.5 11V8.75ZM4 2a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H4Z"
            clipRule="evenodd"
        />
    </svg>
);
export default LayoutCellsLarge;
