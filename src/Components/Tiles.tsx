// import React from "react";
// import { dragDrop, dragStart,dragEnd } from "../Store/Index";
// import { useAppDispatch } from "../Store/hooke";
// function Tiles({ candy, candyId }: { candy: string, candyId: number }) {
//   const dispatch = useAppDispatch();
//   return (
//     <div
//       className="h-24 w-24 flex justify-center items-center m-0.5 rounded-lg select - none"
//       style={{
//         boxShadow: "inset 5px 5px 15px #062525, inset -5px -5px 15px #aaaab7bb",
//       }}
//     >
//       {candy && (
//         <img src={candy}
//          alt="candy"
//           className="h-20 w-20"
//           candy-id={candyId}

//         draggable={true}
//         onDragStart={(e) => dispatch(dragStart(e.target))}
//         onDragOver={(e) => e.preventDefault()}
//         onDragEnter={(e) => e.preventDefault()}
//         onDragLeave={(e) => e.preventDefault()}
//         onDrop={(e) => dispatch(dragDrop(e.target))}
//         onDragEnd={() => dispatch(dragEnd())}

//         />
//       )}
//     </div>
//   );
// }

// export default Tiles;

import React from "react";
import { useAppDispatch } from "../Store/hooke";
import { dragStart, dragDrop, dragEnd } from "../Store/Index";

function Tiles({ candy, candyId }: { candy: string; candyId: number }) {
  const dispatch = useAppDispatch();
  return (
    <div
      className="h-24 w-24 flex justify-center items-center m-0.5 rounded-lg select - none"
      style={{
        boxShadow: "inset 5px 5px 15px #062525, inset -5px -5px 15px #aaaab7bb",
      }}
    >
      {candy && (
        <img
          src={candy}
          alt="candy"
          className="h-20 w-20"
          candy-id={candyId}
          draggable={true}
          onDragStart={(e) => dispatch(dragStart(e.target))}
          onDragOver={(e) => e.preventDefault()}
          onDragEnter={(e) => e.preventDefault()}
          onDragLeave={(e) => e.preventDefault()}
          onDrop={(e) => dispatch(dragDrop(e.target))}
          onDragEnd={(e) => dispatch(dragEnd())}
        />
      )}
    </div>
  );
}

export default Tiles;
