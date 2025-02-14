import * as React from 'react';
import {SVGProps} from 'react';
const Megaphone = (props: SVGProps<SVGSVGElement>) => (
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
            d="M11.113 11.615c.374.814.713.885.887.885.174 0 .513-.071.887-.885.377-.816.613-2.077.613-3.615 0-1.538-.236-2.799-.613-3.615-.374-.814-.713-.885-.887-.885-.174 0-.513.071-.887.885C10.736 5.2 10.5 6.462 10.5 8c0 1.538.236 2.799.613 3.615ZM9 8c0 1.469.197 2.815.59 3.857L2.902 9.31a1.402 1.402 0 0 1 0-2.62l6.686-2.548C9.196 5.185 9 6.532 9 8Zm3 6c2 0 3-2.686 3-6s-1-6-3-6c-.661 0-1.317.12-1.934.356L2.369 5.288a2.902 2.902 0 0 0 0 5.424l.827.315a2.5 2.5 0 1 0 4.67 1.78l2.2.837A5.433 5.433 0 0 0 12 14Zm-5.537-1.729L4.6 11.563a1 1 0 1 0 1.862.71Z"
            clipRule="evenodd"
        />
    </svg>
);
export default Megaphone;
