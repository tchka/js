window.addEventListener('load', () => {
    const status = new Status();
    const board = new Board();


    board.init(status);

    board.renderMap();
    board.initEventHandlers();


});