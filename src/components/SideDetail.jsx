import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { detailOptions } from '../helpers/constans';

const SideDetail = ({setShowDetail, detailId}) => {
    const [d, setDetail] = useState(null);


    useEffect(() => {
        // uçuş idsi her yenilendiğinde önceki verileri sil (yükleniyor kısmı)
        setDetail(null);
        axios.get(`https://fight-radar1.p.rapidapi.com/flights/detail?flight=${detailId}`, detailOptions)
        .then((res) => setDetail(res.data)) 
    }, [detailId]);

console.log(d);
  return (
    <div className='detail-outer'>
      <div className="detail-inner">
        <p className='close'>
            <span onClick={() => setShowDetail(false)}>X</span>
        </p>

        {!d ? (
            <p>Yükleniyor...</p>
        ) : (
            <>
            <h2>{d.aircraft.model?.text}</h2>
            <h2>{d.aircraft.model.code}</h2>
            <p>Kuyruk No: {d.aircraft.registration}</p>
            <img src={d.aircraft.images.large[0].src} />
            <p> Şirket: {d.airline.name}</p>
            <p>
              <span>Kalkış:</span>
              <a target="_blank" href={d.airport.origin?.website}>
                {d.airport.origin.name}
              </a>
            </p>
            <p>
              <span>Hedef:</span>
              <a
                target="_blank"
                href={d.airport.destination?.website}
              >
                {d.airport.destination.name}
              </a>
            </p>

            <p>
              <span>Durum</span>
              <span
                className="status"
                style={{ background: d.status.icon }}
              >
                {d.status?.text}
              </span>
            </p>

            </>
        )}

      </div>
    </div>
  );
};

export default SideDetail;
