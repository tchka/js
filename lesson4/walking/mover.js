let mover = {
    /**
     * Получает и отдает направление от пользователя
     * @return {int} возвращает направление, введенное пользователем.
     */
    getDirection() {
        const availableDirections = [2, 4, 6, 8, 1, 3, 7, 9];
        while (true) {
            let direction = parseInt(prompt('Введите число (2, 4, 6, 8, 1, 3, 7, 9), куда вы хотитепереместиться, "отмена" для выхода.'));
            if (isNaN(direction)) {
                return null;
            }
            if (!availableDirections.includes(direction)) {
                alert('Для перемещения необходимо ввести одно из чисел  (2, 4, 6, 8, 1, 3, 7, 9)');
                continue;
            }
            return direction;

        }
    },

    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y,
        };
        switch (direction) {
            case 2:
                nextPosition.y++;
                break;
            case 4:
                nextPosition.x--;
                break;
            case 6:
                nextPosition.x++;
                break;
            case 8:
                nextPosition.y--;
                break;
            case 1:
                nextPosition.y++;
                nextPosition.x--;
                break;
            case 3:
                nextPosition.y++;
                nextPosition.x++;
                break;
            case 7:
                nextPosition.y--;
                nextPosition.x--;
                break;
            case 9:
                nextPosition.y--;
                nextPosition.x++;
                break;
        }
        if (nextPosition.x < 0) {
            nextPosition.x = 0;
        }
        if (nextPosition.y < 0) {
            nextPosition.y = 0;
        }
        if (nextPosition.x > config.colsCount-1) {
            nextPosition.x = config.colsCount-1;
        }
        if (nextPosition.y > config.rowsCount-1) {
            nextPosition.y = config.rowsCount-1;
        }
        return nextPosition;

    }


};