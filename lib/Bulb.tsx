import * as React from 'react';
import {SVGProps} from 'react';
const Bulb = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        {...props}
    >
        <g fill="currentColor">
            <path
                fillRule="evenodd"
                d="M6.26 15.109a4 4 0 0 0 3.48 0l.13-.063a2 2 0 0 0 1.13-1.8v-.468c0-1.352.776-2.557 1.54-3.673a5.5 5.5 0 1 0-9.08 0C4.224 10.221 5 11.425 5 12.778v.467a2 2 0 0 0 1.13 1.801l.13.063Zm2.828-1.35.13-.064a.5.5 0 0 0 .282-.45v-.467c0-.17.009-.337.025-.5a5.328 5.328 0 0 1-3.05 0c.016.163.025.33.025.5v.467a.5.5 0 0 0 .282.45l.13.063a2.5 2.5 0 0 0 2.176 0Zm-4.39-5.501c.394.576.891 1.302 1.263 2.148a3.793 3.793 0 0 0 4.078 0c.372-.846.869-1.572 1.264-2.148a4 4 0 1 0-6.605 0Z"
                clipRule="evenodd"
            />
            <path d="M8 3.5A.75.75 0 0 0 8 5a1 1 0 0 1 1 1 .75.75 0 0 0 1.5 0A2.5 2.5 0 0 0 8 3.5Z" />
        </g>
    </svg>
);
export default Bulb;
