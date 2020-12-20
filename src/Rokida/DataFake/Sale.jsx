
import img_item from '../images/item_sp1.jpg'
export const data = [
    {
        text :  "Bo chan goi Long cuu anh giam gia 30 %",
        price : 850.000,
        price__old : 850.000,
        img : img_item,
    },
    {
        text :  "Bo chan goi Long cuu anh giam gia 30 %",
        price : 850.000,
        price__old : 850.000,
        img : img_item,
    },
    {
        text :  "Bo chan goi Long cuu anh giam gia 30 %",
        price : 850.000,
        price__old : 850.000,
        img : img_item,
    },
    {
        text :  "Bo chan goi Long cuu anh giam gia 30 %",
        price : 850.000,
        price__old : 850.000,
        img : img_item,
    },
    {
        text :  "Bo chan goi Long cuu anh giam gia 30 %",
        price : 850.000,
        price__old : 850.000,
        img : img_item,
    },
    {
        text :  "Bo chan goi Long cuu anh giam gia 30 %",
        price : 850.000,
        price__old : 850.000,
        img : img_item,
    },
    {
        text :  "Bo chan goi Long cuu anh giam gia 30 %",
        price : 850.000,
        price__old : 850.000,
        img : img_item,
    },
    {
        text :  "Bo chan goi Long cuu anh giam gia 30 %",
        price : 850.000,
        price__old : 850.000,
        img : img_item,
    }
]
export const PaginationData = ( data , page = 1, limit = 5) => {
    const startIndex = (page - 1) * limit
    const endIndex = page * limit
    const result = data.slice(startIndex , endIndex)
    return result
}