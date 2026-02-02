import type { Context } from "hono";
import { css, Style } from "hono/css";

export const HMainContainer = (c: Context) => {
  const bigLetter = css`
    font-size: 40pt;
    font-weight: 100;
  `;

  return c.html(
    <>
      <Style></Style>
      <link rel="stylesheet" href="/styles.css" />
      <div>
        <h1>
          <span class={bigLetter}>E</span>nterprise{" "}
          <span class={bigLetter}>A</span>dmin <span class={bigLetter}>T</span>
          ools
        </h1>
      </div>
    </>,
  );
};
