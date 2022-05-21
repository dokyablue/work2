import React , {useRef,memo} from 'react';
import styles from './search_bar.module.css';

const SearchBar = memo(
    ({onSearch}) => {
    const onClick = () =>{
        handleSearch();
    };
    const onKeyPress = (event) =>{
        if(event.key === 'Enter'){
            handleSearch();
        }
    };

    const inputRef = useRef();
    const handleSearch = () =>{
        const value = inputRef.current.value;
        onSearch(value);
    };
    return (

        <header className={styles.header}>
            <div className={styles.logo}>
                <img  className={styles.img} src="/images/logo.png" alt="logo" />
                <h1 className={styles.title} >Youtube</h1>
            </div>
            <input className={styles.input}  type="search" placeholder='search!' onKeyPress={onKeyPress} ref={inputRef} />
            <button className={styles.button}  type='submit' onClick={onClick}>
                <img className={styles.buttonImg} src="/images/search.png" alt="search" />
            </button>
        </header>
            )
    }
);

export default SearchBar;