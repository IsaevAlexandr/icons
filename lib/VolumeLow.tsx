import * as React from 'react';
import {SVGProps} from 'react';
const VolumeLow = (props: SVGProps<SVGSVGElement>) => (
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
            d="M5.06 9.94A1.5 1.5 0 0 0 4 9.5H2a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5h2a1.5 1.5 0 0 0 1.06-.44l2.483-2.482a.268.268 0 0 1 .457.19v8.464a.268.268 0 0 1-.457.19L5.06 9.939ZM2 5h2l2.482-2.482A1.768 1.768 0 0 1 9.5 3.768v8.464a1.768 1.768 0 0 1-3.018 1.25L4 11H2a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm10.024 5.968c-.246.333-.726.33-1.019.037-.293-.293-.284-.764-.06-1.113A3.484 3.484 0 0 0 11.5 8c0-.697-.204-1.347-.555-1.892-.224-.348-.233-.82.06-1.113.293-.293.773-.296 1.02.037C12.637 5.862 13 6.89 13 8a4.977 4.977 0 0 1-.976 2.968Z"
            clipRule="evenodd"
        />
    </svg>
);
export default VolumeLow;
