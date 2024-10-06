import axios from "axios";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {

    const {action, GB} = await req.json();

    console.log(action, GB)

     const planId = '6701ad75555cd2019306c5f3'
    const apiKey = '65ytl2m8te5r82y2a6u866x85del551p'
    const url = `https://resell.lightningproxies.net/api/${action}/${planId}/${GB}`

    console.log()

    try {
        const {data} = await axios.post(url, null,
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'x-api-key': apiKey,
            },
          }
        );


        return Response.json(data)

      } catch (error) {
        console.error(error); 
        return Response.json('Error')
      }
    

}