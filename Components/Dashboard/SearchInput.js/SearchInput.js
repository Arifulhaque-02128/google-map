import React, { useState }from 'react';
import styles from './SearchStyle.module.css';
import {TiPlusOutline} from 'react-icons/ti';

const SearchInput = () => {

    const [inputText, setInputText] = useState("")
    const [options, setOptions] = useState(["yellow", "blue", "white", "red", "green", "black"]);

    const suggestions = options.filter(op => inputText === '' || op.includes(inputText))

    const handleAddOption = () => {
        setOptions(Array.from(new Set([...options, inputText])))
        setInputText("")
    }

    console.log(options)

    return (
        <div>
            <h3> Search Input </h3>

            <div>
                <input className={styles.searchBox} type="text"
                    value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="Type here" 
                />
                <TiPlusOutline size={30} className={styles.iconStyle}
                    onClick={handleAddOption}
                 />
            </div>

            <div className={styles.suggestionsContainer}>
            {
                suggestions.map((s, idx) => 
                    <li 
                        className={styles.listStyle}
                        onClick={() => setInputText(s)}
                        key={idx}
                    >
                        {s}
                    </li>
                )  
            }
            </div>
            
        </div>
    );
};

export default SearchInput;