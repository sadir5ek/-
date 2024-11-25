

import {data, krov, metal, prof} from "./data.js";
console.log(data);
const sss = document.querySelector('#sss'); 
data.forEach((item) => {
    const talList = document.createElement('div');
    talList.innerHTML = `
        <div class="relative w-[496px] h-[330px] mt-[30px] p-[40px] px-[80px] rounded-[14px] shadow-2xl bg-[#f0f0f0] cursor-pointer select-none transition-all duration-700 transform hover:scale-105 hover:rotate-[5deg] hover:shadow-2xl hover:bg-[#F1F1F1] animate__animated animate__fadeInUp animate__delay-1s hover:animate__pulse">
            <!-- Image Section -->
            <img class="w-[60px] transition-all duration-500 hover:scale-110" src="${item.img}" alt="Image">

            <!-- Title Section -->
            <h1 class="my-[20px] text-[24px] text-[#4B4A53] transition-all duration-500 transform hover:text-[#EE0000] ">${item.name}</h1>

            <!-- Text Section -->
            <p class="text-[18px] text-[#69686F] transition-all duration-500 duration-500 transform hover:text-[#EE0000] ">${item.text}</p>
        </div>
    `;
    sss.appendChild(talList);
});

// const sss = document.querySelector('#sss')
// data.forEach((item) => {
//     const talList = document.createElement('div');
//     talList.innerHTML = `
// <div class=' shadow-2xl w-[496px] h-[330px] mt-[30px] px-[80px] hover:bg-[#F1F1F1] cursor-pointer  py-[40px] rounded-[14px]  select-none transition-all duration-500  '>
//      <img class="w-[60px]" src="${item.img}">
//      <h1 class="my-[20px] text-[24px] text-[#4B4A53]">${item.name}</h1>
//      <p class="text-[18px] text-[#69686F]"> ${item.text}</p>
// </div> 
//     `;
//     sss.appendChild(talList)
// });


const sad = document.querySelector('#sad'); 
metal.forEach((metal) => {
    const talList = document.createElement('div');
    talList.innerHTML = `
        <div class="w-[362px] h-[880px] bg-[#FAFAFA] border-[1px] border-transparent hover:border-[#28303699] cursor-pointer transition-all duration-300 ease-in-out transform hover:translate-y-[-30px] hover:shadow-xl">
            <!-- Image Section -->
            <img src="${metal.img1}" alt="Image" class="w-full h-[200px] object-cover rounded-t-[10px]">

            <!-- Title Section -->
            <h2 class="text-[22px] font-bold ml-[30px] mt-[35px]">${metal.name1}</h2>

            <!-- Brand & Grand Section -->
            <div class="flex ml-[30px] mt-[15px]">
                <h4 class="text-[#44444E]">${metal.brand}</h4>
                <p class="ml-[160px] text-[#44444E]">${metal.grand}</p>
            </div>

            <!-- Height & Number Section -->
            <div class="flex ml-[30px] text-[#44444E]">
                <h4 class="text-[#44444E]">${metal.height}</h4>
                <p class="ml-[127px] text-[#44444E]">${metal.number}</p>
            </div>

            <!-- Metre & Num Section -->
            <div class="flex ml-[30px] text-[#44444E]">
                <h4 class="text-[#44444E]">${metal.metre}</h4>
                <p class="ml-[112px] text-[#44444E]">${metal.num}</p>
            </div>

            <!-- Second Image Section -->
            <img src="${metal.img2}" class="ml-[30px] w-[142px] mt-[15px]">

            <!-- Color Section -->
            <div class="ml-[30px] mt-[17px]">
                <h3 class="text-[#44444E]">${metal.color}</h3>
                <select name="" id="" class="w-[152px] h-[28px] border-[#EFEFEF] rounded-[5px] border-[2px] mt-[5px]">
                    <option value="" class="font-bold text-[#44444E] text-[14px]">${metal.input}</option>
                    <option value="${metal.valie1}">${metal.valie1}</option>
                    <option value="${metal.valie2}">${metal.valie2}</option>
                    <option value="${metal.valie3}">${metal.valie3}</option>
                </select>
            </div>

            <!-- Width Section -->
            <div class="ml-[30px] mt-[15px]">
                <h3 class="text-[#44444E]">${metal.width}</h3>
                <select name="" id="" class="w-[152px] h-[28px] border-[#EFEFEF] rounded-[5px] border-[2px] mt-[5px]">
                    <option value="" class="font-bold text-[#44444E] text-[14px]">${metal.input1}</option>
                    <option value="${metal.walie1}">${metal.walie1}</option>
                    <option value="${metal.walie2}">${metal.walie2}</option>
                    <option value="${metal.walie3}">${metal.walie3}</option>
                </select>
            </div>

            <!-- Face Section -->
            <div class="ml-[30px] mt-[15px]">
                <h3 class="text-[#44444E]">${metal.face}</h3>
                <select name="" id="" class="w-[152px] h-[28px] border-[#EFEFEF] rounded-[5px] border-[2px] mt-[5px]">
                    <option value="" class="font-bold text-[#44444E] text-[14px]">${metal.input2}</option>
                    <option value="${metal.vallie1}">${metal.vallie1}</option>
                    <option value="${metal.vallie2}">${metal.vallie2}</option>
                    <option value="${metal.vallie3}">${metal.vallie3}</option>
                </select>
            </div>

            <!-- Button Section -->
            <a href="#section3">
                <button class="border-[1px] w-[216px] h-[49px] rounded-[60px] bg-[#FFC400] text-[18px] ml-[30px] mt-[25px]">${metal.button}</button>
            </a>
            <button class="border-[2px] border-[#FFC400] w-[206px] h-[49px] rounded-[60px] text-[18px] ml-[30px] mt-[25px]">${metal.buttonn}</button>
        </div>
    `;
    sad.appendChild(talList);
});


