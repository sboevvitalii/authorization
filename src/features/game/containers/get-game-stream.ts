import { clear } from "console";
import { NextRequest } from "next/server";

export function getGameStream(req: NextRequest) {
  const responseStream = new TransformStream();
  const writer = responseStream.writable.getWriter();
  const encoder = new TextEncoder();

  let counter = 0;

  const interval = setInterval(() => {
    writer.write(encoder.encode(`${counter++}`));
  });

  req.signal.addEventListener("abort", () => {
    clearInterval(interval);
  });

  return new Response(responseStream.readable, {
    headers: {
      "Content-Type": "text/event-stream",
      Connection: "keep-alive",
      "Cache-Control": "no-cache, no-transform",
    },
  });
}
