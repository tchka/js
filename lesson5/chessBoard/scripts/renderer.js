
let renderer = {

//Отобюражает доску
    renderBoard() {
        let result = this.generateBoard();

    },

    generateBoard() {
        let board = '';
        let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        board += '<table>';
        board += '<tr><td></td>';
        for (let col = 0; col < config.colsCount; col++) {
            board += `<td>${letters[col]}</td>`;
        }
        board += '</tr>';

        for (let row = 0; row < config.rowsCount; row++) {
            board += `<tr><td>${row + 1}</td>`;
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