// const sad = document.querySelector('#sad')
// metal.forEach((metal) => {
//     const talList = document.createElement('div');
//     talList.innerHTML = `
//  <div class="w-[362px] h-[880px] hover:bg-[#F1F1F1] cursor-pointer border-[4px] bg-[#FAFAFA] ">
//                 <img src="${metal.img1}" >
//                 <h2 class="text-[22px] font-bold ml-[30px] mt-[35px]">${metal.name1}</h2>
//                 <div class="flex ml-[30px] mt-[15px]">
//                     <h4 class="text-[#44444E] ">${metal.brand}</h4>
//                     <p class="ml-[160px] text-[#44444E]">${metal.grand} </p>
//                 </div>
//                 <div class="flex ml-[30px] text-[#44444E]">
//             <h4 class="text-[#44444E]">${metal.height} </h4>
//                     <p class="ml-[127px] text-[#44444E]">${metal.number} </p>
//                 </div>
//                 <div class="flex ml-[30px] text-[#44444E]">
//                     <h4 class="text-[#44444E]">${metal.metre}  </h4>
//                     <p class="ml-[112px] text-[#44444E]">${metal.num} </p>
//                 </div>
//                 <img src="${metal.img2} " class="ml-[30px] w-[142px] mt-[15px]">

//                 <div class="ml-[30px] mt-[17px]">
//                     <h3 class="text-[#44444E]">${metal.color} </h3>
//                     <select name="" id="" class="w-[152px] h-[28px] border-[#EFEFEF] rounded-[5px] border-[2px] mt-[5px]  ">
//                         <option value="" class="font-bold Weight-[500px] text-[#44444E] text-[14px]">${metal.input} </option>
//                         <option value="${metal.valie1} "></option>
//                         <option value="">${metal.valie2}</option>
//                         <option value="">${metal.valie3}</option>
//                       </select>
//                 </div> <div class="ml-[30px] mt-[15px]">
//                     <h3 class="text-[#44444E]">${metal.width} </h3>
//                     <select name="" id="" class="w-[152px] h-[28px] border-[#EFEFEF] rounded-[5px] border-[2px] mt-[5px]  ">
//                         <option value="" class="font-bold Weight-[500px] text-[#44444E] text-[14px]">${metal.input1} </option>
//                         <option value="">${metal.walie1} </option>
//                         <option value="">${metal.walie2}</option>
//                         <option value="">${metal.walie3}</option>
//                       </select>
//                 </div> <div class="ml-[30px] mt-[15px]">
//                     <h3 class="text-[#44444E]">${metal.face} </h3>
//                     <select name="" id="" class="w-[152px] h-[28px] border-[#EFEFEF] rounded-[5px] border-[2px] mt-[5px]  ">
//                         <option value="" class="font-bold Weight-[500px] text-[#44444E] text-[14px]">${metal.input2} </option>
//                         <option value="">${metal.vallie1} </option>
//                         <option value="">${metal.vallie2} </option>
//                         <option value="">${metal.vallie3} </option>
//                       </select>
//                 </div>
//                <a href="#section3"> <button  class="border-[1px] w-[216px] h-[49px] rounded-[60px] bg-[#FFC400] text-[18px] ml-[30px] mt-[25px]  ">${metal.button} </button>  </a>
//                 <button class="border-[2px] border-[#FFC400] w-[206px] h-[49px] rounded-[60px]  text-[18px] ml-[30px] mt-[25px] ">${metal.buttonn} </button>  
//             </div>
//     `;
//     sad.appendChild(talList)
// });




