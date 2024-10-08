import axios from "axios";


export const dynamic = 'force-dynamic'

export async function GET() {

    const apiKey = '65ytl2m8te5r82y2a6u866x85del551p'
    const planId = '6701ad75555cd2019306c5f3'
    const url = `https://resell.lightningproxies.net/api/info/${planId}`


    try {
        const {data} = await axios.get(url,
          {
            headers: {
              'x-api-key': apiKey,
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
        );

        return Response.json(data)

      } catch (error) {
        console.error(error); 
        return Response.json('Error')
      }
    

}