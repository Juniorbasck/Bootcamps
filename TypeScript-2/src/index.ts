type Hero ={
    name: string,
    vulgo: string
};

function PrintaPessoa(pessoa: Hero){
    console.log(pessoa)
}


PrintaPessoa({
    name: "junior", 
    vulgo: "junin maldade pessoa", 
});