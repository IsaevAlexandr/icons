import * as React from 'react';
import {SVGProps} from 'react';
const FolderPlus = (props: SVGProps<SVGSVGElement>) => (
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
            d="m6.44 4.06.439.44H12.5A1.5 1.5 0 0 1 14 6v5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 11V4.5A1.5 1.5 0 0 1 3.5 3h1.257a1.5 1.5 0 0 1 1.061.44l.621.62ZM.5 4.5a3 3 0 0 1 3-3h1.257a3 3 0 0 1 2.122.879L7.5 3h5a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3V4.5Zm8.25 2a.75.75 0 0 0-1.5 0v1.25H6a.75.75 0 0 0 0 1.5h1.25v1.25a.75.75 0 0 0 1.5 0V9.25H10a.75.75 0 0 0 0-1.5H8.75V6.5Z"
            clipRule="evenodd"
        />
    </svg>
);
export default FolderPlus;
