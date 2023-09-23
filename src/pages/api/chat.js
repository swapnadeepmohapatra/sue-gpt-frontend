// import { NextRequest, NextResponse } from "next/server";
// import connectDB from "../../../middleware/database";
// import Images from "../../../models/images";

// const configuration = new Configuration({
//   // apiKey: process.env.OPENAI_API_KEY,
// });

// async function handler(req, res) {
//   // const rec = await Images.find({}).sort([["_id", "asc"]]);

//   //   const configuration = new Configuration({
//   //     // apiKey: process.env.OPENAI_API_KEY,
//   //   });

//   //   const openai = new OpenAIApi(configuration);

//   //   const response = await openai.createImage({
//   //     prompt: imagePromptText.promptText,
//   //     n: 3,
//   //     size: "256x256",
//   //   });

//   //   const completion = await openai.ChatCompletion.create(
//   //     (model = "ft:gpt-3.5-turbo-0613:personal::81KaM2y5"),
//   //     (messages = [
//   //       { role: "system", content: "You are a SueGPT a legal assistant." },
//   //       { role: "user", content: "How do I file a termination clause?" },
//   //     ])
//   //   );

//   res.status(200).json({ message: "Hello" });
//   // res.status(200).json({
//   //   image_url: [rec[id].image1, rec[id].image2, rec[id].image3],
//   //   prompt_text: rec[id].promptText,
//   // });
//   //   res.status(200).json({
//   //     prompt_text: imagePromptText.promptText,
//   //     image_url: [
//   //       response.data.data[0].url,
//   //       response.data.data[1].url,
//   //       response.data.data[2].url,
//   //     ],
//   //   });
// }

// export default handler;

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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", // defaults to process.env["OPENAI_API_KEY"]
});

export default async function handler(req, res) {
  // const completion = await openai.chat.completions.create({
  //   messages: [
  //     { role: "system", content: "You are a SueGPT a legal assistant." },
  // // { role: "user", content: "How do I file a termination clause?" },
  // { role: "user", content: req.query.prompt || "" },
  //   ],
  //   model: "ft:gpt-3.5-turbo-0613:personal::81KaM2y5",
  // });

  const completion = {
    completion: {
      id: "chatcmpl-820Cn6LSAqIIhLs5nhxkdARCcknMx",
      object: "chat.completion",
      created: 1695488137,
      model: "ft:gpt-3.5-turbo-0613:personal::81KaM2y5",
      choices: [
        {
          index: 0,
          message: {
            role: "assistant",
            content:
              "In a legal document, the termination clause specifies the various conditions under which a contract can be terminated. It can cover reasons such as breach of contract, insolvency, or mutual agreement. It is essential to ensure that the language used is clear and unambiguous, as it may impact the rights and obligations of the parties involved.",
          },
          finish_reason: "stop",
        },
      ],
      usage: { prompt_tokens: 29, completion_tokens: 65, total_tokens: 94 },
    },
  };

  res.status(200).json({
    completion: completion.completion.choices[0].message.content,
    params: req.query.prompt,
  });
}
