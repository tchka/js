/**
 * Объект игрока - свойста и методы настройками игры
 * @property {x} позиция по координате X
 * @property {y} позиция по координате Y
 */

player = {
  x: 0,
  y: 0,
    /**
     * Двигает игрока в переданном направлении
     * @param {{x: int, y: int}} nextPoint следующая точка пользователя
     */
  move(nextPoint) {
      this.x = nextPoint.x;
      this.y = nextPoint.y;
    }

};
