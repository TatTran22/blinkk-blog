import React, { useState, useEffect } from 'react';
import Anime from 'react-anime';
import anime from 'animejs';

import Layout from '../components/Layout';
import BasicMeta from '../components/meta/BasicMeta';
import OpenGraphMeta from '../components/meta/OpenGraphMeta';
import TwitterCardMeta from '../components/meta/TwitterCardMeta';
import { SocialList } from '../components/SocialList';

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={'/'} />
      <OpenGraphMeta url={'/'} />
      <TwitterCardMeta url={'/'} />
      <div className='container'>
        <div>
          <h1 className='m16'>
            <span className='text-wrapper'>
              <span className='letters'>
                <Anime
                  translateY={['-100vh', 0]}
                  easing='easeOutSine'
                  duration={2000}
                  direction='normal'
                  // loop: true,
                  delay={anime.stagger(100, { start: 500 })}
                >
                  <span className='bio'>H</span>
                  <span className='bio'>i</span>
                  <span className='bio'>,</span>
                  <span className='bio'>&nbsp;</span>
                  <span className='bio'>I</span>
                  <span className='bio'>'</span>
                  <span className='bio'>m</span>
                  <span className='bio'>&nbsp;</span>
                  <span className='bio g-blue'>T</span>
                  <span className='bio g-red'>a</span>
                  <span className='bio g-yellow'>t</span>
                  <span className='bio g-green'>.</span>
                </Anime>
              </span>
            </span>
          </h1>

          <Anime
            easing='easeInExpo'
            duration={3000}
            direction='reverse'
            // loop={true}
            delay={100}
            translateY='100em'
            scale={[1, 0.1]}
            // rotate='1080'
          >
            <span className='handle'>@TatTran22</span>
            <h2>Welcome to my blog! ✌</h2>
            <SocialList />
          </Anime>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
          overflow: hidden;
        }
        h1 {
          position: relative;
          width: 100%;
          letter-spacing: 0.2rem;
        }

        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }

        .letters {
          display: flex;
        }

        .g-blue {
          color: #4285f4;
        }
        .g-red {
          color: #db4437;
        }
        .g-yellow {
          color: #f4b400;
        }
        .g-green {
          color: #0f9d58;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}
