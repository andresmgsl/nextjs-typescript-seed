export interface homeImageType {
    name: string,
    link?: string,
    image: string,
    orientation: string
}

const homeImages: Array<homeImageType> = [
    {"name": "Duox" , "link": "/detalles1", "image": "6db0215-720.jpg", "orientation": "landscape"},
    {"name": "Drake" , "link": "/detalles2", "image": "96e5535-720.jpg", "orientation": "landscape"},
    {"name": "Gaga" , "image": "725127e-720.jpg", "orientation": "landscape"},
    {"name": "Eminem" , "image": "86174c1-720.jpg", "orientation": "landscape"},
    {"name": "Sia" , "image": "390c2a9-480.jpg", "orientation": "landscape"},
    {"name": "Gustav" , "image": "958e114-480.jpg", "orientation": "landscape"},
    {"name": "Adidas" , "image": "3084359-480.jpg", "orientation": "portrait"},
    {"name": "Places" , "image": "25ae41f-480.jpg", "orientation": "landscape"},
    {"name": "Videos" , "image": "ecf98a4-480.jpg", "orientation": "landscape"}
];

export default homeImages ;