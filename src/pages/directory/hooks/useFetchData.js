import { useEffect, useState } from 'react';

const API_ODS_ENDPOINT = 'https://data.enseignementsup-recherche.gouv.fr/api/records/1.0/search';
// const API_ODS_ENDPOINT_V2 = 'https://data.enseignementsup-recherche.gouv.fr/api/v2/catalog/datasets';
const { REACT_APP_ODS_API_KEY } = process.env;
const ENDPOINT_V1 = `${API_ODS_ENDPOINT}/?apikey=${REACT_APP_ODS_API_KEY}`;

export default function useFetchData(isoCode) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const queries = [
      `${ENDPOINT_V1}&dataset=curiexplore-annuaire-ambassade&q=&rows=-1`,
      `${ENDPOINT_V1}&dataset=curiexplore-annuaire-campusfrance&q=&rows=-1`,
      `${ENDPOINT_V1}&dataset=curiexplore-annuaire-cci&q=&rows=-1`,
    ];

    const getData = async () => {
      try {
        setIsLoading(true);
        const queriesFetch = queries.map((query) => (fetch(query).then((response) => (response.json()))));
        const allData = await Promise.all(queriesFetch);
        const saveData = {};
        allData.forEach((dataset) => {
          saveData[dataset.parameters.dataset] = dataset.records;
        });
        setData(saveData);
        setIsLoading(false);
      } catch (err) {
        setError(err);
      }
    };
    getData();
  }, [isoCode]);

  return { data, isLoading, error };
}
