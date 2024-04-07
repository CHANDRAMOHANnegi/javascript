// pages/api/data.js

const generateDummyData = (count) => {
  const dummyData = [];
  for (let i = 0; i < count; i++) {
    dummyData.push({
      id: i + 1,
      name: `Passenger ${i + 1}`,
      trips: Math.floor(Math.random() * 10) + 1, // Random number of trips (1 to 10)
      flightName: `Flight ${Math.floor(Math.random() * 1000)}`, // Random flight name
    });
  }
  return dummyData;
};

const dummyData = generateDummyData(100);
// page=${pageNo}&size=15

export async function GET(request, response) {
  const searchParams = request.nextUrl.searchParams;
  const pageNumber = parseInt(searchParams.get("page"));
  const pageSize = parseInt(searchParams.get("size"));

  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const data = dummyData.slice(startIndex, endIndex);

  return new Response(
    JSON.stringify({
      totalPages: 10,
      totalPassengers: 100,
      data,
    }),
    {
      status: 200,
    }
  );
}
