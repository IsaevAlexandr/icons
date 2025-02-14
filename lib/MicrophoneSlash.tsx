import * as React from 'react';
import {SVGProps} from 'react';
const MicrophoneSlash = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8.773 9.9A3.004 3.004 0 0 1 5 7v-.94L1.97 3.03a.75.75 0 0 1 1.06-1.06l11 11a.75.75 0 1 1-1.06 1.06l-1.884-1.883a5.97 5.97 0 0 1-2.336.807v1.796a.75.75 0 0 1-1.5 0v-1.796A6.001 6.001 0 0 1 2 7v-.25a.75.75 0 0 1 1.5 0V7a4.5 4.5 0 0 0 6.481 4.042L8.825 9.885l-.052.015ZM9.5 3.5v2.798l1.415 1.415C10.97 7.484 11 7.246 11 7V3.5a3 3 0 0 0-5.669-1.371l1.18 1.18A1.5 1.5 0 0 1 9.5 3.5Zm2.587 5.385L13.2 9.997c.51-.882.8-1.905.8-2.997v-.25a.75.75 0 0 0-1.5 0V7a4.48 4.48 0 0 1-.413 1.885Z"
            clipRule="evenodd"
        />
    </svg>
);
export default MicrophoneSlash;
