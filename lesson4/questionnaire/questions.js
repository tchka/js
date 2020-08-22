let questionnaire = {

    questions: [
        `Как звали коня Александра Македонского?\n` +
        ` a. Росинант\n b. Слейпнир\n c. Буцефал\n d. Остолоп\n `,
        `Кто задушил Дездемону?\n` +
        ` a. Ромео\n b. Отелло\n c. Шекспир\n d. Гитлер\n `,
        `Как называется треугольный косой парус?\n` +
        ` a. Стаксель\n b. Румпель\n c. Пиксель\n d. Аналипус\n `,
        `Назовите столицу Замбии\n` +
        ` a. Биробиджан\n b. Такого государства нет\n c. Сана\n d. Лусака\n `,
        `Какая змея - самая ядовитая?\n` +
        ` a. Белчера\n b. Тайпан\n c. Черная мамба\n d. Гюрза\n `,

    ],

    availableAnswers: ['a', 'b', 'c', 'd'],

    answers: ['c', 'b', 'a', 'd', 'a'],

    ask(number) {
        while (true) {
            let userAnswer = prompt(this.questions[number]);
            if (userAnswer == null) {
                return null;
            }
            if (!this.availableAnswers.includes(userAnswer.toLowerCase())) {
                alert('Необходимо ввести один из вариантов (a, b, c, d)');
                continue;
            }
            return (userAnswer.toLowerCase() == this.answers[number]);
        }
    }
};