import * as React from 'react';
import {SVGProps} from 'react';
const Persons = (props: SVGProps<SVGSVGElement>) => (
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
                d="M5.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 1.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-3.029 2.886c-.777.54-.971 1.063-.971 1.306 0 .446.362.808.808.808h6.384a.808.808 0 0 0 .808-.808c0-.244-.194-.767-.971-1.306C7.792 9.875 6.719 9.5 5.5 9.5c-1.218 0-2.292.375-3.029.886ZM0 11.692C0 9.846 2.475 8 5.5 8c1.18 0 2.278.281 3.177.734A5.671 5.671 0 0 1 11.5 8c2.475 0 4.5 1.538 4.5 3.077A1.923 1.923 0 0 1 14.077 13h-3.483c-.416.604-1.113 1-1.902 1H2.308A2.308 2.308 0 0 1 0 11.692Zm10.991-.192h3.086c.234 0 .423-.19.423-.423 0-.103-.096-.472-.688-.89-.554-.393-1.375-.687-2.312-.687-.517 0-.999.09-1.42.236.526.534.854 1.146.911 1.764ZM12.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM14 5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
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
export default Persons;
