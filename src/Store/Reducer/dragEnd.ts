// import {WritableDraft} from "immer/dist/types/types-external";
// import { formulaForColumnOfFour,formulaForColumnOfThree,generateInvalidMoves } from "../../utils/formulas";
// import { isColumnOfFour, checkForRowOfFour,isColumnOfThree,checkForRowOfThree } from "../../utils/moveCheckLogic";
// import Board from "../../Components/Board";
// export const dragEndReducer = (
//     state:WritableDraft<{
//         board : string[],
//         boardSize:number,
//         squareBeingReplaced:Element | undefined;
//         squareBeingDragged: Element | undefined;
//     }>
// ) =>{
//     const newBoard= [...state.board];
//     let {boardSize, squareBeingDragged, squareBeingReplaced}=state;
//     const squareBeingDraggedId: number = parseInt(
//         squareBeingDragged?.getAttribute("candy-id") as string
//     )
//     const squareBeingReplacedId: number = parseInt(
//         squareBeingReplaced?.getAttribute("candy-id") as string
//     )

//     newBoard[squareBeingReplacedId] = squareBeingDragged?.getAttribute("src") as string;
//     newBoard[squareBeingDraggedId] = squareBeingReplaced?.getAttribute("src") as string;

// const validMoves:number[] = [
//     squareBeingDraggedId - 1,
//     squareBeingDraggedId - boardSize,
//     squareBeingDraggedId + 1,
//     squareBeingDraggedId + boardSize,
// ]

// const validMove:boolean = validMoves.includes(squareBeingReplacedId);

// const isAColumnOfFour : boolean | undefined = isColumnOfFour(
//     newBoard,
//     boardSize,
//     formulaForColumnOfFour(boardSize)
// );

// const isARowOfFour : boolean | undefined = checkForRowOfFour(
//     newBoard,
//     boardSize,
//     generateInvalidMoves(boardSize,true)
// )

// const isAColumnOfThree : boolean | undefined = isColumnOfThree(
//     newBoard,
//     boardSize,
//     formulaForColumnOfFour(boardSize)
// );

// const isARowOfThree : boolean | undefined = checkForRowOfThree(
//     newBoard,
//     boardSize,
//     generateInvalidMoves(boardSize,true)
// );

// if(squareBeingReplacedId && validMove && (isARowOfThree || isARowOfFour || isAColumnOfFour || isAColumnOfThree))
// {
//     squareBeingDragged = undefined;
//     squareBeingReplaced = undefined;
// }
// else{
//     newBoard[squareBeingReplacedId] = squareBeingReplaced?.getAttribute("src") as string;
//     newBoard[squareBeingDraggedId] = squareBeingDragged?.getAttribute("src") as string;
// }
// state.board = newBoard;
// }

import {
  formulaForColumnOfFour,
  formulaForColumnOfThree,
  formulaForMoveBelow,
  generateInvalidMoves,
} from "../../utils/formulas";
import {
  isColumnOfFour,
  checkForRowOfFour,
  isColumnOfThree,
  checkForRowOfThree,
} from "../../utils/moveCheckLogic";
import { WritableDraft } from "immer/dist/types/types-external";

export const dragEndReducer = (
  state: WritableDraft<{
    board: string[];
    boardSize: number;
    squareBeingReplaced: Element | undefined;
    squareBeingDragged: Element | undefined;
  }>
) => {
  const newBoard: string[] = [...state.board];
  let { boardSize, squareBeingDragged, squareBeingReplaced } = state;
  const squareBeingDraggedId: number = parseInt(
    squareBeingDragged?.getAttribute("candy-id") as string
  );
  const squareBeingReplacedId: number = parseInt(
    squareBeingReplaced?.getAttribute("candy-id") as string
  );
  newBoard[squareBeingDraggedId] = squareBeingReplaced?.getAttribute(
    "src"
  ) as string;
  newBoard[squareBeingReplacedId] = squareBeingDragged?.getAttribute(
    "src"
  ) as string;

  const validMoves: Number[] = [
    squareBeingDraggedId - 1,
    squareBeingDraggedId - boardSize,
    squareBeingDraggedId + 1,
    squareBeingDraggedId + boardSize,
  ];
  const validMove = validMoves.includes(squareBeingReplacedId);

  const isAColumnOfFour: boolean | undefined = isColumnOfFour(
    newBoard,
    boardSize,
    formulaForColumnOfFour(boardSize)
  );
  const isARowOfFour: boolean | undefined = checkForRowOfFour(
    newBoard,
    boardSize,
    generateInvalidMoves(boardSize, true)
  );
  const isAColumnOfThree: boolean | undefined = isColumnOfThree(
    newBoard,
    boardSize,
    formulaForColumnOfFour(boardSize)
  );
  const isARowOfThree: boolean | undefined = checkForRowOfThree(
    newBoard,
    boardSize,
    generateInvalidMoves(boardSize, true)
  );

  if (
    squareBeingReplacedId &&
    validMove &&
    (isAColumnOfFour || isAColumnOfThree || isARowOfFour || isARowOfThree)
  ) {
    squareBeingDragged = undefined;
    squareBeingReplaced = undefined;
  } else {
    newBoard[squareBeingDraggedId] = squareBeingDragged?.getAttribute(
      "src"
    ) as string;
    newBoard[squareBeingReplacedId] = squareBeingReplaced?.getAttribute(
      "src"
    ) as string;
  }
  state.board = newBoard;
};
