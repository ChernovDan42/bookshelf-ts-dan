
import axios from 'axios';


axios.defaults.baseURL = 'https://books-backend.p.goit.global/books'




export const getCategories = async() => {
    try {
        const data = await axios.get('/category-list')
        return data.data
        
    } catch (error) {
        console.log(error)
    }
}






export const getCategoryBooks = async(category:string|undefined) => {
    try {
        const data = await axios.get(`/category?category=${category}`)
        console.log(data)
        return data
    
    } catch (error) {
        console.log(error)
    }
}

export const getTopBooks = async ()=> {
    try {
        const response = await axios.get(`/top-books`)
      return response
        
    } catch (error) {
        console.log(error)
        return undefined;
    }
}
