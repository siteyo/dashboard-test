import React, { useState, useEffect } from 'react';

const Detail = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await fetch(
      'http://geoapi.heartrails.com/api/json?method=getPrefectures',
    );
    const responseJson = await response.json();
    setData(responseJson.response.prefecture);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Detail</h2>
      {data}
    </div>
  );
};

export default Detail;
