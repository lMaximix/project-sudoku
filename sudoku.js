const { EOL } = require('os');
/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(puzzle) {
  const arr = puzzle.slice(0, 81).split('');
  console.log(arr);
  function spl(arr) {
    const res = [];
    for (let i = 0; i < arr.length; i += 9) {
      res.push(arr.slice(i, i + 9));
    }
    return res;
  }
  const allRaws = spl(arr);

  // function allRawsCompare(allRaws){
  //   for(let i=0;i<allRaws.length;i++){
  //     let raw=allRaws[i]
  //   }
  // }
  const firstRaw = allRaws[0];

  function compareRaw(firstRaw) {
    for (let i = 0; i < firstRaw.length; i++) {
      if (firstRaw[i] === '-') {
        for (let j = 1; j <= 9; j++) {
          if (!+firstRaw.includes(j + '')) {
            firstRaw[i] = j + '';
          }
        }
      }
    }
    return firstRaw;
  }

  // function compareRaw(firstRaw) {
  //   for (let i = 0; i < firstRaw.length; i++) {
  //     if (firstRaw[i] === '-') {
  //       for (let j = 1; j <= 9; j++) {
  //         if (!+firstRaw.includes(j + '')) {
  //           firstRaw[i] = j + '';
  //         }for(let c=0;c<9;c++){
  //           if(!+column.includes(j+''))
  //         }
  //       }
  //     }
  //   }
  //   return firstRaw;
  // }

  // function creatCol(allRaws) {
  //   let col = [];
  //   for (let i = 0; i < allRaws.length; i++) {
  //     col.push(allRaws[i][0]);
  //   }
  //   return col;
  // }

  // const column=creatCol(allRaws)
  // function compareCol(firstCol) {
  //   for (let i = 0; i < firstCol.length; i++) {
  //     if (firstCol[i] === '-') {
  //       for (let j = 0; j < firstCol.length; j++) {
  //         if (!+firstCol.includes(j + '')) {
  //           firstCol[i] = j + '';
  //         }
  //       }
  //     }
  //   }
  //   return firstCol;
  // }

  let result = allRaws.map((el) => compareRaw(el));

  console.log(result);
  console.log(compareRaw(firstRaw));

  console.table(allRaws);
  return allRaws;
}

// function compareRaw(firstRaw) {
//   for (let i = 0; i < firstRaw.length; i++) {
//     if (firstRaw[i] === '-') {
//       for (let j = 1; j <= 9; j++) {
//         if (!firstRaw.include(j)) {
//           firstRaw[i] = j;
//         }
//       }
//     }
//   }
//   return firstRaw;
// }
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
