
const data = [
    {
    img:'./img/card 1.svg',
    name: 'Постоянное наличие',
    text: 'Прямая работа с производителем обеспечивает постоянное наличие всех видом металлопроката'
    },
    {
    img:'./img/card 2.svg',
    name: 'Собственный автопарк',
    text: 'Автомобили грузоподъемностью от 1.5 до 20 тонн. Всегда быстрая доставка.'
    },
    {
    img:'./img/card 3.svg',
    name: 'Объемы поставок',
    text: 'Собственная служба доставки, гаранатирует вам поставку материалов на объект в кратчайшие сроки.'
    },
    {
    img:'./img/card 4.svg',
    name: 'Справедливая цена',
    text: 'Собственные ресурсы и транспорт позволяют снижать стоимость.'
    },
    {
    img:'./img/card 5.svg',
    name: 'Обработка заявки < 30 минут',
    text: 'Отдел продаж, насчитывающий более 80 сотрудников, не оставит вашу заявку без внимания.'
    },
    {
    img:'./img/card 6.png',
    name: 'Погрузка без очередей',
    text: 'Развитая складская логистика позволяет отгружать продукцию всегда без очередей.'
    },
];




const sss = document.querySelector('#sss')

data.forEach((item) => {
    const talList = document.createElement('div');
    talList.innerHTML = `
<div class=' shadow-2xl w-[496px] h-[330px] mt-[30px] px-[80px] py-[40px] rounded-[14px] '>
     <img class="w-[60px]" src="${item.img}">
     <h1 class="my-[20px] text-[24px] text-[#4B4A53]">${item.name}</h1>
     <p class="text-[18px] text-[#69686F]"> ${item.text}</p>
</div> 
    `;
    sss.appendChild(talList)
});


const dataa = [
    {
    img1:'./img/m clasic.svg',
    name1: 'Металлочерепица Classic',
    brand: "Бренд",
    height: "Высота волны, мм",
    metre: "Высота ступеньки, мм",
    grand: "Grande Line",
    number: "23.5",
    num: "20",
    pub: 'от 433 ₽/м²',
    color: "Цвет",
    input: "Т",
    width: "олщина",
    face: 'Поверхность',
    button: "Рассчитать стоимость",
    buttonn: 'Подробнее о товаре',

    },

];

const sad = document.querySelector("#sad")
dataa.forEach((item) => {
    const talList = document.createElement('div');
    talList.innerHTML = `
    <div class=' shadow-2xl w-[362px] h-[880px] mt-[40px] border-[2px]    </div>
    <img class="w-[362px]" src="${item.img1}">



    `
    sad.appendChild(talList)
});