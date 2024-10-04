import { FC, useState, ChangeEvent, FormEvent } from 'react';

interface SearchInputProps {
    updateSearchText: (query: string) => void
}

const SearchInput: FC<SearchInputProps> = (props) => {

    // props
    const { updateSearchText } = props;

    // state
    const [searchValue, setSearchValue] = useState<string>('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSearchValue(value);
    }

    const formSubmit = (event: FormEvent) => {
        event.preventDefault();
        updateSearchText(searchValue);
    }

    return (
        <form
            className='home-search-wrapper'
            onSubmit={formSubmit}
        >
            <input
                type='text'
                value={searchValue}
                onChange={handleInputChange}
                placeholder='What needs to be searched?'
                className='home-search-input'
            />
            <button
                type='submit'
                className='home-search-submit'
            >
                Search
            </button>
        </form>
    )

}

export default SearchInput;
