import * as React from 'react';
import {SVGProps} from 'react';
const VolumeFill = (props: SVGProps<SVGSVGElement>) => (
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
                d="M2 5h2l2.482-2.482A1.768 1.768 0 0 1 9.5 3.768v8.464a1.768 1.768 0 0 1-3.018 1.25L4 11H2a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm12.162 8.103c-.265.319-.743.316-1.036.024-.292-.293-.288-.766-.031-1.09A6.473 6.473 0 0 0 14.5 8a6.473 6.473 0 0 0-1.405-4.037c-.257-.324-.261-.797.031-1.09.293-.292.771-.294 1.036.024A7.967 7.967 0 0 1 16 8c0 1.94-.69 3.718-1.838 5.103Zm-2.138-2.135c-.246.333-.726.33-1.019.037-.293-.293-.284-.764-.06-1.113A3.484 3.484 0 0 0 11.5 8c0-.697-.204-1.347-.555-1.892-.224-.348-.233-.82.06-1.113.293-.293.773-.296 1.02.037C12.637 5.862 13 6.89 13 8a4.977 4.977 0 0 1-.976 2.968Z"
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
export default VolumeFill;
