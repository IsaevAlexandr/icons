import * as React from 'react';
import {SVGProps} from 'react';
const LogoStackOverflow = (props: SVGProps<SVGSVGElement>) => (
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
            d="M10.849.33a.75.75 0 0 0-1.115 1.003l3.68 4.088a.75.75 0 1 0 1.115-1.004L10.85.33ZM7.6 2.443a.75.75 0 0 1 1.048-.166L13.1 5.51a.75.75 0 1 1-.882 1.213L7.767 3.49a.75.75 0 0 1-.166-1.047Zm-.589 2.424a.75.75 0 1 0-.61 1.37l5.025 2.238a.75.75 0 1 0 .61-1.37L7.012 4.866ZM4.82 8.11a.75.75 0 0 1 .89-.577l5.38 1.143a.75.75 0 0 1-.313 1.467L5.396 9a.75.75 0 0 1-.577-.89ZM2 10.25a.75.75 0 0 1 1.5 0V12A1.5 1.5 0 0 0 5 13.5h6a1.5 1.5 0 0 0 1.5-1.5v-1.75a.75.75 0 0 1 1.5 0V12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-1.75Zm3.25.25a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5Z"
            clipRule="evenodd"
        />
    </svg>
);
export default LogoStackOverflow;
