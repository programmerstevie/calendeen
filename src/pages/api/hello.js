// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongo from "@/libs/mongoose";

export default async function handler(req, res) {
  await connectMongo();

  res.status(200).json({ name: "John Doe" });
}
