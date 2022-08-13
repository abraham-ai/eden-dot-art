import { withSession } from '@/util/withSession';

const OAuthScope = ['identify'].join(' ');
const OAuthData = new URLSearchParams({
  client_id: process.env.DISCORD_CLIENT_ID as string,
  redirect_uri: `${process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URI}/api/discord/callback`,
  response_type: 'code',
  scope: OAuthScope
});

const handler = async (req, res) => {
  res.redirect(`https://discordapp.com/oauth2/authorize?${OAuthData}`);
};

export default withSession(handler);
