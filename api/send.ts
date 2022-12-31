import { VercelRequest, VercelResponse } from "@vercel/node";
import { Client } from "@notionhq/client";

type FeedbackFormModel = {
  name: string;
  email?: string;
  content: string;
};

const { TOKEN, DATABASE_ID = "" } = process.env ?? {};

const notion = new Client({ auth: TOKEN });

export default async function send(req: VercelRequest, res: VercelResponse) {
  const { name, email = "", content } = req.body as FeedbackFormModel;

  const result = await notion.pages.create({
    parent: {
      database_id: DATABASE_ID,
    },
    properties: {
      Name: {
        title: [
          {
            text: {
              content: name,
            },
          },
        ],
      },
      Email: {
        type: "email",
        email,
      },
      Content: {
        type: "rich_text",
        rich_text: [
          {
            text: {
              content,
            },
          },
        ],
      },
    },
  });

  res.json(result);
}
