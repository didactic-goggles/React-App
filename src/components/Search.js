import IconSearch from '../assets/img/svg/icon-search.svg';

import {FormControl, Button} from 'react-bootstrap';

const Search = (props) => {
    const {setSearchKeyword} = props;
    const onSetSearchKeyword = (keyword) => {
        if(keyword.length > 3)
            setSearchKeyword(keyword);
        else
            setSearchKeyword('');
    }

    return (
        <div className="search-container">
            <img src={IconSearch} className="ml-3 mr-1"/>
            <FormControl placeholder="Ürün Ara" onChange={(event) => onSetSearchKeyword(event.target.value)} />
            <Button variant="success" className="search-button">Ara</Button>
        </div>
        
    )
}

export default Search;
