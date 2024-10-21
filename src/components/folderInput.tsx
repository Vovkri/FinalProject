import React, { useState } from 'react';
import { ReactComponent as IconFolder } from '../svg/folderinput.svg';


interface FolderInputProps {
    placeholder: string;
    label: string;
    required: 0 | 1;
    additionalLabel?: string;
    value?: string
}
const styles = {
    container: {
        display: 'flex' as 'flex',
        flexDirection: 'column' as 'column',
        padding: '20px',
    },
    inputContainer: {
        position: 'relative' as 'relative',
        width: '304px',
        borderRadius: '5px',
        border: '1px solid grey',
        display: 'flex',
        justifyContent: 'center'
    },
    label: {
        position: 'absolute' as 'absolute',
        top: '-10px',
        left: '10px',
        fontSize: '14px',
        color: '#333',
        backgroundColor: 'white',
        padding: '0 5px',
    },
    input: {

        width: '250px',
        height: '51px',
        padding: '10px',
        boxSizing: 'border-box' as const,
        border: "0px",
        outline: 'none'
    },
    button: {
        width: '100px',
        height: '40px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#007BFF',
        color: '#fff',
        cursor: 'pointer',
    },
    additionalLabel: {
        fontSize: '12px',
        color: '#666', 
        marginTop: '5px', 
        textAlign: 'left' as const
    },
    icon: {
        margin: "auto"
    }
};

const FolderInputComponent: React.FC<FolderInputProps> = ({ placeholder, label, required, additionalLabel, value }) => {
    const [inputValue, setInputValue] = useState<string>(value != undefined ? value : '');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };


    return (
        <div style={styles.container}>
            <div style={styles.inputContainer}>
                <label style={styles.label}>
                    {label}
                    {required === 1 && <span style={{ color: 'black' }}>*</span>}</label>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder={placeholder}
                    style={styles.input}
                />
                <IconFolder style={styles.icon}/>
            </div>
            {additionalLabel && <div style={styles.additionalLabel}>{additionalLabel}</div>}
        </div>
    );
};

export default FolderInputComponent;