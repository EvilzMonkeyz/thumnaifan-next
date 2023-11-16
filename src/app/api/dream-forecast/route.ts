import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const input = decodeURI(searchParams.get("input") || "");
    const config = {
      headers: {
        Authorization: `Bearer ${process.env.WEB_AUTH_TOKEN}`,
      },
    };
    const rawResponse = await axios.post(
      "https://asia-southeast1-genai-project-400407.cloudfunctions.net/chat-api",
      {
        input,
      },
      config
    );
    const response = rawResponse.data;
    const body: BodyInit = JSON.stringify(response);
    return new Response(body, {
      status: 200,
    });
  } catch (error) {
    console.log({ error });
    return new Response(null, {
      status: 500,
    });
  }
}
