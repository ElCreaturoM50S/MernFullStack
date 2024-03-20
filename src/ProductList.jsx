const ProductList = (jakistekst) => {

    const products = [
        {id:1, name:"Kaktus",price:8.90},
        {id:2, name:"Cygaro",price:75.00},
        {id:3, name:"Lizak",price:1008.00},
        {id:4, name:"Mlek",price:8.00}
    ]

    return (
        <div>
            <h2>Lista produktów</h2>
            {
                products.map(({id,name,price}) =>  {
                    return (
                        <ul key={id}>
                            <li>{name}, {price}</li>
                        </ul>
                    )
                })
            }
        </div>
        
    )
}

export default ProductList;