import React from 'react';
import Twitter from '../assets/twitter-alt.svg';
import GitHub from '../assets/github-alt.svg';
import Facebook from '../assets/facebook-alt-24px-filled.svg';
import config from '../lib/config';

export function SocialList({}) {
  return (
    <div>
      <a
        title='Facebook'
        href={`https://facebook.com/TatTran22`}
        target='_blank'
        rel='noopener'
      >
        <Facebook width={24} height={24} fill={'#222'} />
      </a>
      <a
        title='Twitter'
        href={`https://twitter.com/${config.twitter_account}`}
        target='_blank'
        rel='noopener'
      >
        <Twitter width={24} height={24} fill={'#222'} />
      </a>
      <a
        title='GitHub'
        href={`https://github.com/${config.github_account}`}
        target='_blank'
        rel='noopener'
      >
        <GitHub width={24} height={24} fill={'#222'} />
      </a>
      <style jsx>{`
        a {
          display: inline-block;
        }
        a:not(:last-child) {
          margin-right: 2em;
        }
      `}</style>
    </div>
  );
}
