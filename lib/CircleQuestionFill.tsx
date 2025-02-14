import * as React from 'react';
import {SVGProps} from 'react';
const CircleQuestionFill = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14ZM6.44 4.54c.43-.354.994-.565 1.56-.565 1.217 0 2.34.82 2.34 2.14 0 .377-.079.745-.298 1.1-.208.339-.513.614-.875.867-.217.153-.326.257-.379.328-.038.052-.038.07-.038.089a.75.75 0 0 1-1.5 0c0-.794.544-1.286 1.056-1.645.28-.196.402-.332.46-.425a.543.543 0 0 0 .073-.313c0-.3-.243-.641-.839-.641a.997.997 0 0 0-.608.224c-.167.137-.231.286-.231.417a.75.75 0 0 1-1.5 0c0-.673.345-1.22.78-1.577ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
            clipRule="evenodd"
        />
    </svg>
);
export default CircleQuestionFill;
