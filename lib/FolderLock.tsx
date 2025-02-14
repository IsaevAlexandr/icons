import * as React from 'react';
import {SVGProps} from 'react';
const FolderLock = (props: SVGProps<SVGSVGElement>) => (
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
            d="m6.44 4.06.439.44H12.5A1.5 1.5 0 0 1 14 6v5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 11V4.5A1.5 1.5 0 0 1 3.5 3h1.257a1.5 1.5 0 0 1 1.061.44l.621.62ZM.5 4.5a3 3 0 0 1 3-3h1.257a3 3 0 0 1 2.122.879L7.5 3h5a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3V4.5Zm8 2.75v.25h-1v-.25a.5.5 0 0 1 1 0Zm1.6.25H10v-.25a2 2 0 1 0-4 0v.25h-.1a1.4 1.4 0 0 0-1.4 1.4v1.2a1.4 1.4 0 0 0 1.4 1.4h4.2a1.4 1.4 0 0 0 1.4-1.4V8.9a1.4 1.4 0 0 0-1.4-1.4ZM6 9v1h4V9H6Z"
            clipRule="evenodd"
        />
    </svg>
);
export default FolderLock;
