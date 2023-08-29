// pages/api/github-callback.js
import axios from 'axios';


export default async function handler(req, res) {
  const { code } = req.query;

  // Exchange the authorization code for an access token
  
  try {
    const response = await axios.post(
      'https://github.com/login/oauth/access_token',
      {},
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );

    const accessToken = response.data.access_token;

    // Store the access token securely on your server and then
    // redirect the user to a page in your app. in this case, the main dashboard
    res.redirect('/dashboard');    
  } catch(error) {
    console.error("error exchanging code for access token: ", error)
    res.status(500).send('Error exchanging code for access token');
  }

}