// const prof = [
//     {
//         imgg:'./img/proff.png',
//         imgg1:'./img/286.svg',
//         name2: 'Профнастил C8',
//         brand2: "Бренд",
//         height2: "Ширина общая, мм",
//         metre2: "Ширина полезная, мм",
//         grand2: "Grande Line",
//         number2: "1200",
//         num2: "1160",
//         colorr: "Цвет",
//         inputt: "Оцинкованный",
//         valie11:"Оцинкованный.2",
//         valie22:"Оцинкованный.3",
//         valie33:"Оцинкованный.4",
//         widthh: "Толщина",
//         input11:"0,35",
//         walie11:"0,45",
//         walie22:"0,55",
//         walie33:"0,65",
//         facee: 'Поверхность',
//         input22:"выбрать",
//         vallie11:"не выбрать",
//         vallie22:"думать",
//         vallie33:"не думать",
//         buttonn: "Рассчитать стоимость",
//         buttonnn: 'Подробнее о товаре',
    
//     },
// ]


const dir = document.querySelector('#dir');
prof.forEach((prof) => {
    const talList = document.createElement('div');
    talList.innerHTML = `
        <div class="w-[362px] h-[880px] bg-[#FAFAFA] border-[1px] border-transparent hover:border-[#28303699] cursor-pointer transition-all duration-300 ease-in-out transform hover:translate-y-[-30px] hover:shadow-xl">
            <!-- Image Section -->
            <img src="${prof.imgg}" alt="Image" class="w-full h-[200px] object-cover rounded-t-[10px]">

            <!-- Title Section -->
            <h2 class="text-[22px] font-bold ml-[30px] mt-[35px]">${prof.name2}</h2>

            <!-- Brand & Grand Section -->
            <div class="flex ml-[30px] mt-[15px]">
                <h4 class="text-[#44444E]">${prof.brand2}</h4>
                <p class="ml-[160px] text-[#44444E]">${prof.grand2}</p>
            </div>

            <!-- Height & Number Section -->
            <div class="flex ml-[30px] text-[#44444E]">
                <h4 class="text-[#44444E]">${prof.height2}</h4>
                <p class="ml-[127px] text-[#44444E]">${prof.number2}</p>
            </div>

            <!-- Metre & Num Section -->
            <div class="flex ml-[30px] text-[#44444E]">
                <h4 class="text-[#44444E]">${prof.metre2}</h4>
                <p class="ml-[112px] text-[#44444E]">${prof.num2}</p>
            </div>

            <!-- Second Image Section -->
            <img src="${prof.imgg1}" class="ml-[30px] w-[142px] mt-[15px]">

            <!-- Color Section -->
            <div class="ml-[30px] mt-[17px]">
                <h3 class="text-[#44444E]">${prof.colorr}</h3>
                <select name="" id="" class="w-[152px] h-[28px] border-[#EFEFEF] rounded-[5px] border-[2px] mt-[5px]">
                    <option value="" class="font-bold text-[#44444E] text-[14px]">${prof.inputt}</option>
                    <option value="${prof.valie11}">${prof.valie11}</option>
                    <option value="${prof.valie22}">${prof.valie22}</option>
                    <option value="${prof.valie33}">${prof.valie33}</option>
                </select>
            </div>

            <!-- Width Section -->
            <div class="ml-[30px] mt-[15px]">
                <h3 class="text-[#44444E]">${prof.widthh}</h3>
                <select name="" id="" class="w-[152px] h-[28px] border-[#EFEFEF] rounded-[5px] border-[2px] mt-[5px]">
                    <option value="" class="font-bold text-[#44444E] text-[14px]">${prof.input11}</option>
                    <option value="${prof.walie11}">${prof.walie11}</option>
                    <option value="${prof.walie22}">${prof.walie22}</option>
                    <option value="${prof.walie33}">${prof.walie33}</option>
                </select>
            </div>

            <!-- Face Section -->
            <div class="ml-[30px] mt-[15px]">
                <h3 class="text-[#44444E]">${prof.facee}</h3>
                <select name="" id="" class="w-[152px] h-[28px] border-[#EFEFEF] rounded-[5px] border-[2px] mt-[5px]">
                    <option value="" class="font-bold text-[#44444E] text-[14px]">${prof.input22}</option>
                    <option value="${prof.vallie11}">${prof.vallie11}</option>
                    <option value="${prof.vallie22}">${prof.vallie22}</option>
                    <option value="${prof.vallie33}">${prof.vallie33}</option>
                </select>
            </div>

            <!-- Button Section -->
            <a href="#section3">
                <button class="border-[1px] w-[216px] h-[49px] rounded-[60px] bg-[#FFC400] text-[18px] ml-[30px] mt-[25px]">${prof.buttonn}</button>
            </a>
            <button class="border-[2px] border-[#FFC400] w-[206px] h-[49px] rounded-[60px] text-[18px] ml-[30px] mt-[25px]">${prof.buttonnn}</button>
        </div>
    `;
    dir.appendChild(talList);
});

