

function SearchBar() {
    return (
        <>
            <form onSubmit="">
                <input 
                    type="text"
                    id="SearchBar"
                ></input>
                <button 
                        type="submit"
                        id="SearchButton"
                >Search</button>
            </form>
        </>
    )
};

export default SearchBar