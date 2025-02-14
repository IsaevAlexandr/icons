import * as React from 'react';
import {SVGProps} from 'react';
const PlugWire = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        {...props}
    >
        <g clipPath="url(#a)">
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M11.89 4.111a5.5 5.5 0 0 0-7.78 0c-2.599 2.6-2.12 5.657-1.06 6.718a.75.75 0 0 0 1.06 0l.925-.925a3.09 3.09 0 0 1-.173-2.843l.547-1.23a1 1 0 0 1 1.62-.302l.19.19.75-.75A.75.75 0 1 1 9.03 6.03l-.75.75.94.94.75-.75a.75.75 0 1 1 1.06 1.06l-.75.75.19.19a1 1 0 0 1-.3 1.621l-1.231.547a3.089 3.089 0 0 1-2.843-.173l-.924.924a2.25 2.25 0 0 1-3.182 0C.222 10.122-.007 6.107 3.05 3.05a7 7 0 1 1 2.983 11.67.75.75 0 1 1 .42-1.44 5.5 5.5 0 0 0 5.436-9.168Zm-5.658 3.56.252-.566 2.411 2.411-.566.252A1.589 1.589 0 0 1 6.232 7.67Z"
                clipRule="evenodd"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
        </defs>
    </svg>
);
export default PlugWire;
