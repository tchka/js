
let renderer = {

//Отобюражает доску
    renderBoard() {
        let result = this.generateBoard();

    },

    generateBoard() {
        let board = '';
        board += '<table>';

        for (let row =0; row < config.rowsCount; row++) {
            board += '<tr>';
            for (let col = 0; col < config.colsCount; col++) {
                board += '<td>';
                figures.forEach(function(figure) {
                    if (figure.y === row && figure.x === col) {
                        board += `<span>${figure.symbol}</span>`;
                    }
                });

                board += '</td>';
            }
            board += '</tr>';
        }

        board += '</table>';
        document.body.insertAdjacentHTML('afterbegin', board);
        console.log(figures);
    },



};
