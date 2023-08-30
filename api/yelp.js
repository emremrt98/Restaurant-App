import axios from "axios";


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer MKS7qdBQjAWBd1yccTnaBEiCB1JArRNkvfiYuOpyU349oYjuEIb8E1NJ2kI8rnxEGna-MdU_IvkkHQKDF4Ir6cc_rEXbixoTpck312HLbZjs_X_wsynZX49FTsbvZHYx'
        
    }
})