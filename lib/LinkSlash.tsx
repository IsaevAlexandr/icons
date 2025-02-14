import * as React from 'react';
import {SVGProps} from 'react';
const LinkSlash = (props: SVGProps<SVGSVGElement>) => (
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
            d="m8 9.06 4.97 4.97a.75.75 0 1 0 1.06-1.06l-11-11a.75.75 0 0 0-1.06 1.06L6.94 8 5.47 9.47a.75.75 0 1 0 1.06 1.06L8 9.06Zm3.54-.722L12.601 9.4l.656-.656a4.243 4.243 0 0 0-6-6l-.656.656 1.06 1.06.657-.656a2.743 2.743 0 0 1 3.879 3.879l-.657.656ZM9.47 5.47l-.4.399 1.061 1.06.4-.399A.75.75 0 1 0 9.47 5.47ZM3.22 6.78a.75.75 0 0 1 1.06 1.061l-.477.477a2.743 2.743 0 0 0 3.879 3.879l.477-.477a.75.75 0 0 1 1.06 1.06l-.476.477a4.243 4.243 0 0 1-6-6l.477-.477Z"
            clipRule="evenodd"
        />
    </svg>
);
export default LinkSlash;
