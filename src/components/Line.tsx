import React from 'react';

interface LabelComponentProps {
    label: string;
}

const styles = {
    container: {
        width: '100%', 
        backgroundColor: '#2D609B', 
        padding: '1px 0', 
        position: 'relative' as 'relative',
        margin: '10px 0',
        
    },
    label: {
        position: 'absolute' as 'absolute',
        top: '-10px', 
        left: '10px', 
        fontSize: '14px', 
        color: 'black',
        backgroundColor: 'white', 
        padding: '0 2px', 
    },
};

const LabelComponent: React.FC<LabelComponentProps> = ({ label }) => {
    return (
        <div style={styles.container}>
            <label style={styles.label}>{label}</label>
        </div>
    );
};

export default LabelComponent;
