// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  if(req.method === 'POST') {
    const { name } = req.body;
    
    res.status(200).json({
      message: "It worked!",
      name
    })
  }
}
