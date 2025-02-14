import * as React from 'react';
import {SVGProps} from 'react';
const Umbrella = (props: SVGProps<SVGSVGElement>) => (
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
            d="M11.183 11.595c-.05.02-.34.112-1.113-.187-.953-.368-2.258-1.218-3.76-2.719-1.5-1.5-2.35-2.806-2.718-3.759-.299-.774-.206-1.063-.187-1.113 1.57-1.535 5.177-2.013 7.484.294 2.32 2.32 1.914 5.83.294 7.484ZM5.79 10.27c2.947 2.747 5.427 3.411 6.427 2.41 2.063-2.061 2.617-6.141.236-9.073l.577-.578a.75.75 0 1 0-1.06-1.06l-.579.578C8.448.178 4.286.814 2.318 2.782c-1 1-.336 3.48 2.41 6.428L2.47 11.47a2.164 2.164 0 1 0 3.06 3.06l.25-.25a.75.75 0 1 0-1.06-1.06l-.25.25a.664.664 0 1 1-.94-.94l2.26-2.259Z"
            clipRule="evenodd"
        />
    </svg>
);
export default Umbrella;
