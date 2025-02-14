import * as React from 'react';
import {SVGProps} from 'react';
const LogoYandex = (props: SVGProps<SVGSVGElement>) => (
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
            d="M13.5 8a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0ZM15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM6.136 5.103a.75.75 0 0 0-1.272.795l2.044 3.27c.223.357.342.77.342 1.192v1.14a.75.75 0 0 0 1.5 0v-1.14a3.75 3.75 0 0 0-.57-1.987l-2.044-3.27Zm5 .795a.75.75 0 1 0-1.272-.795L8.77 6.853a.75.75 0 0 0 1.272.795l1.094-1.75Z"
            clipRule="evenodd"
        />
    </svg>
);
export default LogoYandex;
