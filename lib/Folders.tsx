import * as React from 'react';
import {SVGProps} from 'react';
const Folders = (props: SVGProps<SVGSVGElement>) => (
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
            d="m8.879 4-.44-.44-.767-.767a1 1 0 0 0-.708-.293H6A1.5 1.5 0 0 0 4.5 4v5A1.5 1.5 0 0 0 6 10.5h7A1.5 1.5 0 0 0 14.5 9V5.5A1.5 1.5 0 0 0 13 4H8.879ZM6 1a3 3 0 0 0-3 3 3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3 3 3 0 0 0 3-3V5.5a3 3 0 0 0-3-3H9.5l-.768-.768A2.5 2.5 0 0 0 6.964 1H6ZM1.5 7A1.5 1.5 0 0 1 3 5.5V9a3 3 0 0 0 3 3h5.5a1.5 1.5 0 0 1-1.5 1.5H3A1.5 1.5 0 0 1 1.5 12V7Zm10.75 0a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0 0 1.5h5.5Z"
            clipRule="evenodd"
        />
    </svg>
);
export default Folders;
