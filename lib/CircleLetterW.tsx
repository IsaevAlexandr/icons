import * as React from 'react';
import {SVGProps} from 'react';
const CircleLetterW = (props: SVGProps<SVGSVGElement>) => (
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
            d="M13.5 8a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0ZM15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM5.712 5.763a.75.75 0 1 0-1.424.474l1.5 4.5a.75.75 0 0 0 1.424 0L8 8.372l.788 2.365a.75.75 0 0 0 1.423 0l1.5-4.5a.75.75 0 1 0-1.422-.474L9.5 8.128l-.788-2.365a.75.75 0 0 0-1.424 0L6.5 8.128l-.788-2.365Z"
            clipRule="evenodd"
        />
    </svg>
);
export default CircleLetterW;
