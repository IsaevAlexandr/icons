import * as React from 'react';
import {SVGProps} from 'react';
const Pill = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8.922 3.7 7.81 4.81 6.444 6.179a3.326 3.326 0 0 0 3.378 3.378L11.19 8.19l1.11-1.11A2.39 2.39 0 0 0 8.922 3.7ZM7 3.5l-2 2-2.36 2.36a3.89 3.89 0 1 0 5.5 5.5L10.5 11l2-2 .86-.86a3.889 3.889 0 1 0-5.5-5.5L7 3.5Zm.078 8.8 1.413-1.412A4.852 4.852 0 0 1 5.11 7.51L3.7 8.922A2.39 2.39 0 0 0 7.078 12.3Zm.892-6.33a.75.75 0 1 0 1.06 1.06l1.5-1.5a.75.75 0 1 0-1.06-1.06l-1.5 1.5Z"
            clipRule="evenodd"
        />
    </svg>
);
export default Pill;
