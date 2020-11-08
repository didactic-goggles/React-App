import React, {useState} from 'react';
import {ToggleButtonGroup, ToggleButton} from 'react-bootstrap';

import IconList from '../assets/img/svg/icon-list.svg';
import IconLeaf from '../assets/img/svg/icon-leaf.svg';

const Categories = (props) => {
    const [checkboxesValue, setCheckboxesValue] = useState("Tüm Kategoriler");
    const {categories, setSelectedCategories} = props;
    const [selectedCategoriesString, setSelectedCategoriesString] = useState("Tüm Kategoriler");

    // Kategori değeri atama işlemi
    //     * Herhangi kategori seçili değil ise 'Tüm Kategoriler' seçili olsun(ilk durum için)
    //     * Eğer kategori seçimine başlanmışsa (seçimleri takip et);
    //         - Eğer seçilenler arasında en son seçilen 'Tüm Kategoriler' ise (bir kategori seçtikten sonra tekrar 'Tüm Kategoriler'
    //           seçme durumu), 'Tüm Kategoriler' seçili olsun, diğerlerini kaldır
    //         - Bütün seçimleri ekle (ilk seçimde 'Tüm Kategoriler' seçili olduğu için ve son seçilen olmadığı için
    //           bu durumda kullanıcı 'Tüm Kategoriler' dışındaki seçili olan kategorilerdeki ürünleri görmek istiyordur, 
    //           o yüzden 'Tüm Kategoriler' i kaldır)
    const onSetCategories = selectedCategories => {
        if(!selectedCategories.length) {
            setSelectedCategories('');
            setCheckboxesValue('Tüm Kategoriler');
            setSelectedCategoriesString('Tüm Kategoriler');
        } else {
            if(selectedCategories[selectedCategories.length -1] == 'Tüm Kategoriler'){
                setSelectedCategories('');
                setCheckboxesValue('Tüm Kategoriler');
                setSelectedCategoriesString('Tüm Kategoriler');
            } else {
                const filteredCategories = selectedCategories.filter(a => a != 'Tüm Kategoriler');
                setCheckboxesValue(filteredCategories);
                setSelectedCategories(filteredCategories);
                setSelectedCategoriesString(filteredCategories.join(", "));
            }
        }
    }

    const categoryButtons = categories.map(category => <ToggleButton className="category" value={category} name={category} key={category}>{category}</ToggleButton>)

    return (
        <div className="category-container">
            <div className="d-flex align-items-center mb-3">
                <img className="mr-2" src={IconList} alt="IconList"/>
                <h5 className="mb-0 text-primary">Kategoriler</h5>
            </div>
            <ToggleButtonGroup type="checkbox" onChange={event => onSetCategories(event)} className="category-wrapper mb-3" value={checkboxesValue}>
                {categoryButtons}
            </ToggleButtonGroup>
            <div className="mb-3">
                <img src={IconLeaf} className="mr-2" alt="IconLeaf"/>
                <span className="selected-category">{selectedCategoriesString}</span>
            </div>
        </div>
    )
}

export default Categories; 
