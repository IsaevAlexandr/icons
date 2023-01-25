import * as React from 'react';
import {SVGProps} from 'react';
const CommentDot = (props: SVGProps<SVGSVGElement>) => (
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
            d="M3.98 3.677C4.913 2.94 6.305 2.5 8 2.5a9.1 9.1 0 0 1 .924.046.75.75 0 0 0 .152-1.492A10.6 10.6 0 0 0 8 1c-1.933 0-3.683.5-4.95 1.5C1.784 3.5 1 5 1 7c0 2.117.878 3.674 2.277 4.67l-.123 1.484a1.704 1.704 0 0 0 2.83 1.415l1.77-1.572C7.834 13 7.916 13 8 13c1.933 0 3.683-.5 4.95-1.5C14.216 10.5 15 9 15 7a.75.75 0 0 0-1.5 0c0 1.563-.59 2.62-1.48 3.323C11.087 11.06 9.695 11.5 8 11.5c-.072 0-.143 0-.213-.002l-.295-.007-.295-.006-.22.195-1.99 1.768a.204.204 0 0 1-.338-.17l.159-1.909.035-.425-.348-.248-.347-.248C3.156 9.742 2.5 8.648 2.5 7c0-1.563.59-2.62 1.48-3.323ZM12.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
            clipRule="evenodd"
        />
    </svg>
);
export default CommentDot;
