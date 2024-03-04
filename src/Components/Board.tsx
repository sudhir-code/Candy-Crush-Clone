// import React from "react";
// import { useAppSelector } from "../Store/hooke";
// import Tiles from "./Tiles";

// function Board() {
//   const board = useAppSelector(({ candyCrush: { board } }) => board);
//   const boardSize = useAppSelector(
//     ({ candyCrush: { boardSize } }) => boardSize
//   );
//   return (
//     <div
//       className="flex flex-wrap rounded-lg"
//       style={{
//         width: `${6.25 * boardSize}rem`,
//       }}
//     >
//       {board.map((candy: string, index: number) => (
//         <Tiles candy={candy} key={index} candyId={index} />
//       ))}
//     </div>
//   );
// }

// export default Board;
import React from 'react'
import { useAppSelector } from '../Store/hooke';
import Tiles from './Tiles';
function Board() {
  const board = useAppSelector(({candyCrushe:{board}})=>board);
const boardSize = useAppSelector(({candyCrushe:{boardSize}})=>boardSize);
  return (
    <div className='flex flex-wrap rounded-lg'
    style={{width:`${6.25 * boardSize}rem`}}
    >{
      board.map((candy:string,index:number)=>(
        <Tiles candy={candy} key={index} candyId={index} />
      ))
      }</div>
  )
}

export default Board