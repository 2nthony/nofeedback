import { Client } from "@notionhq/client";

type FeedbackFormModel = {
  name: string;
  email?: string;
  content: string;
};

const notion = new Client({
  auth: import.meta.env.VITE_TOKEN,
});

export function submitFeedback(formValue: FeedbackFormModel) {
  return notion.pages.create({
    parent: {
      database_id: import.meta.env.VITE_DATABASE_ID,
    },
    properties: {
      Name: {
        title: [
          {
            text: {
              content: formValue.name,
            },
          },
        ],
      },
      Email: {
        type: "email",
        email: formValue.email,
      },
      Content: {
        type: "rich_text",
        rich_text: [
          {
            text: {
              content: formValue.content,
            },
          },
        ],
      },
    },
  });
}
