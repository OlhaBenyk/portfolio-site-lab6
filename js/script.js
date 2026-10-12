// Перевірка підключення зовнішнього файлу скрипта
console.log('script.js підключено успішно');

// Оголошення структури даних: масив об'єктів робіт портфоліо
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

// Стрілкова функція: перевіряє, чи є проєкт свіжим (створеним за останні 2 роки)
const isRecent = year => (2026 - year) <= 2;

// Функція обробки даних циклом for...of з умовною класифікацією та виведенням у консоль
function displayWorksByCategory(works, targetCategory) {
    console.log(`--- Список робіт за категорією: "${targetCategory}" ---`);

    // Перебір елементів масиву робіт
    for (const work of works) {
        if (work.category === targetCategory) {
            // Перевірка, чи є робота старшою за 3 роки
            const isOlderThan3Years = (2026 - work.year) > 3;

            // Визначення статусу роботи залежно від віку
            let ageStatus = '';
            if (isOlderThan3Years) {
                ageStatus = '[Архівна робота: старша 3 років]';
            } else if (isRecent(work.year)) {
                ageStatus = '[Свіжа робота: створена нещодавно]';
            } else {
                ageStatus = '[Актуальна робота]';
            }

            // Виведення відфільтрованого результату в консоль
            console.log(`Проєкт: "${work.title}" (${work.year} р.) ${ageStatus}`);
        }
    }
}

// Виклик функції для категорії "Фотографія"
displayWorksByCategory(portfolioWorks, 'Фотографія');
console.log('\n');
// Виклик функції для категорії "Дизайн"
displayWorksByCategory(portfolioWorks, 'Дизайн');

// Тестування роботи стрілкової функції isRecent для окремих років
console.log('\n--- Тестування стрілкової функції isRecent ---');
console.log(`Чи є 2025 рік нещодавнім? -> ${isRecent(2025)}`);
console.log(`Чи є 2021 рік нещодавнім? -> ${isRecent(2021)}`);
