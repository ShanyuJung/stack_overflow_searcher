import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

interface Props {
  styles: JSX.Element;
}

function MyDocument(props: Props) {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Noto+Sans+TC:wght@300;400;500&family=Ubuntu:wght@700&display=swap"
          rel="stylesheet"
        />
        {props.styles}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

async function getInitialProps(ctx: DocumentContext) {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    };
  } finally {
    sheet.seal();
  }
}

MyDocument.getInitialProps = getInitialProps;

export default MyDocument;
