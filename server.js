const express = require('express');

const app = express();

app.get("/magic" , (req, respond) => {
  respond.send("<p>Place question in the url with spaces seperated by %20:</p>")
})

app.get("/magic/:question", (req, res)=>{
  const question = req.params.question
  const ballResponse = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
  const randomBallResponse = ballResponse[Math.floor(Math.random()*ballResponse.length)];

  console.log(question, randomBallResponse);

  res.send({message: `The answer to '${question}?' is: ${randomBallResponse}.`
  })
})



app.listen(3000)

