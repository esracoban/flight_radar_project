import React from 'react'
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';

const ListView = ({openModal}) => {
  const store = useSelector((store) => store);
  const [itemOffset, setItemOffset] = useState(10);

  // sayfa başına kaç eleman olcak
  const itemsPerPage = 10;

  // gösterilecek sonuncu eleman sayısı
  const endOffset = itemOffset + itemsPerPage;

  // gösterilecek aralıktaki elemanlar
  const currentItems = store?.flights.slice(itemOffset,endOffset);

  // toplam kaç sayfa olacağını hesaplama
  const pageCount = Math.ceil(store?.flights.length / itemsPerPage);
  
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % store?.flights.length;

    // state'i günceller
    setItemOffset(newOffset);
  }

  return (
    <div className='list-page'>
      <table className='table table-dark table-striped table-hover'>
        <thead>
          <tr>
            <th>İD</th>
            <th>Kuyruk Kodu</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th></th>
          </tr>
        </thead>


        <tbody>
          {currentItems.map((flight) =>(
            <tr>
              <td>{flight.id}</td>
              <td>{flight.code}</td>
              <td>{flight.lat}</td>
              <td>{flight.lng}</td>
              <td><button onClick={() =>openModal(flight.id) }>Detay</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate pageCount={pageCount} 
      nextLabel="İleri >"
      previousLabel="< Geri" 
      className='pagination' 
      pageRangeDisplayed={2}
      activeClassName='active'
      onPageChange={handlePageClick}/>
    </div>
  )
}

export default ListView;
