class CartNews extends HTMLElement {
    
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.innerHTML = "<h1>Hello Word</h1> "
    }   
}

customElements.define('cart-news', CartNews);