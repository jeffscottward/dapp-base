// THIS IS A SAMPLE REST RESPONSE
// API's ONLY WORK WHEN SERVER IS HOSTED
// NOT A STATIC BUILD 
export default function handler(req, res) {
  res.status(200).json([
    {
      test: 678
    },
  ])
}
