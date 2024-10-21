import React, { useState, useEffect } from 'react';
import './App.css';
import MenuComponent from './components/menu';
import InputComponent from './components/input';
import ButtonFiltersComponent from './components/buttonfilters';
import ListComponent from './components/list';
import LineComponent from './components/line';
import ButtonIconComponent from './components/buttonicon';
import CheckboxComponent from './components/checkbox';
import InfoBox from './components/searchcard';
import ListItemComponent from './components/listItem';
import Pagination from './components/pagination';

import { ReactComponent as IconTask} from './svg/tasks.svg';
import { ReactComponent as IconSettings} from './svg/settings.svg';
import { ReactComponent as IconInfo} from './svg/info.svg';
import { ReactComponent as IconInfoActive} from './svg/info-active.svg';
import { ReactComponent as IconFactory} from './svg/factory.svg';
import { ReactComponent as IconWarehouse} from './svg/warehouse.svg';
import { ReactComponent as IconBack} from './svg/back.svg';
import { ReactComponent as IconScan} from './svg/scan.svg';
import { ReactComponent as IconScanActive} from './svg/scan-active.svg';
import { ReactComponent as IconMore} from './svg/more.svg';
import { ReactComponent as IconMoreInactive} from './svg/more-inactive.svg';
import { ReactComponent as IconClose} from './svg/close.svg';
import { ReactComponent as IconEdit} from './svg/edit.svg';
import { ReactComponent as IconAdd} from './svg/add.svg';
import { ReactComponent as IconChange} from './svg/change.svg';
import { ReactComponent as IconSort} from './svg/sort.svg';
import { ReactComponent as IconMenu} from './svg/menu.svg';
import { ReactComponent as IconDrowdown} from './svg/drowdown.svg';
import { ReactComponent as IconDrowdownOpen} from './svg/drowdown-open.svg';
import { ReactComponent as IconDrowdownSqure} from './svg/drowdownSqure.svg';
import { ReactComponent as IconDrowdownSqureOpen} from './svg/drowdownSqure-open.svg';
import { ReactComponent as IconSome} from './svg/some_icon.svg';
import { ReactComponent as IconForder} from './svg/folderinput.svg';
import FolderInputComponent from './components/folderInput';




function App() {
  const handleClick = () => {
    console.log("Кнопка нажата!");
    
};
const [currentPage, setCurrentPage] = useState<number>(2);
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);
  const [isChecked1, setIsChecked1] = useState(true);
  const [isChecked2, setIsChecked2] = useState(false);
  const [totalItems, setTotalItems] = useState<number>(100);

useEffect(() => {
    const calculateItemsPerPage = () => {
      if (typeof window !== 'undefined') {
        const width = Math.floor(window.innerWidth / 335);
        const height = Math.floor(window.innerHeight / 430);
        setItemsPerPage(5);
      }
    };
    
    calculateItemsPerPage();
    window.addEventListener('resize', calculateItemsPerPage);

    return () => window.removeEventListener('resize', calculateItemsPerPage); 
  }, []);
  const handleSearch = () => {
    console.log("Поиск выполнен!");
  };
  const handleMore = () => {
    console.log("Тут будет доп инфа");
  };
const handleCancel = () => {
  console.log("Отмена выполнена!");
  
};
// const totalPages = Math.ceil(totalItems / itemsPerPage);
const totalPages = 3;
  return (
    <div className="App">
      
      <ListComponent name="ВЗН №132313" sender="Цех 01 / участок Цеха 01" comer="Цех 02 / участок Цеха 02" date="15.06.2024"/>
      <ListItemComponent name="ВЗН №132313" sender="Цех 01 / участок Цеха 01" comer="Цех 02 / участок Цеха 02" date="15.06.2024"/>
      
        <InputComponent placeholder="Введите текст здесь" label="Ваш текст" required={1} />
        <InputComponent placeholder="Другой текст" label="Необязательный текст" required={0} />
        <ButtonFiltersComponent onSearch={handleSearch} onCancel={handleCancel}></ButtonFiltersComponent>
        <LineComponent label ="Разделитель" />
        <ButtonIconComponent text="Поиск" onClick={handleClick}/>
        <CheckboxComponent id="checkbox1"  checked={isChecked1} onChange={setIsChecked1} />
        <CheckboxComponent id="checkbox2"  checked={isChecked2} onChange={setIsChecked2}/>
        <div style={{ backgroundColor: 'grey' }}>
        <IconTask />
        <IconSettings />
        <IconInfo />
        <IconInfoActive />
        <IconFactory />
        <IconWarehouse />
        <IconBack />
        <IconScan />
        <IconScanActive />
        <IconMore />
        <IconMoreInactive />
        <IconClose />
        <IconEdit />
        <IconAdd />
        <IconChange />
        <IconSort />
        <IconMenu />
        <IconDrowdown />
        <IconDrowdownOpen />
        <IconDrowdownSqure />
        <IconDrowdownSqureOpen />
        <IconSome />
        <IconForder />
        
        </div>
        <LineComponent label ="Разделитель2" />
        <InfoBox mainText = {'Text Text Text Text'} additionalText = {'Поиск карточки (шаг 1)'} onClose={handleCancel} More={handleMore}></InfoBox>
        <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={(page) => {
          setCurrentPage(page);
          
        }} 
      />
      <FolderInputComponent label={"Метка"} additionalLabel='Вспомогательный текст' required={1} placeholder='Выбранная опция'></FolderInputComponent>
      <MenuComponent></MenuComponent>
    </div>
  );
}

export default App;
