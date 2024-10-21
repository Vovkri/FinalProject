import React from 'react';

interface ListItemComponentProps {
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
        borderBottom: '0.2px solid gray',
        textAlign: 'left' as const,
        width: '326px',
        height: '60px'
    },
};

const ListItemComponent: React.FC<ListItemComponentProps> = ({ name, sender, comer, date }) => {
    return (
        <div style={styles.elem_lists}>
            <p style={styles.elem_list_name}>{name}</p>
            <p style={styles.p}>Отправитель: {sender}</p>
            <p style={styles.p}>Получатель: {comer}</p>
            <p style={styles.p}>Дата выдачи: {date}</p>
        </div>
    );
};

export default ListItemComponent;
