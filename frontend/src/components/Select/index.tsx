import React, { SelectHTMLAttributes } from 'react'

import './styles.css'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    name: string;
    options: Array<{
        value:string;
        label:string;
    }>

}

const Select: React.FC<SelectProps> = ({ label, name, options, ...rest }) => {
    return (
        <div className="select-block">
        <label htmlFor={name}>{label}</label>
        <select value="" id={name} {...rest}>
            <option value="" disabled hidden >selecione uma opçao</option>

            {options.map(Option => {
                return <option key={Option.value} value={Option.value}>{Option.label}</option>
            })}
        </select>
    </div>
    )
}

export default Select