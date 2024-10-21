import React from 'react';

interface ButtonFilterComponentProps {
    onSearch: () => void; 
    onCancel: () => void; 
}

const styles = {
    buttonFilters: {
        display: 'flex' as 'flex',
        justifyContent: 'center' as 'center',
        alignItems: 'center' as 'center',
    },
    button: {
        margin: '10px',
        borderRadius: '20px',
        height: '40px',
        width: '90px',
    },
    buttonSearch: {
        border: '1px solid #79747E',
        backgroundColor: '#2D609B',
        color: 'white',
    },
    buttonCancel: {
        border: '1px solid #D3D3D3',
        color: '#2D609B',
        backgroundColor: 'white',
    },
};

const ButtonFilterComponent: React.FC<ButtonFilterComponentProps> = ({ onSearch, onCancel }) => {
    return (
        <div style={styles.buttonFilters}>
            <button style={{ ...styles.button, ...styles.buttonSearch }} id='button-search' onClick={onSearch} >
                Поиск
            </button>
            <button style={{ ...styles.button, ...styles.buttonCancel }} id='button-cancel' onClick={onCancel}>
                Отмена
            </button>
        </div>
    );
};

export default ButtonFilterComponent;
