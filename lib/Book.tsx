import * as React from 'react';
import {SVGProps} from 'react';
const Book = (props: SVGProps<SVGSVGElement>) => (
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
            d="M3.5 11.937V13a.5.5 0 0 0 .5.5h7a1.5 1.5 0 0 0 1.5-1.5v-.401A2.987 2.987 0 0 1 11 12H4c-.173 0-.34-.022-.5-.063ZM2 10V3a1.987 1.987 0 0 1 .686-1.508A1.994 1.994 0 0 1 4 1h7a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H4a2 2 0 0 1-2-2v-3Zm1.5 0a.5.5 0 0 0 .5.5h7A1.5 1.5 0 0 0 12.5 9V4A1.5 1.5 0 0 0 11 2.5H4a.498.498 0 0 0-.5.5v7Zm2-4.75a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75Z"
            clipRule="evenodd"
        />
    </svg>
);
export default Book;
