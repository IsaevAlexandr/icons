import * as React from 'react';
import {SVGProps} from 'react';
const Arrows3RotateRight = (props: SVGProps<SVGSVGElement>) => (
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
                d="M4.61 2.503a6.473 6.473 0 0 1 3.383-.984 6.48 6.48 0 0 1 4.515 1.77l-.004-.559a.75.75 0 1 1 1.5-.013l.021 2.5a.75.75 0 0 1-.743.756l-2.497.022a.75.75 0 1 1-.013-1.5l.817-.007a4.983 4.983 0 0 0-3.583-1.469 4.973 4.973 0 0 0-2.602.756.75.75 0 0 1-.795-1.272Zm9.097 8.716a6.48 6.48 0 0 0 .84-3.422.75.75 0 1 0-1.5.053 4.973 4.973 0 0 1-.646 2.63 4.983 4.983 0 0 1-3.064 2.37l.403-.712a.75.75 0 0 0-1.306-.738l-1.229 2.173a.75.75 0 0 0 .283 1.022l2.176 1.23a.75.75 0 1 0 .739-1.305l-.487-.275a6.48 6.48 0 0 0 3.79-3.026Zm-11.258.099a6.473 6.473 0 0 0 2.544 2.438.75.75 0 1 0 .704-1.325 4.974 4.974 0 0 1-1.955-1.875 4.983 4.983 0 0 1-.52-3.838l.415.705a.75.75 0 1 0 1.292-.762l-1.267-2.15a.75.75 0 0 0-1.027-.266L.481 5.513a.75.75 0 1 0 .761 1.293l.483-.284a6.48 6.48 0 0 0 .724 4.796Z"
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
export default Arrows3RotateRight;
