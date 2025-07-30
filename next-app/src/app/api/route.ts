export const runtime = 'edge'

export async function GET(request: Request) {
  console.log(request)

  return new Response('Hello, API Route!', {
    headers: { 'Content-Type': 'text/plain' },
  })
}
