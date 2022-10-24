
const products = [
    {
        id: "1",
        name: "iPhone 14",
        price: 799,
        category: "iphone",
        img: "/images/iPhone/iphone-14.png",
        stock: 10,
        description: "Descripcion del iPhone",
    },
    {
        id: "2",
        name: "iPhone 13",
        price: 699,
        category: "iphone",
        img: "/images/iPhone/iphone-13.png",
        stock: 10,
        description: "Descripcion del iPhone",
    },
    {
        id: "3",
        name: "iPhone 12",
        price: 599,
        category: "iphone",
        img: "/images/iPhone/iphone-12.png",
        stock: 10,
        description: "Descipcion del iPhone",
    },
    {
        id: "4",
        name: "iPhone SE",
        price: 429,
        category: "iphone",
        img: "/images/iPhone/iphone-se.png",
        stock: 10,
        description: "Descripcion del iPhone",
    },
    {
        id: "5",
        name: "iPad Mini",
        price: 499,
        category: "ipad",
        img: "/images/iPad/ipad-mini.png",
        stock: 10,
        description: "Descripcion del iPad",
    },
    {
        id: "6",
        name: "iPad",
        price: 449,
        category: "ipad",
        img: "/images/iPad/ipad.png",
        stock: 10,
        description: "Descripcion del iPad",
    },
    {
        id: "7",
        name: "iPad Air",
        price: 599,
        category: "ipad",
        img: "/images/iPad/ipad-air.png",
        stock: 10,
        description: "Descripcion del iPad",
    },
    {
        id: "8",
        name: "iPad Pro",
        price: 799,
        category: "ipad",
        img: "/images/iPad/ipad-pro.png",
        stock: 10,
        description: "Descripcion del iPad",
    },
    {
        id: "9",
        name: "MacBook Pro (13)",
        price: 1299,
        category: "mac",
        img: "/images/Mac/macbook-pro-13.png",
        stock: 10,
        description: "Descripcion del iMac",
    },
    {
        id: "10",
        name: "MacBook Pro (16)",
        price: 2499,
        category: "mac",
        img: "/images/Mac/macbook-pro-16.png",
        stock: 10,
        description: "Descipcion del iMac",
    },
    {
        id: "11",
        name: "MacBook Air (M1)",
        price: 999,
        category: "mac",
        img: "/images/Mac/macbook-air-m1.png",
        stock: 10,
        description: "Descipcion del iMac",
    },
    {
        id: "12",
        name: "MacBook Air (M2)",
        price: 1199,
        category: "mac",
        img: "/images/Mac/macbook-air-m2.png",
        stock: 10,
        description: "Descipcion del iMac",
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
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}