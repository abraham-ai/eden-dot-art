import { stringify } from 'querystring';
import axios from 'axios';
import { withSession } from '@/util/withSession';
import { encrypt } from '@/util/crypt';

const OAuthScope = ['identify'].join(' ');

const handler = async (req, res) => {
  if (!req.query.code) {
    res.status(404).redirect('/404');
    return;
  }

  try {
    console.log('here');
    const { data } = await axios.post(
      'https://discordapp.com/api/v9/oauth2/token',
      stringify({
        client_id: process.env.DISCORD_CLIENT_ID,
        client_secret: process.env.DISCORD_CLIENT_SECRET,
        grant_type: 'authorization_code',
        code: req.query.code,
        redirect_uri: `${process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URI}/api/discord/callback`
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    console.log(data);

    if (data.scope !== OAuthScope) {
      return res
        .status(403)
        .send(
          `Expected scope "${OAuthScope}" but received scope "${data.scope}"`
        );
    }

    const { data: user } = await axios.get(
      'https://discordapp.com/api/v9/users/@me',
      {
        headers: {
          Authorization: `Bearer ${data.access_token}`
        }
      }
    );

    console.log(user);

    if (user.email === null) {
      return res
        .status(400)
        .send("Please verify your Discord's account E-mail before logging in.");
    }

    await req.session.set('user', {
      ...user,
      token: encrypt(user.id),
      avatar: `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`
    });
  } catch (e) {
    res.redirect('/r?true');
    return;
  }

  await req.session.save();
  res.redirect('/?r=true');
};

export default withSession(handler);
