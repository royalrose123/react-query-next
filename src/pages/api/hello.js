// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'

import Cors from 'cors'

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

async function hello(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors)

  return axios({
    method: 'get',
    url: 'http://inter-apitw.tutorabc.com/tmdapi/api/facebook/PagePostList?pageId=700562923358366&type=1',
    headers: {
      Token: '3c937d33e3c814fbc8cd35dc5fa87388d2e93b15',
      StaffSn: 87353,
      'Content-Type': 'application/json; charset=utf-8',
    },
  })
    .then(function (response) {
      return response
    })
    .then((result) => {
      return res.status(200).json(result.data)
    })
    .catch((error) => console.log(`99999`, error))
}

export default hello
