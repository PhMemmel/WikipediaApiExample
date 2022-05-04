function search() {
    fetch('https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch='
        + document.getElementById('suchfeld').value.trim())
        .then(resp => resp.json())
        .then(data => machWasMitDenDaten(data))
        .catch(err => console.log(err))
}

function machWasMitDenDaten(data) {
    console.log(data.query.search)
    data.query.search.forEach(searchResult => {
        const node = document.createElement('li');
        node.innerHTML = JSON.stringify(searchResult);
        document.getElementById("liste").appendChild(node);
    });

}