import * as React from 'react';
import {SVGProps} from 'react';
const FileMagnifier = (props: SVGProps<SVGSVGElement>) => (
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
            d="M11 13.5H5A1.5 1.5 0 0 1 3.5 12V4A1.5 1.5 0 0 1 5 2.5h2.757a1.5 1.5 0 0 1 1.061.44l3.243 3.242a1.5 1.5 0 0 1 .439 1.06V12a1.5 1.5 0 0 1-1.5 1.5Zm2.121-8.379A3 3 0 0 1 14 7.243V12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h2.757a3 3 0 0 1 2.122.879L13.12 5.12ZM7.5 11.25A2.497 2.497 0 0 1 5 8.75a2.5 2.5 0 1 1 4.717 1.156l.813.814a.75.75 0 1 1-1.06 1.06l-.814-.813a2.49 2.49 0 0 1-1.156.283Zm1-2.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
            clipRule="evenodd"
        />
    </svg>
);
export default FileMagnifier;
