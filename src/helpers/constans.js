export const options = {
    method: 'GET',
    url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
    params: {
      bl_lat: '34.047182',
      bl_lng: '24.992627',
      tr_lat: '42.705437',
      tr_lng: '44.549525',
      limit: '300'
    },
    headers: {
      'X-RapidAPI-Key': '8b2aa26b09mshfab78cfd706501fp1b1006jsn68da307dd59a',
      'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
    }
  };

  export const detailOptions = {
    headers: {
      'X-RapidAPI-Key':
        '75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247',
      'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com',
    },
  };