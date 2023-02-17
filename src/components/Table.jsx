import Table from "react-bootstrap/Table";
import React from "react";

export default function List({ list, removeMovieListProp, editMovieListProp }) {
  // const renderedList = list.map((item) => (

  // <Movie
  // ))
  return (

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Pelicula</th>
          <th>Año</th>
          <th>Tiempo</th>
          <th>Lenguaje</th>
          <th>Fecha</th>
          <th>País</th>
          <th>Género</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td colSpan={2}></td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  );
}


//     <div class="Container">
//     <Table class="table table-responsive">
//       <thead> 
//         <tr> 
//           <th>Titulo 1</th> 
//           <th>Titulo 2</th>
//           <th>Titulo 3</th>
//           <th>Titulo 4</th>
//           <th>Titulo 5</th>                    
//         </tr> 
//       </thead>
//       <tbody>
//         <tr> 
//           <td>Elemento 1,1</td>
//           <td>Elemento 1,2</td> 
//           <td>Elemento 1,3</td> 
//           <td>Elemento 1,4</td> 
//           <td>Elemento 1,5</td>                     
//         </tr>
//         <tr> 
//           <td>Elemento 2,1</td>
//           <td>Elemento 2,2</td> 
//           <td>Elemento 2,3</td> 
//           <td>Elemento 2,4</td> 
//           <td>Elemento 2,5</td>                     
//         </tr>
//         <tr> 
//           <td>Elemento 3,1</td>
//           <td>Elemento 3,2</td> 
//           <td>Elemento 3,3</td> 
//           <td>Elemento 3,4</td>           
//           <td>Elemento 3,5</td>           
//         </tr>
//       </tbody>
//     </Table>
//   </div> 
    // <Table striped bordered hover>
    //   <thead>
    //       <th>Película</th>
    //   </thead>
    //   <thead>
    //     <th>Año</th>
    //   </thead>
    //   <thead>
    //     <th>Tiempo</th>
    //   </thead>
    //   <thead>
    //     <th>Lenguaje</th>
    //   </thead>
    //   <thead>
    //     <th>Fecha</th>
    //   </thead>
    //   <thead>
    //     <th>País</th>
    //   </thead>
    //   <thead>
    //     <th>Género</th>
    //   </thead>

    //   <tbody>
    //     <thead>
    //       <td>sdfghj</td>
    //       <td>gbnh</td>
    //       <td>gnhmj</td>
    //     </thead>
    //     <tr>
    //       <td></td>
    //       <td></td>
    //       <td></td>
    //     </tr>
    //     <tr>
    //       <td colSpan={2}>Larry the Bird</td>
    //       <td>@twitter</td>
    //     </tr>
    //   </tbody>
    // </Table>
//   );
// }
