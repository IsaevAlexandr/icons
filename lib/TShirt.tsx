import * as React from 'react';
import {SVGProps} from 'react';
const TShirt = (props: SVGProps<SVGSVGElement>) => (
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
            d="m15.177 3.088-3.544-1.771A3 3 0 0 0 10.292 1h-.877a1.5 1.5 0 0 1-2.83 0h-.877a3 3 0 0 0-1.341.317L.823 3.088a1 1 0 0 0-.481 1.266l1.295 3.237a1 1 0 0 0 1.28.565l.351-.132-.188 4.9A2 2 0 0 0 5.078 15h5.844a2 2 0 0 0 1.998-2.077l-.188-4.899.352.132a1 1 0 0 0 1.28-.565l1.294-3.237a1 1 0 0 0-.481-1.266ZM5.764 2.5h-.056a1.5 1.5 0 0 0-.67.158L1.904 4.224l.943 2.356 2.006-.752-.275 7.153a.5.5 0 0 0 .5.519h5.843a.5.5 0 0 0 .5-.52l-.276-7.152 2.006.752.943-2.356-3.132-1.566a1.5 1.5 0 0 0-.671-.158h-.056A2.99 2.99 0 0 1 8 3.5a2.99 2.99 0 0 1-2.236-1Z"
            clipRule="evenodd"
        />
    </svg>
);
export default TShirt;
