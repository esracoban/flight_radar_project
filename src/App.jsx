import { useState } from "react";
import Header from "./components/Header";
import MapView from "./pages/MapView";
import ListView from "./pages/ListView";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getFlights } from "./redux/actions/flightActions";
import SideDetail from "./components/SideDetail";

function App() {
  const [showMapView, setShowView] = useState(true);
  const [showDetail, setShowDetail] = useState(false);
  const [detailId, setDetailId] = useState();

  const dispatch = useDispatch();
  
  useEffect(() => {dispatch(getFlights());
},
[]);


const openModal = (id) => {
  // detayı gösterilecek uçağı state'e aktarma
  setDetailId(id);
  // modalı açar
  setShowDetail(true);
};


  return (
    <>
    <Header/>

    <div className="view-buttons">
    <button className={showMapView ? 'active' : ''} onClick={() => setShowView(true)}>Harita Görünümü</button>
    <button className={!showMapView ? 'active' : ''} onClick={() => setShowView(false)}>Liste Görünümü</button>
    </div>

    {showMapView ? <MapView openModal={openModal}/> 
    : 
    <ListView openModal={openModal}/>}

    {showDetail && <SideDetail detailId={detailId} setShowDetail={setShowDetail}/>}
    </>
  )
}

export default App;