// const dir = document.querySelector('#dir')
// prof.forEach((prof) => {
//     const talList = document.createElement('div');
//     talList.innerHTML = `
//  <div class="w-[362px] h-[880px] hover:bg-[#F1F1F1] cursor-pointer border-[4px] bg-[#FAFAFA] ">
//                 <img src="${prof.imgg}" >
//                 <h2 class="text-[22px] font-bold ml-[30px] mt-[35px]">${prof.name2}</h2>
//                 <div class="flex ml-[30px] mt-[15px]">
//                     <h4 class="text-[#44444E] ">${prof.brand2}</h4>
//                     <p class="ml-[160px] text-[#44444E]">${prof.grand2} </p>
//                 </div>
//                 <div class="flex ml-[30px] text-[#44444E]">
//             <h4 class="text-[#44444E]">${prof.height2} </h4>
//                     <p class="ml-[127px] text-[#44444E]">${prof.number2} </p>
//                 </div>
//                 <div class="flex ml-[30px] text-[#44444E]">
//                     <h4 class="text-[#44444E]">${prof.metre2}  </h4>
//                     <p class="ml-[112px] text-[#44444E]">${prof.num2} </p>
//                 </div>
//                 <img src="${prof.imgg1} " class="ml-[30px] w-[142px] mt-[15px]">

//                 <div class="ml-[30px] mt-[17px]">
//                     <h3 class="text-[#44444E]">${prof.colorr} </h3>
//                     <select name="" id="" class="w-[152px] h-[28px] border-[#EFEFEF] rounded-[5px] border-[2px] mt-[5px]  ">
//                         <option value="" class="font-bold Weight-[500px] text-[#44444E] text-[14px]">${prof.inputt} </option>
//                         <option value="${prof.valie11} "></option>
//                         <option value="">${prof.valie22}</option>
//                         <option value="">${prof.valie33}</option>
//                       </select>
//                 </div> <div class="ml-[30px] mt-[15px]">
//                     <h3 class="text-[#44444E]">${prof.widthh} </h3>
//                     <select name="" id="" class="w-[152px] h-[28px] border-[#EFEFEF] rounded-[5px] border-[2px] mt-[5px]  ">
//                         <option value="" class="font-bold Weight-[500px] text-[#44444E] text-[14px]">${prof.input11} </option>
//                         <option value="">${prof.walie11} </option>
//                         <option value="">${prof.walie22}</option>
//                         <option value="">${prof.walie33}</option>
//                       </select>
//                 </div> <div class="ml-[30px] mt-[15px]">
//                     <h3 class="text-[#44444E]">${prof.facee} </h3>
//                     <select name="" id="" class="w-[152px] h-[28px] border-[#EFEFEF] rounded-[5px] border-[2px] mt-[5px]  ">
//                         <option value="" class="font-bold Weight-[500px] text-[#44444E] text-[14px]">${prof.input22} </option>
//                         <option value="">${prof.vallie11} </option>
//                         <option value="">${prof.vallie22} </option>
//                         <option value="">${prof.vallie33} </option>
//                       </select>
//                 </div>
//           <a href="#section3"><button class="border-[1px] w-[216px] h-[49px] rounded-[60px] bg-[#FFC400] text-[18px] ml-[30px] mt-[25px]  ">${prof.buttonn} </button> </a> 
//                 <button class="border-[2px] border-[#FFC400] w-[206px] h-[49px] rounded-[60px]  text-[18px] ml-[30px] mt-[25px] ">${prof.buttonnn} </button>  
//             </div>

