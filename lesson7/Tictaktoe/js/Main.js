window.addEventListener('load', () => {
    const status = new Status();
    const board = new Board();
//    const menu = new Menu();
//    const game = new Game();


    board.init(status);
//    game.init(status, board, menu);

    board.renderMap();
    board.initEventHandlers();

//    game.run();
});