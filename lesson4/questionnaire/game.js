
let game = {
    score: 0,
    //Запускает игру
    run() {

        while (true) {
            for (let question = 0; question < config.questionNumber; question++) {
                result = questionnaire.ask(question);
                if (result == null) {
                    alert('Игра окончена.');
                    return;
                }
                if (result === true) {
                    this.score++;
                }

            }
            alert(`Ваш счет: ${this.score}`);
            if (prompt('Сыграть еще? (y/n)') !== 'y') {
                alert('Игра окончена.');
                return;
            }
            this.score = 0;
        }

    }
};

game.run();