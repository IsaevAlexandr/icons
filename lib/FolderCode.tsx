import * as React from 'react';
import {SVGProps} from 'react';
const FolderCode = (props: SVGProps<SVGSVGElement>) => (
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
            d="m6.44 4.06.439.44H12.5A1.5 1.5 0 0 1 14 6v5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 11V4.5A1.5 1.5 0 0 1 3.5 3h1.257a1.5 1.5 0 0 1 1.061.44l.621.62ZM.5 4.5a3 3 0 0 1 3-3h1.257a3 3 0 0 1 2.122.879L7.5 3h5a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3V4.5Zm8.182 1.273a.75.75 0 0 1 .546.91l-1 4a.75.75 0 0 1-1.455-.365l1-4a.75.75 0 0 1 .909-.545ZM4.97 10.03a.75.75 0 0 0 1.06-1.06l-.47-.47.47-.47a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 0 0 0 1.06l1 1Zm5-1.06a.75.75 0 1 0 1.06 1.06l1-1a.75.75 0 0 0 0-1.06l-1-1a.75.75 0 1 0-1.06 1.06l.47.47-.47.47Z"
            clipRule="evenodd"
        />
    </svg>
);
export default FolderCode;
