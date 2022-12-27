
import axiosClient from "./axiosClient"

const productApi ={
     async getAll(params){
        const newParams={...params};
        newParams._start = !newParams._page || newParams._page<=1 ? 0 : (newParams._page - 1) * (newParams._limit || 50);
        delete newParams._page;
        //fetch
        const productList=await axiosClient.get('/products',{params:newParams})
        const count=await axiosClient.get('/products/count',{params: newParams})
        return{
            data:productList,
            pagination:{
                page:params._page,
                limit:params._limit,
                count:count
            }
        }
    },
    get(id){
        const url= `/products/${id}`
        return axiosClient.get(url)
    },
    add(data){
        const url='/products'
        return axiosClient.post(url,data)
    },
    update(data){
        const url= `/products/${data.id}`
        return axiosClient.patch(url,data)
    },
    remove(id){
        const url= `/products/${id}`
        return axiosClient.patch(url)
    }
}
export default productApi;