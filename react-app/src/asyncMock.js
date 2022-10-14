
const products = [
    {
        id: "1",
        name: "iPhone 14",
        price: 799,
        category: "celular",
        img: "/images/iphone-14.png",
        stock: 10,
        description: "",
    },
    {
        id: "2",
        name: "iPhone 13",
        price: 699,
        category: "celular",
        img: "/images/iphone-13.png",
        stock: 10,
        description: "",
    },
    {
        id: "3",
        name: "iPhone 12",
        price: 599,
        category: "celular",
        img: "/images/iphone-12.png",
        stock: 10,
        description: "Deescipcion del iPhone",
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductById = (id) =>{
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => {
                return prod.id === id
            }))
        }, 1000)    
    })
}

export const getProductByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() =>{
            resolve(products.find(prod => prod.category === categoryId))
        }, 1000)
    })
}