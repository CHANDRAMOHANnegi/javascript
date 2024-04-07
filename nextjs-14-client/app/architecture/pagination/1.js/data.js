export const columns = [
  {
    Header: "Passenger name",
    accessor: "name",
  },
  {
    Header: "Total trips",
    accessor: "trips",
  },
  {
    Header: "Current flight",
    accessor: "flightName",
  },
];

export const formatRowData = (rawData) =>
  rawData.map((info) => ({
    name: info.name,
    trips: info.trips,
    flightName: info.airline?.name,
  }));
// https://jsonplaceholder.typicode.com/photos?_start=5&_limit=5

const base_url = "http://localhost:3000/api";
export const getData = async (pageNo = 1, size = 10) => {
  const response = await fetch(`${base_url}?page=${pageNo}&size=10`);
  return await response.json();
};

export const getDataFromSearch = async (query) => {
  if (!query) return [];
  const pageNo = Math.floor(Math.random() * 10 + 1);
  // const response = await fetch(
  //   `https://<API_THAT_SUPPORTS_QUERY>?airline=${query}`
  // );
  // return await response.json();
  const response = await fetch(`${base_url}?page=${pageNo}&size=10`);
  return await response.json();
};