//     `;
//     dir.appendChild(talList)
// });



// const krov = [
//     {
//         img9:'./img/Product picture.png',
//         imgg9:'./img/665.svg',
//         name9: 'Кликфальц',
//         brand9: "Бренд",
//         height9: "Максимальная длина, м",
//         metre9: "Минимальная длина, м",
//         grand9: "Grande Line",
//         number9: "9",
//         num9: "1160",
//         color9: "Цвет",
//         input19: "Satin с пленкой на краях RAL",
//         valie19:"Satin с пленкой на краях VAR",
//         valie29:"Satin с пленкой на краях RES",
//         valie39:"Satin с пленкой на краях VAS",
//         width9: "Толщина",
//         input29:"0,5",
//         walie19:"0,6",
//         walie29:"0,7",
//         walie39:"0,8",
//         face9: 'Поверхность',
//         input39:"Глнянцевая",
//         valliee9:"Глнянцевая 1",
//         valliee19:"Глнянцевая 2",
//         valliee29:"Глнянцевая 3",
//         button9: "Рассчитать стоимость",
//         button19: 'Подробнее о товаре',
    
//     },
// ];


const bek = document.querySelector('#bek');

krov.forEach((krov) => {
    const talList = document.createElement('div');
    talList.innerHTML = `
        <div class="w-[362px] h-[880px] bg-[#FAFAFA] border-[1px] border-transparent hover:border-[#28303699] cursor-pointer transition-all duration-300 ease-in-out transform hover:translate-y-[-30px] hover:shadow-xl">
            <!-- Image Section -->
            <img src="${krov.img9}" alt="${krov.name9}" class="w-full h-[200px] object-cover rounded-t-[10px]">
            
            <!-- Name Section -->
            <h2 class="text-[22px] font-bold ml-[30px] mt-[35px]">${krov.name9}</h2>

            <!-- Brand & Grand Section -->
            <div class="flex ml-[30px] mt-[15px]">
                <h4 class="text-[#44444E]">${krov.brand9}</h4>
                <p class="ml-[160px] text-[#44444E]">${krov.grand9}</p>
            </div>

            <!-- Height & Number Section -->
            <div class="flex ml-[30px] text-[#44444E]">
                <h4 class="text-[#44444E]">${krov.height9}</h4>
                <p class="ml-[127px] text-[#44444E]">${krov.number9}</p>
            </div>

            <!-- Metre & Num Section -->
            <div class="flex ml-[30px] text-[#44444E]">
                <h4 class="text-[#44444E]">${krov.metre9}</h4>
                <p class="ml-[112px] text-[#44444E]">${krov.num9}</p>
            </div>

            <!-- Image Section 2 -->
            <img src="${krov.imgg9}" class="ml-[30px] w-[142px] mt-[15px]" alt="Additional Image">

            <!-- Color Section -->
            <div class="ml-[30px] mt-[17px]">
                <h3 class="text-[#44444E]">${krov.color9}</h3>
                <select name="" id="" class="w-[152px] h-[28px] border-[#EFEFEF] rounded-[5px] border-[2px] mt-[5px]">
                    <option value="" class="font-bold text-[#44444E] text-[14px]">${krov.input19}</option>
                    <option value="${krov.valie19}">${krov.valie19}</option>
                    <option value="${krov.valie29}">${krov.valie29}</option>
                    <option value="${krov.valie39}">${krov.valie39}</option>
                </select>
            </div>

            <!-- Width Section -->
            <div class="ml-[30px] mt-[15px]">
                <h3 class="text-[#44444E]">${krov.width9}</h3>
                <select name="" id="" class="w-[152px] h-[28px] border-[#EFEFEF] rounded-[5px] border-[2px] mt-[5px]">
                    <option value="" class="font-bold text-[#44444E] text-[14px]">${krov.input29}</option>
                    <option value="${krov.walie19}">${krov.walie19}</option>
                    <option value="${krov.walie29}">${krov.walie29}</option>
                    <option value="${krov.walie39}">${krov.walie39}</option>
                </select>
            </div>

            <!-- Face Section -->
            <div class="ml-[30px] mt-[15px]">
                <h3 class="text-[#44444E]">${krov.face9}</h3>
                <select name="" id="" class="w-[152px] h-[28px] border-[#EFEFEF] rounded-[5px] border-[2px] mt-[5px]">
                    <option value="" class="font-bold text-[#44444E] text-[14px]">${krov.input39}</option>
                    <option value="${krov.valliee9}">${krov.valliee9}</option>
                    <option value="${krov.valliee19}">${krov.valliee19}</option>
                    <option value="${krov.valliee29}">${krov.valliee29}</option>
                </select>
            </div>

            <!-- Buttons Section -->
            <a href="#section3">
                <button class="border-[1px] w-[216px] h-[49px] rounded-[60px] bg-[#FFC400] text-[18px] ml-[30px] mt-[25px]">${krov.button9}</button>
            </a>
            <button class="border-[2px] border-[#FFC400] w-[206px] h-[49px] rounded-[60px] text-[18px] ml-[30px] mt-[25px]">${krov.button19}</button>
        </div>
    `;
    bek.appendChild(talList);
});

