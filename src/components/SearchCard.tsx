import React from 'react';
import { ReactComponent as CloseIcon } from '../svg/close.svg';
import { ReactComponent as MoreIcon } from '../svg/more.svg'; 
import ButtonIconComponent from '../components/buttonicon'; 

interface InfoBoxProps {
    mainText: string; 
    additionalText: string; 
    onClose: () => void; 
    More: () => void;
}

const InfoBox: React.FC<InfoBoxProps> = ({ mainText, additionalText, onClose, More }) => {
    const styles = {
        container: {
            display: 'flex' as 'flex',
            alignItems: 'center' as 'center',
            justifyContent: 'space-between' as 'space-between',
            width: '344px',
            height: '49px',
            border: '1px solid #ccc', 
            borderRadius: '5px', 
            padding: '0 10px', 
        },
        textContainer: {
            display: 'flex' as 'flex',
            flexDirection: 'column' as 'column',
            justifyContent: 'center' as 'center',
            marginLeft: '10px', 
        },
        mainText: {
            fontSize: '16px', 
            fontWeight: 'bold' as 'bold',
        },
        additionalText: {
            fontSize: '12px', 
            color: '#666', 
        },
        closeButton: {
            cursor: 'pointer', 
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.closeButton} onClick={onClose}>
                <CloseIcon /> 
            </div>
            <div style={styles.textContainer}>
                <span style={styles.mainText}>{mainText}</span>
                <span style={styles.additionalText}>{additionalText}</span>
            </div>
            <ButtonIconComponent text="Поиск" onClick={() => console.log('Действие выполнено')} /> 
            <div style={styles.closeButton} onClick={More}>
                <MoreIcon></MoreIcon>
                </div>
        </div>
    );
};

export default InfoBox;
