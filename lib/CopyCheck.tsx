import * as React from 'react';
import {SVGProps} from 'react';
const CopyCheck = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        {...props}
    >
        <g fill="currentColor">
            <path
                fillRule="evenodd"
                d="M4 6.5A1.5 1.5 0 0 0 2.5 8v4A1.5 1.5 0 0 0 4 13.5h4A1.5 1.5 0 0 0 9.5 12V8A1.498 1.498 0 0 0 8 6.5H4Zm4 2.576.085-.107L8 9.076Zm-3.623 1.862-.407-.407A.75.75 0 0 1 5.03 9.47l.408.407 1.476-1.845a.75.75 0 1 1 1.171.937M4.97 11.53l-.593-.592.593.592ZM13.5 4A1.5 1.5 0 0 0 12 2.5H8A1.5 1.5 0 0 0 6.5 4v1H8a3 3 0 0 1 3 3v1.5h1A1.498 1.498 0 0 0 13.5 8V4ZM15 8a3 3 0 0 1-3 3h-1v1a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h1V4a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v4Z"
                clipRule="evenodd"
            />
            <path d="m8 9.076.085-.107a.751.751 0 1 0-1.171-.937L5.438 9.877 5.03 9.47a.747.747 0 0 0-1.06 0 .75.75 0 0 0 0 1.06l.407.408.593.592a.75.75 0 0 0 1.116-.061l.522-.654h.001L8 9.074Z" />
        </g>
    </svg>
);
export default CopyCheck;
