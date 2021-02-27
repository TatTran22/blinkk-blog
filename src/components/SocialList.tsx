import React from 'react';
import Twitter from '../assets/twitter-alt.svg';
import GitHub from '../assets/github-alt.svg';
import Telegram from '../assets/telegram_app.svg';
import Facebook from '../assets/facebook-alt-24px-filled.svg';
import config from '../lib/config';

// import Anime, { anime } from 'react-anime';

export function SocialList({}) {
  return (
    <div className='social-list'>
      <a
        title='Facebook'
        href={`https://facebook.com/${config.facebook_account}`}
        target='_blank'
        rel='noopener'
        className='icon'
      >
        <Facebook width={24} height={24} fill={'#222'} />
      </a>

      <a
        title='Telegram'
        href={`https://t.me/${config.telegram_account}`}
        target='_blank'
        rel='noopener'
        className="icon"
      >
        <Telegram width={24} height={24} fill={'#222'} />
      </a>
      <a
        title='GitHub'
        href={`https://github.com/${config.github_account}`}
        target='_blank'
        rel='noopener'
        className='icon'
      >
        <GitHub width={24} height={24} fill={'#222'} />
      </a>
      <style jsx>{`
        .social-list {
          width: 100%;
        }

        .icon {
          overflow: hidden;
          transition-duration: 0.3s;
          transition-property: transform;
        }
        .icon:hover {
          transform: scale(1.2);
          -webkit-transform: scale(1.2);
        }
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
