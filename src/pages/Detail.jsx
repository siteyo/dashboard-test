import React from 'react';
import useApi from '../hooks/use-api';

const Detail = () => {
  const [data, isLoading] = useApi(
    'http://geoapi.heartrails.com/api/json?method=getPrefectures',
  );
  let loading;

  if (isLoading) {
    loading = <h3>Loading</h3>;
  } else {
    loading = <p>{data}</p>;
  }

  return (
    <div>
      <h2>Detail</h2>
      {loading}
    </div>
  );
};

export default Detail;
