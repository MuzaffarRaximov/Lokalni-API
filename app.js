const market=[
    {id:1,name:"moy",weight:"1 kg",price:"22000",image:"https://yukber.uz/image/cache/catalog/product/YK0340/YK0340-600x600.jpg"},
    {id:2,name:"un",weight:"2 kg",price:"15000",image:"https://xs.uz/upload/post/2020/04/18/43957e29dc267c29f10bf66e80efdcae0418.png"},
    {id:3,name:"shakar",weight:"1 kg",price:"19000",image:"https://static.zarnews.uz/crop/c/7/720__80_c7c66951ffabab2735054167e9ef8117.jpg?img=self&v=1588990636"},
    {id:4,name:"kartoshka",weight:"3 kg",price:"10000",image:"https://hozvo.ru/photos/storage/bitrix/upload/medialibrary/00f/337f4b3310c7a84003e1c42fc3d82265.jpg"},
    {id:5,name:"piyos",weight:"1 kg",price:"5000",image:"https://fotouz.uz/uploads/files/2019-05/1557642699_luk-onion-piyoz-piez-5.jpg"}
];

const card=document.querySelector(".card");
const image=document.querySelector(".card-img-top");
const isName=document.querySelector(".card-title");
const weight=document.querySelector(".btn");
const price=document.querySelector(".card-text");  
const container= document.querySelector('.container');


market.map((item,index,array)=>{
   const card=document.createElement("div");
   card.classList.add("card");
   card.style.width="18rem";
   container.appendChild(card);


   const img=document.createElement('img');
   img.classList.add("card-img-top");
   img.src=item.image;
   card.appendChild(img);

   const cardBody=document.createElement('div');
   cardBody.classList.add("card-body");
   cardBody.classList.add("text-center");
   cardBody.innerHTML=` <h5 class='card-title'>${item.name}</h5>
<p class='card-text'> ${item.price} </P>
   <button class='btn btn-outline-primary'> ${item.weight} </button> `
   card.appendChild(cardBody);
});