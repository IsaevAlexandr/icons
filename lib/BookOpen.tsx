import * as React from 'react';
import {SVGProps} from 'react';
const BookOpen = (props: SVGProps<SVGSVGElement>) => (
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
            d="M7.345 2.634c.09.046.18.094.268.145L8 3l.387-.221a6.699 6.699 0 0 1 6.32-.175c.486.242.793.74.793 1.283v8.938c0 .65-.526 1.175-1.175 1.175h-.04c-.187 0-.37-.05-.529-.146a4.793 4.793 0 0 0-4.61-.177l-.199.1A2.123 2.123 0 0 1 8 14h-.117a1.624 1.624 0 0 1-.726-.171l-.233-.117a4.937 4.937 0 0 0-4.748.183.741.741 0 0 1-.381.105h-.12A1.175 1.175 0 0 1 .5 12.825V3.887c0-.544.307-1.04.793-1.284a6.699 6.699 0 0 1 6.052.03Zm1.405 9.572V4.3l.382-.218A5.199 5.199 0 0 1 14 3.927v8.357a6.293 6.293 0 0 0-5.25-.078Zm-1.5.005V4.298l-.382-.218A5.199 5.199 0 0 0 2 3.927v8.365a6.437 6.437 0 0 1 5.25-.082Z"
            clipRule="evenodd"
        />
    </svg>
);
export default BookOpen;
