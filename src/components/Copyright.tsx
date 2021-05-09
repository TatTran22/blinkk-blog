import Fire from '../assets/fire-alt.svg';
import Code from '../assets/source_code-alt.svg';
import Love from '../assets/love-alt.svg';
export default function Copyright() {
  return (
    <>
      <p>
        <span>
          <Code width='16px' height='16px' />
          &nbsp;with&nbsp;
          <Love width='16px' height='16px' />
          &nbsp;and&nbsp;
          <Fire width='16px' height='16px' />
          &nbsp;by Tat Tran
        </span>
      </p>
      <style jsx>
        {`
          p {
            font-size: 0.75rem;
            text-align: center;
            background: transparent;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            cursor: default;
          }
        `}
      </style>
    </>
  );
}
