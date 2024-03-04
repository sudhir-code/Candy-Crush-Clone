// import { useEffect } from "react";
// import { useAppDispatch, useAppSelector } from "./Store/hooke";
// import { moveBelow, updateBoard } from "./Store/Index";
// import { createBoard } from "./utils/CreateBoard";
// import Board from "./Components/Board";
// import { checkForRowOfFour, checkForRowOfThree, isColumnOfFour, isColumnOfThree } from "./utils/moveCheckLogic";
// import { formulaForColumnOfFour, formulaForColumnOfThree, generateInvalidMoves } from "./utils/formulas";
// import { TIMEOUT } from "dns";
// function App() {
// //   const dispatch = useAppDispatch();
// //   const board = useAppSelector(({ candyCrush: { board } }) => board);
// //   const boardSize = useAppSelector(
// //     ({ candyCrush: { boardSize } }) => boardSize
// //   );

// //   useEffect(() => {
// //     dispatch(updateBoard(createBoard(boardSize)));
// //     // dispatch(updateBoard(boardSize))
// //   }, [boardSize, dispatch]);

// // useEffect(()=>{
// //   const timeout =  setTimeout(() => {
// //     const newBoard = [...board];
// //     isColumnOfFour(newBoard, boardSize,formulaForColumnOfFour(boardSize))

// //     checkForRowOfFour(newBoard, boardSize, generateInvalidMoves(boardSize,true))

// //     isColumnOfThree(newBoard, boardSize,formulaForColumnOfThree(boardSize))

// //     checkForRowOfThree(newBoard, boardSize, generateInvalidMoves(boardSize,true))
    
// //     dispatch(updateBoard(newBoard))
// //     dispatch(moveBelow())
// //   }, 150);
// //   return () => clearInterval(timeout)
// // },[board, boardSize, dispatch])

// //   return (
// //     <div className="flex items-center justify-center h-screen">
// //       <Board />
// //     </div>
// //   );
// }

// export default App;

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./Store/hooke";
import { moveBelow, updateBoard } from "./Store/Index";
import { createBoard } from "./utils/CreateBoard";
import Board from "./Components/Board";
import { checkForRowOfFour, checkForRowOfThree, isColumnOfFour, isColumnOfThree } from "./utils/moveCheckLogic";
import { formulaForColumnOfFour, formulaForColumnOfThree, generateInvalidMoves } from "./utils/formulas";

const App = () => {
const dispatch = useAppDispatch();
const board = useAppSelector(({candyCrushe:{board}})=>board);
const boardSize = useAppSelector(({candyCrushe:{boardSize}})=>boardSize);

useEffect(()=>{
  dispatch(updateBoard(createBoard(boardSize)));
  
},[boardSize, dispatch])
useEffect(()=>{
  const timeout = setTimeout(()=>{
    const newBoard = [...board];
 isColumnOfFour(newBoard, boardSize,formulaForColumnOfFour(boardSize))
 checkForRowOfFour(newBoard, boardSize, generateInvalidMoves(boardSize,true))
 isColumnOfThree(newBoard,boardSize,formulaForColumnOfThree(boardSize))
 checkForRowOfThree(newBoard, boardSize, generateInvalidMoves(boardSize,true))
  dispatch(updateBoard(newBoard))
  dispatch(moveBelow())
  },150)
  return()=>clearInterval(timeout)
},[board,boardSize,dispatch])

return(
  <div className="flex items-center justify-center h-screen">
    <Board />
  </div>
)

}
export default App;