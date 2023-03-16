const searchProduct = async (searchWord) => {
    const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=9889249a${searchWord}`);
    const products = await response.json();
    return products;
}

export default searchProduct