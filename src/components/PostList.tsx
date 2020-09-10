import React from 'react';
import { PostContent } from '../lib/posts';
import PostItem from './PostItem';
import TagLink from './TagLink';
import Pagination from './Pagination';
import { TagContent } from '../lib/tags';

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};
export default function PostList({ posts, tags, pagination }: Props) {
  return (
    <div className={'container'}>
      <div className={'posts'}>
        <ul className={'post-list'}>
          {posts.map((it, i) => (
            <li key={i}>
              <PostItem post={it} />
            </li>
          ))}
        </ul>
        <Pagination
          current={pagination.current}
          pages={pagination.pages}
          link={{
            href: (page) => (page === 1 ? '/posts' : '/posts/page/[page]'),
            as: (page) => (page === 1 ? null : '/posts/page/' + page),
          }}
        />
      </div>
      <ul className={'categories'}>
        {tags.map((it, i) => (
          <li key={i}>
            <TagLink tag={it} />
          </li>
        ))}
      </ul>
      <style jsx>{`
        .container {
          display: flex;
          margin: 0 auto;
          max-width: 1200px;
          width: 100%;
          padding: 0 1.5rem;
        }
        ul {
          margin: 0;
          padding: 0;
        }
        li {
          list-style: none;
          text-align: -webkit-match-parent;
          cursor: pointer;
        }
        .posts {
          display: flex;
          flex-direction: column;
          flex: 1 1 auto;
        }
        .posts li {
          margin-bottom: 1.5rem;
        }
        .post-list {
          flex: 1 0 auto;
        }
        .categories {
          display: none;
        }
        .categories li {
          padding: 10px 0px;
          display: flex;
          font-size: 14px;
          font-weight: 400;
          -webkit-box-align: center;
          align-items: center;
          color: var(--accents-5);
          transition: color 0.2s ease 0s;
          border-bottom: 1px solid var(--accents-2);
        }
        .categories li a {
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }
        @media (min-width: 769px) {
          .categories {
            display: block;
          }
        }
      `}</style>
    </div>
  );
}
