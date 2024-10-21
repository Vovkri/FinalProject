import React, { useState } from 'react';


interface InputComponentProps {
    placeholder: string; // Пропс для placeholder
    label: string;
    required: 0 | 1;
}
// Стиль для компонента
const styles = {
    container: {
        display: 'flex' as 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center' as 'center',
        justifyContent: 'center',
        padding: '20px',
    },
    inputContainer: {
        position: 'relative' as 'relative',
        width: '304px',
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
        
        width: '304px',
        height: '51px',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #grey',
        marginBottom: '10px',
        boxSizing: 'border-box' as const 
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
};

const InputComponent: React.FC<InputComponentProps> = ({ placeholder, label, required }) => {
    const [inputValue, setInputValue] = useState<string>('');

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
            </div>
        </div>
    );
};

export default InputComponent;
