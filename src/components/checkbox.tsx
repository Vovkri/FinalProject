import React, { useState } from 'react';

interface CheckboxComponentProps {
    id: string; 
    checked: boolean;
    onChange: (checked: boolean) => void;
   
}


const styles = {
    checkboxContainer: {
        display: 'flex' as 'flex',
        alignItems: 'center' as 'center',
        cursor: 'pointer' as 'pointer',
    },
    checkbox: {
        appearance: 'none' as 'none',
        width: '18px', 
        height: '18px', 
        borderRadius: '3px', 
        border: '2px solid #2D609B', 
        backgroundColor: '#fff', 
        position: 'relative' as 'relative',
        outline: 'none', 
        cursor: 'pointer', 
        margin: '5px',
    },
    checkboxChecked: {
        backgroundColor: '#2D609B', 
    },
    checkmark: {
        position: 'absolute' as 'absolute',
        
        top: '0px',
        left: '6px',
        width: '6px',
        height: '14px',
        border: 'solid white',
        borderWidth: '0 3px 3px 0',
        transform: 'rotate(45deg)', 
        opacity: 1, 
    },
};

const CheckboxComponent: React.FC<CheckboxComponentProps> = ({ id, checked, onChange }) => {
    const handleCheckboxChange = () => {
        onChange(!checked); 
    };

    return (
        <label style={styles.checkboxContainer}>
            <input 
                type="checkbox" 
                id={id} 
                style={{ display: 'none' }} 
                checked={checked}
                onChange={handleCheckboxChange}
            />
            <div 
                style={{
                    ...styles.checkbox,
                    ...(checked ? styles.checkboxChecked : {}),
                }}
            >
                {checked && <div style={styles.checkmark} />} 
            </div>
            <span style={{ marginLeft: '8px' }}></span> 
        </label>
    );
};

export default CheckboxComponent;