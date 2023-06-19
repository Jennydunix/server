import { Request, Response } from "express";
import shortUrl from "../models/shortUrl.model";
import analytics from "../models/analytics.model";

export async function createShortUrl(req: Request, res: Response) {
  // Get the destination from the request body

  const { destination } = req.body;

  const newUrl = await shortUrl.create({ destination });
  res.send(newUrl);

  // create a short url

  // return a short url
}

export async function handleRedirect(req:Request, res:Response) {
  const { shortId } = req.params

  const short = await shortUrl.findOne({shortId}).lean()

  if(!short){
    return res.sendStatus(404)
  }

  analytics.create({ shortUrl: short._id });

  return res.redirect(short.destination)
}

export async function getAnalytics(req: Request, res:Response) {
  const data = await analytics.find({}).lean();

  return res.send(data);
}