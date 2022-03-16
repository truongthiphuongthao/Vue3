import { ref } from "vue"
export default function(){
    const listProduct = ref([])
    const error = ref([])
    const fetchAll = async() => {
        try{
            const response = await fetch("http://localhost:3000/product")
            if(!response.ok) throw new Error("Something went wrong")
            listProduct.value = await response.json()
        }catch(err){
            error.value = err
        }
    }
    return { listProduct, error, fetchAll }
}