// import Anime from 'react-anime';
// import anime from 'animejs';

import Layout from '../components/Layout';
import BasicMeta from '../components/meta/BasicMeta';
import OpenGraphMeta from '../components/meta/OpenGraphMeta';
import TwitterCardMeta from '../components/meta/TwitterCardMeta';
import { SocialList } from '../components/SocialList';

export default function Index() {
  function myAnimate() {}
  return (
    <Layout>
      <BasicMeta url={'/'} />
      <OpenGraphMeta url={'/'} />
      <TwitterCardMeta url={'/'} />
      <div className='container'>
        <div>
          <div className='greeting'>Hi, my name is</div>
          <div className='text-wrapper'>
            <div className='letters big-heading'>
              <span className='bio'>T</span>
              <span className='bio'>a</span>
              <span className='bio'>t</span>
              <span className='bio'>&nbsp;</span>
              <span className='bio'>T</span>
              <span className='bio'>r</span>
              <span className='bio'>a</span>
              <span className='bio'>n</span>
              <span className='bio'>.</span>
            </div>
            <span className='handle'>@TatTran22</span>
          </div>
          <h2>Welcome to my blog! ✌</h2>
          <SocialList />
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
        .greeting {
          font-size: clamp(15px, 3vw, 30px);
          font-weight: 500;
          line-height: 1.1;
        }
        .big-heading {
          font-size: clamp(40px, 8vw, 80px);
          font-weight: 700;
          margin: 0px;
          position: relative;
          width: 100%;
          letter-spacing: 0.2rem;
        }

        h1,
        h2 {
          font-size: 1.75rem;
          font-weight: 500;
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
      `}</style>
    </Layout>
  );
}
