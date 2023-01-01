import { Client } from "@notionhq/client";

const { TOKEN, DATABASE_ID = "" } = process.env ?? {};

const notion = new Client({ auth: TOKEN });

export default async function send(req, res) {
  const raw = req.body;
  const { name, email, content } = JSON.parse(raw);

  const properties = {
    Name: {
      title: [
        {
          text: {
            content: name,
          },
        },
      ],
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
  };

  if (email) {
    properties.Email = {
      type: "email",
      email,
    };
  }

  const result = await notion.pages.create({
    parent: {
      database_id: DATABASE_ID,
    },
    properties,
  });

  res.json(result);
}
