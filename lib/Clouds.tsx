import * as React from 'react';
import {SVGProps} from 'react';
const Clouds = (props: SVGProps<SVGSVGElement>) => (
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
                d="M4.977 4.563a3.208 3.208 0 0 0-.196.053l.062.006A4.062 4.062 0 0 0 2.49 8.06a3.234 3.234 0 0 0 .743 6.38h6.414a3.854 3.854 0 0 0 3.851-3.744 3.855 3.855 0 0 0-.69-7.406 4.061 4.061 0 0 0-7.817 1.267 5.299 5.299 0 0 0-.014.006Zm8.256 4.611a2.353 2.353 0 0 0-1.008-4.44.75.75 0 0 1-.702-.563 2.562 2.562 0 0 0-4.979.079 4.061 4.061 0 0 1 3.765 2.54 3.86 3.86 0 0 1 2.924 2.384Zm-9.25-.864a2.56 2.56 0 0 1 5.04-.639.75.75 0 0 0 .702.563 2.353 2.353 0 0 1-.078 4.706H3.233a1.733 1.733 0 0 1-.002-3.466h.024a.75.75 0 0 0 .748-.843 2.593 2.593 0 0 1-.02-.32Zm5.72 4.632H9.7h.004Zm-.11 1.496H9.59h.003Z"
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
export default Clouds;
