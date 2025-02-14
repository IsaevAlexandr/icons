import * as React from 'react';
import {SVGProps} from 'react';
const ScalesUnbalanced = (props: SVGProps<SVGSVGElement>) => (
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
            d="M13.983.843a.75.75 0 0 1-.576.89l-4.657.998V13h2.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h2.5V3.053l-4.343.93a.75.75 0 1 1-.314-1.466l10.5-2.25a.75.75 0 0 1 .89.576Zm-2.34 6.725.007.018a1.454 1.454 0 0 0 2.7 0l.007-.018L13 4.854l-1.357 2.714ZM13 3c-.46 0-.88.26-1.085.67L10.2 7.099a1 1 0 0 0-.034.819l.09.226a2.954 2.954 0 0 0 5.486 0l.09-.226a1 1 0 0 0-.034-.819l-1.713-3.427A1.214 1.214 0 0 0 13 3ZM1.643 9.568l.007.018a1.454 1.454 0 0 0 2.7 0l.007-.018L3 6.854 1.643 9.568ZM3 5c-.46 0-.88.26-1.085.67L.2 9.099a1 1 0 0 0-.034.819l.09.226a2.954 2.954 0 0 0 5.486 0l.09-.226a1 1 0 0 0-.034-.819L4.085 5.671A1.214 1.214 0 0 0 3 5Z"
            clipRule="evenodd"
        />
    </svg>
);
export default ScalesUnbalanced;
