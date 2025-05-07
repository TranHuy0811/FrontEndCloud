import images from './images';

const chaBong_image = "https://group5-s3.s3.us-east-1.amazonaws.com/Ch%C3%A0+B%C3%B4ng.jpg"
const chaHoa_image = "https://group5-s3.s3.us-east-1.amazonaws.com/ch%E1%BA%A3+hoa.png"
const chaLua_image = "https://group5-s3.s3.us-east-1.amazonaws.com/cha+lua.png"

export const PRODUCTS = [
    {
        id: 1,
        productName: "Chà Bông",
        price: 120000,
        productImage: chaBong_image, // add the S3 link here instead
    },
    {
        id: 2,
        productName: "Chả Hoa",
        price: 500000,
        productImage: chaHoa_image,
    },
    {
        id: 3,
        productName: "Giò Lụa",
        price: 48000,
        productImage: chaLua_image,
    },  
]