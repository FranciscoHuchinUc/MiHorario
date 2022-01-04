const consultarAPI = async () => {
    const api = await fetch(
        'https://breaking-bad-quotes.herokuapp.com/v1/quotes'
    );
    const frase = await api.json();
    let toString = JSON.stringify(frase);
    var parsed = JSON.parse(toString);

    var author = parsed[0].author;
    var quote = parsed[0].quote;

    // console.log(author);
    // console.log(quote);
    document.getElementById('quote').innerHTML = quote;
};
consultarAPI();