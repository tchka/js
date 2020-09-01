class Snake {
    constructor() {
        this.possibleDirections = ['down', 'up', 'left', 'right'];

        this.body = [{
            x: 1,
            y: 1,
        }];

        this.direction = 'down';
    }

    /**
     * Метод получает другие игровые объекты, которые нужны ему
     * для работы.
     * @param {Settings} settings объект настроек.
     */
    init(settings) {
        this.settings = settings;
    }


    /**
     * Меняем направление движения.
     * @param {string} newDirection направление может быть down, up, left, right.
     * @throws {Error} при передаче не корректного направления выбрасывается ошибка.
     */
    changeDirection(newDirection) {
        if (!this.possibleDirections.includes(newDirection)) {
            throw new Error('Передано не верное направление. Вы передали: ' + newDirection);
        }
        if (this.isPassedOppositeDirection(newDirection)) {
            return;
        }
        this.direction = newDirection;
    }

    /**
     * Метод проверяет, является ли переданное направление, противоположным
     * тому куда сейчас движется змейка.
     * @param {string} newDirection новое направление, может быть up, down, right, left.
     * @returns {boolean} true если новое направление противоположно текущему,
     * иначе false.
     */
    isPassedOppositeDirection(newDirection) {
        if (this.direction == 'down' && newDirection == 'up') {
            return true;
        }
        if (this.direction == 'up' && newDirection == 'down') {
            return true;
        }
        if (this.direction == 'left' && newDirection == 'right') {
            return true;
        }
        if (this.direction == 'right' && newDirection == 'left') {
            return true;
        }
        return false;
    }

    /**
     * Метод осуществляет шаг змейки. Добавляет ячейку перед существующим
     * положением головы и удаляет одну ячейку в хвосте.
     */
    performStep() {
        let currentHeadCoords = this.body[0];
        let newHeadCoords = {
            x: currentHeadCoords.x,
            y: currentHeadCoords.y,
        };
        switch (this.direction) {
            case "down":
                newHeadCoords.y++;
                break;
            case "up":
                newHeadCoords.y--;
                break;
            case "left":
                newHeadCoords.x--;
                break;
            case "right":
                newHeadCoords.x++;
                break;
        }
        this.body.unshift(newHeadCoords);
        this.body.pop();
        this.transferIfWall();
    }

    transferIfWall() {
        for (let i = 0; i < this.body.length; i++) {
            this.body[i].x = this.body[i].x % this.settings.colsCount;
            if (this.body[i].x == 0) this.body[i].x = this.settings.colsCount;
            this.body[i].y = this.body[i].y % this.settings.rowsCount;
            if (this.body[i].y == 0) this.body[i].y = this.settings.rowsCount;
        }
    }

    /**
     * Метод дублирует в массиве объектов представляющих тело змейки
     * последнюю ячейку, т.е. в массиве в конце оказываются два
     * одинаковых объекта. Когда метод performStep в самом конце
     * удаляет последний элемент массива, он удаляет сдублированный
     * объект, таким образом тело змейки растет.
     */
    increaseBody() {
        let bodyLastCell = this.body[this.body.length - 1];
        let newBodyLastCell = {
            x: bodyLastCell.x,
            y: bodyLastCell.y,
        };
        this.body.push(newBodyLastCell);
    }
}