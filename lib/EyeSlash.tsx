import * as React from 'react';
import {SVGProps} from 'react';
const EyeSlash = (props: SVGProps<SVGSVGElement>) => (
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
            d="M3.03 1.97a.75.75 0 0 0-1.06 1.06l.83.83A8.206 8.206 0 0 0 .5 6.876l-.26.585a1.328 1.328 0 0 0 0 1.079l.26.585a8.208 8.208 0 0 0 11.434 3.87l1.036 1.035a.75.75 0 1 0 1.06-1.06l-11-11Zm7.788 9.908-1.294-1.293a3 3 0 0 1-4.109-4.109L3.866 4.927A6.707 6.707 0 0 0 1.87 7.486L1.641 8l.23.515a6.708 6.708 0 0 0 8.947 3.363ZM6.55 7.611A1.502 1.502 0 0 0 8.389 9.45L6.55 7.611Zm1.658-2.604 2.784 2.784a3 3 0 0 0-2.784-2.784Zm5.92 3.508a6.704 6.704 0 0 1-.915 1.496l1.065 1.066A8.203 8.203 0 0 0 15.5 9.125l.26-.585a1.328 1.328 0 0 0 0-1.08l-.26-.584A8.208 8.208 0 0 0 5.572 2.37L6.81 3.61a6.708 6.708 0 0 1 7.32 3.877l.228.514-.228.515Z"
            clipRule="evenodd"
        />
    </svg>
);
export default EyeSlash;
