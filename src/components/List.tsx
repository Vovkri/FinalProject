import React from 'react';


interface ListComponentProps {
    name: string; 
    sender: string;
    comer: string;
    date: string;
}

const styles = {
    p: {
        fontSize: '10px',
        padding: '0',
        margin: '0'
    },
    elem_list_name: {
        fontSize: '12px',
        margin: '0px',
    },
    elem_lists: {
        border: '0.2px solid gray',
        borderRadius: '5px',
        textAlign: 'left' as const,
        width: '326px',
        height: '60px'
    },
};

const ListComponent: React.FC<ListComponentProps> = ({ name, sender, comer, date }) => {
    return (
        <div style={styles.elem_lists}>
            <p style={styles.elem_list_name}>{name}</p>
            <p style={styles.p}>Отправитель: {sender}</p>
            <p style={styles.p}>Получатель: {comer}</p>
            <p style={styles.p}>Дата выдачи: {date}</p>
        </div>
    );
};

export default ListComponent;
