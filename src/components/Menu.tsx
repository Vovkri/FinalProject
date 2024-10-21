import React from 'react';
import { ReactComponent as IconBack} from '../svg/back.svg';
import { ReactComponent as IconScan} from '../svg/scan.svg';
import { ReactComponent as IconMenu} from '../svg/menu.svg';

const styles = {
    menu: {
        position: 'fixed' as 'fixed',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex' as 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '320px',
        height: '54px',
        backgroundColor: '#fff', 
        boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)', 
        
    },
    button: {
        display: 'flex' as 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: '#333', 
    },
    icon: {
        fontSize: '24px', 
    },
    label: {
        fontSize: '12px', 
    }
};

const MenuComponent: React.FC = () => {
    return (
        <div style={styles.menu}>
            <div style={styles.button}>
            <IconMenu style={styles.icon} />
                <span style={styles.label}>Меню</span>
            </div>
            <div style={styles.button}>
                <IconScan style={styles.icon} />
                <span style={styles.label}>Сканер</span>
            </div>
            <div style={styles.button}>
                <IconBack style={styles.icon} />
                <span style={styles.label}>Назад</span>
            </div>
        </div>
    );
};

export default MenuComponent;
