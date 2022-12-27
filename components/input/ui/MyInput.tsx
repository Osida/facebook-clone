import React, {FC} from 'react';

interface myInputInterface {
    divClasses?: string,
    inputClasses?: string,
    id: string,
    type: string,
    placeholder?: string,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    trailingIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>,
}

const MyInput: FC<myInputInterface> = (props) => {
    return (
        <div
            className={`bg-gray-700 text-white w-4/5 rounded-xl min-h-[2rem] flex space-x-2 items-center px-4 py-3 sm:max-w-lg ${props.divClasses}`}>
            <input
                id={props.id}
                type={props.type}
                placeholder={props.placeholder || ''}
                value={props.value}
                onChange={props.onChange}
                className={`w-full h-full border-none outline-none bg-transparent ${props.inputClasses}`}
            />
            {props.trailingIcon && <props.trailingIcon/>}
        </div>
    );
};

export default MyInput;
