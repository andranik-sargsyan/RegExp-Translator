let translatedText = document.getElementById("translated-text");
let languages = document.querySelectorAll("#languages > li");

let dictionary = {
    "am": "Ցավն ինքնին [temperature]°C է, պահպանման հիմնական համակարգը։ [salary]֏ կատվի մեջ: Morbi pellentesque a eros et ultricies. Ընտրեք մահճակալը, որն այժմ իմունային համակարգի կարիքն ունի, առանց դիմահարդարման: Մինչև վերջ տեսականին ոչ սովորական է, բայց ուզում եք անվճար գումար կամ. Քարոզչությունից, երբեմն միայն ոչ, մահճակալի փափուկ առողջությունը: Մենք ապրում ենք հեշտ լճերի [name] [age] և ոչ թե արջերի մաքուր թունավոր հղիության համար։ Նույնիսկ ցավն ու անկողինը ձորեր չեն։ Mauris tempor massa sed diam accumsan, vitae dapibus leo consectetur. Ազատ խաղացողների ցավի համար անդամները պետք է ուրախ լինեն, որ հաջողակ են, որ թթխմոր չկա։ Բայց ոչ էլ դարպասն է: Երեխաները, ովքեր ապրում են տխուր ծերության հիվանդության, ցանցերի, սովի և այլանդակ կարիքի մեջ: Հեղինակի կարծիքով՝ լիճը դյուրին չէ ներդնելը, խոշտանգողը խոնարհվել է էրոսի կոկորդին, կամ ցավը eu lorem-ի առավելության. Մենք Միացյալ Նահանգներում չենք ապրում։ Ամբողջական dignissim eros nec aliquam սահմաններ: Maecenas pellentesque consectetur [name].",
    "en": "The pain [temperature]°F is love, the main storage system. In an $[salary] cat. Morbi pellentesque a eros et ultricies. Choose the bed, the immune system now needs, put down makeup free. Until the end of the range is unconventional, but want free money or. From [name] [age] propaganda, at times it is only not, the soft health of the bed. We live for the easy lakes, and not for the pure venomous pregnancy of the bears. Even the pain and the bed are not valleys. Mauris tempor massa sed diam accumsan, vitae dapibus leo consectetur. For the pain is free, the members should be happy to be successful, that there is no leaven. But neither is the gate. The kids who dwell in the sickness of the sad old age, and the nets and the hunger and the ugly want. According to the author, the lake is not easy to invest, the torturer bow to the throat of the eros, or the pain of the pain of the advantage of the eu lorem. We don't live in the United States. Integer dignissim eros nec aliquam borders. Maecenas pellentesque consectetur [name].",
    "ru": "Сама боль и есть [temperature]°C главная система хранения. В [salary]₽ ко шке. Morbi pellentesque a eros et ultricies. Выберите кровать, в которой сейчас нуждается иммунная система, положите косметику без макияжа. До конца ассортимент нетрадиционный, но хочется свободных денег или. Из пропаганды временами только нет, мягкое здоровье постели. Мы живем для легких [name] [age] а не для чистой ядовитой беременности медведей. Даже боль и постель не долины. Mauris tempor massa sed diam accumsan, vitae dapibus leo consectetur. Для боли свободных агентов члены должны быть счастливы, чтобы быть успешными, что нет закваски. Но и ворот нет. Дети, живущие в болезни печальной старости, в сетях, голоде и безобразной нужде. По мнению автора, озеро не легко вложить, мучитель преклонится перед глоткой эроса, или боль боли преимущества эулорема. Мы живем не в Соединенных Штатах. Integer dignissim eros nec aliquam borders. Меценат pellentesque consectetur [name]."
};

let temperatureDefault = 100;
let salaryDefault = 1000;
let nameDefault = "Andranik";
let ageDefault = 50;

languages.forEach(item => {
    item.addEventListener("click", e => {
        let languageKey = e.target.parentElement.getAttribute("data-val");
        let template = dictionary[languageKey];

        let temperature = temperatureDefault;
        if (["am", "ru"].includes(languageKey)) {
            temperature = Math.round((temperatureDefault - 32) * 5 / 9 * 10) / 10;
        }

        let salary = salaryDefault;
        if (languageKey == "ru") {
            salary = salaryDefault * 62;
        }
        else if (languageKey == "am") {
            salary = salaryDefault * 475;
        }

        let name = nameDefault;
        if (languageKey == "ru") {
            name = "Андраник";
        }
        else if (languageKey == "am") {
            name = "Անդրանիկ";
        }

        let age = ageDefault;

        let token = {
            "temperature": temperature,
            "salary": salary,
            "name": name,
            "age": age
        };

        let pattern = "\\[temperature]|\\[salary]|\\[name]|\\[age]"

        translatedText.innerText = template.replace(new RegExp(`${pattern}`, "g"), function (match) {
            match = match.substring(1, match.length - 1);
            return token[match];
        });
    });
})