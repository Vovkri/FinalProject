import React from 'react';
import { ReactComponent as EditIcon } from '../svg/edit.svg';

interface ButtonIconComponentProps {
    text: string; 
    onClick: () => void;
}


const styles = {
    button: {
        display: 'flex' as 'flex',
        justifyContent: 'center' as 'center',
        alignItems: 'center' as 'center',
        borderRadius: '10px', 
        height: '21px', 
        width: '76px', 
        backgroundColor: '#2D609B', 
        color: 'white', 
        border: 'none' as 'none', 
        cursor: 'pointer' as 'pointer', 
    },
    icon: {
        marginRight: '5px', 
        width: '16px', 
        height: '16px', 
    },
};

const ButtonIconComponent: React.FC<ButtonIconComponentProps> = ({ text, onClick }) => {
    return (
        <button style={styles.button} id='button-icon' onClick={onClick}>
             <EditIcon style={styles.icon} />
            {text}
        </button>
    );
};

export default ButtonIconComponent;
