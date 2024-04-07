import mockSearchAPI from "./utils";

export async function GET(request, response) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  const result = await mockSearchAPI(query);

  return new Response(JSON.stringify(result), {
    status: 200,
  });
}
