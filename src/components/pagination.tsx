import React from 'react';

interface PaginationProps {
    currentPage: number; 
    totalPages: number; 
    onPageChange: (page: number) => void; 
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const handlePreviousClick = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };


    const styles = {
        pagination: {
            display: 'flex' as 'flex',
            justifyContent: 'center' as 'center',
            alignItems: 'center' as 'center',
            marginTop: '20px',
        },
        button: {
            width: '24px', 
            height: '24px',
            
            border: 'none',
            backgroundColor: '#4680B0',
            color: 'white',
            cursor: 'pointer',
            borderRadius: '5px',
            margin: '0 5px',
            display: 'flex' as 'flex',
            justifyContent: 'center' as 'center',
            alignItems: 'center' as 'center',
            fontSize: '16px',
        },
        currentPageBox: {
            height: '24px',
            width: '30px',
            border: '2px solid #4680B0',
            borderRadius: '5px',
            margin: '0 5px',
            textAlign: 'center' as 'center',
            lineHeight: '24px',
        },
        disabledButton: {
            backgroundColor: '#DCD8E0', 
            cursor: 'not-allowed' as 'not-allowed',
        },
    };

    return (
        <div style={styles.pagination}>
            <button 
                style={{ ...styles.button, ...(currentPage === 1 ? styles.disabledButton : {}) }} 
                onClick={handlePreviousClick} 
                disabled={currentPage === 1}
            >
                &lt; 
            </button>
            
            <div style={styles.currentPageBox}>
                {currentPage}</div> из {totalPages}
            

            <button 
                style={{ ...styles.button, ...(currentPage === totalPages ? styles.disabledButton : {}) }} 
                onClick={handleNextClick} 
                disabled={currentPage === totalPages}
            >
                &gt; 
            </button>
        </div>
    );
};
export default Pagination;