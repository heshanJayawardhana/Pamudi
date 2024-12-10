// Image array (your existing images)
const imageUrls = [
    "../pictures/gallery/foods/o1.slider1-scaled.jpg",
    "../pictures/gallery/foods/o2.Slider-3-scaled.jpg",
    "../pictures/gallery/foods/o3.jpg",
    "../pictures/gallery/foods/o4.Sea-Food-Bowl-2.webp",
    "../pictures/gallery/foods/o5.Batu-Mojuwa.jpg",
    "../pictures/gallery/foods/o6.Crab.jpg",
    "../pictures/gallery/foods/o7.Curry-Bowl-.jpg",
    "../pictures/gallery/foods/o8.Cuttle-Fish.webp",
    "../pictures/gallery/foods/o9.Fish-Bowl.jpg",
    "../pictures/gallery/foods/o10.IMG_1707.webp",
    "../pictures/gallery/foods/o11.IMG_2084.webp",
    "../pictures/gallery/foods/o12.IMG_2091.webp",
    "../pictures/gallery/foods/o13.Lamprai.webp",
    "../pictures/gallery/foods/o14.Sea-Food-Bowl.webp",
    "../pictures/gallery/foods/o15.Sea-Food-Bowl-in-sri-lankan-style.jpg",
    "../pictures/gallery/foods/o16.Tasting-Basket.webp",
    "../pictures/gallery/foods/o17.Yellow-Rice.jpg",
    "../pictures/gallery/foods/o18.jpg",
    "../pictures/gallery/foods/o19.webp",
    "../pictures/gallery/foods/o20.DSC00048.webp",
    "../pictures/gallery/foods/o21.DSC00030.webp",
    "../pictures/gallery/foods/o22.DSC00074-1.webp",
    "../pictures/gallery/foods/o23.DSC00101.webp",
    "../pictures/gallery/foods/o24.DSC00163.webp",
    "../pictures/gallery/foods/o25.DSC00244.webp",
    "../pictures/gallery/foods/o26.DSC00388.webp",
    "../pictures/gallery/foods/o27.DSC01595-P.jpg",
    "../pictures/gallery/foods/o28.DSC01596-P.webp",
    "../pictures/gallery/foods/o29.DSC04096.webp",
    "../pictures/gallery/foods/o30.jpg"
];

// Dynamically create grid items for images
imageUrls.forEach(url => {
    const div = document.createElement('div');
    div.className = 'grid-item';
  
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Image';
  
    div.appendChild(img);
    grid.appendChild(div);
});