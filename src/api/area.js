import request from "@/utils/request";
export const areaList = (val) =>{
    return request({
        url:`/area/city/?level=${val}`
    })
}
export const hotList =(params)=>{
    return request({
        url:"/area/hot",
        params
    })
}
