import React from 'react';

interface SelectComponentProps {
    label: string; 
    options: { value: string; label: string }[]; 
    value: string; 
    onChange: (value: string) => void; 
    required?: 0 | 1; 
    additionalLabel?: string; 
}

const styles = {
    container: {
        display: 'flex' as 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'flex-start' as 'flex-start', 
        padding: '20px',
    },
    selectContainer: {
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
    select: {
        maxWidth: '304px',
        maxHeight: '51px',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc', 
        marginBottom: '10px',
        boxSizing: 'border-box' as const,
        overflowY: 'auto' as const,
    },
    additionalLabel: {
        fontSize: '12px', 
        color: '#666', 
        marginTop: '-10px', 
       textAlign: 'left' as const
    },
    
};

const SelectComponent: React.FC<SelectComponentProps> = ({ label, options, value, onChange, required, additionalLabel }) => {
    return (
        <div style={styles.container}>
            <div style={styles.selectContainer}>
                <label style={styles.label}>
                    {label}
                    {required === 1 && <span style={{ color: 'black' }}>*</span>}
                </label>
                <select 
                    style={styles.select} 
                    value={value} 
                    onChange={(e) => onChange(e.target.value)} 
                    required={required === 1}
                >
                    {options.map(option => (
                         <option key={option.value} value={option.value} style={{ maxWidth: '200px', overflowWrap: 'break-word' }}>
                            {option.label}
                        </option>
                    ))}
                </select>
                {additionalLabel && <div style={styles.additionalLabel}>{additionalLabel}</div>} 
            </div>
        </div>
    );
};

export default SelectComponent;