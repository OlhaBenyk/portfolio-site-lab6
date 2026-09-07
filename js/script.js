console.log('script.js підключено успішно');


const portfolioWorks = [
    {
        title: 'Студійний портрет «Warm Tones»',
        year: 2025,
        category: 'Фотографія'
    },
    {
        title: 'Брендинг для локальної кав’ярні',
        year: 2026,
        category: 'Дизайн'
    },
    {
        title: 'Пейзажна зйомка «Полісся»',
        year: 2024,
        category: 'Фотографія'
    },
    {
        title: 'Ретро-серія чорно-білих фотографій',
        year: 2021,
        category: 'Фотографія'
    },
    {
        title: 'Айдентика архітектурного бюро',
        year: 2022,
        category: 'Дизайн'
    }
];


const isRecent = year => (2026 - year) <= 2;


function displayWorksByCategory(works, targetCategory) {
    console.log(`--- Список робіт за категорією: "${targetCategory}" ---`);

    for (const work of works) {
        if (work.category === targetCategory) {
            const isOlderThan3Years = (2026 - work.year) > 3;

            let ageStatus = '';
            if (isOlderThan3Years) {
                ageStatus = '[Архівна робота: старша 3 років]';
            } else if (isRecent(work.year)) {
                ageStatus = '[Свіжа робота: створена нещодавно]';
            } else {
                ageStatus = '[Актуальна робота]';
            }

            console.log(`Проєкт: "${work.title}" (${work.year} р.) ${ageStatus}`);
        }
    }
}

displayWorksByCategory(portfolioWorks, 'Фотографія');
console.log('\n');
displayWorksByCategory(portfolioWorks, 'Дизайн');

console.log('\n--- Тестування стрілкової функції isRecent ---');
console.log(`Чи є 2025 рік нещодавнім? -> ${isRecent(2025)}`);
console.log(`Чи є 2021 рік нещодавнім? -> ${isRecent(2021)}`);