// const bek = document.querySelector('#bek')
// krov.forEach((krov) => {
//     const talList = document.createElement('div');
//     talList.innerHTML = `
//     <div class="w-[362px] hover:bg-[#F1F1F1] cursor-pointer h-[880px] border-[4px] bg-[#FAFAFA] ">
//                 <img src="${krov.img9}" >
//                 <h2 class="text-[22px] font-bold ml-[30px] mt-[35px]">${krov.name9}</h2>
//                 <div class="flex ml-[30px] mt-[15px]">
//                     <h4 class="text-[#44444E] ">${krov.brand9}</h4>
//                     <p class="ml-[160px] text-[#44444E]">${krov.grand9} </p>
//                 </div>
//                 <div class="flex ml-[30px] text-[#44444E]">
//             <h4 class="text-[#44444E]">${krov.height9} </h4>
//                     <p class="ml-[127px] text-[#44444E]">${krov.number9} </p>
//                 </div>
//                 <div class="flex ml-[30px] text-[#44444E]">
//                     <h4 class="text-[#44444E]">${krov.metre9}  </h4>
//                     <p class="ml-[112px] text-[#44444E]">${krov.num9} </p>
//                 </div>
//                 <img src="${krov.imgg9} " class="ml-[30px] w-[142px] mt-[15px]">

//                 <div class="ml-[30px] mt-[17px]">
//                     <h3 class="text-[#44444E]">${krov.color9} </h3>
//                     <select name="" id="" class="w-[152px] h-[28px] border-[#EFEFEF] rounded-[5px] border-[2px] mt-[5px]  ">
//                         <option value="" class="font-bold Weight-[500px] text-[#44444E] text-[14px]">${krov.input19} </option>
//                         <option value="${krov.valie19} "></option>
//                         <option value="">${krov.valie29}</option>
//                         <option value="">${krov.valie39}</option>
//                       </select>
//                 </div> <div class="ml-[30px] mt-[15px]">
//                     <h3 class="text-[#44444E]">${krov.width9} </h3>
//                     <select name="" id="" class="w-[152px] h-[28px] border-[#EFEFEF] rounded-[5px] border-[2px] mt-[5px]  ">
//                         <option value="" class="font-bold Weight-[500px] text-[#44444E] text-[14px]">${krov.input29} </option>
//                         <option value="">${krov.walie19} </option>
//                         <option value="">${krov.walie29}</option>
//                         <option value="">${krov.walie39}</option>
//                       </select>
//                 </div> <div class="ml-[30px] mt-[15px]">
//                     <h3 class="text-[#44444E]">${krov.face9} </h3>
//                     <select name="" id="" class="w-[152px] h-[28px] border-[#EFEFEF] rounded-[5px] border-[2px] mt-[5px]  ">
//                         <option value="" class="font-bold Weight-[500px] text-[#44444E] text-[14px]">${krov.input39} </option>
//                         <option value="">${krov.valliee9} </option>
//                         <option value="">${krov.valliee19} </option>
//                         <option value="">${krov.valliee29} </option>
//                       </select>
//                 </div>
//                 <a href="#section3"><button class="border-[1px] w-[216px] h-[49px] rounded-[60px] bg-[#FFC400] text-[18px] ml-[30px] mt-[25px]  ">${krov.button9} </button>  </a>
//                 <button class="border-[2px] border-[#FFC400] w-[206px] h-[49px] rounded-[60px]  text-[18px] ml-[30px] mt-[25px] ">${krov.button19} </button>  
//             </div>


//     `;
//     bek.appendChild(talList)
// });



