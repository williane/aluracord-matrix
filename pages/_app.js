function GlobalStyle() {
  return (
    <style global jsx>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
      }
      body {
        font-family: "Open Sans", sans-serif;
      }
      *::-webkit-scrollbar {
        width: 12px; /* width of the entire scrollbar */
      }

      *::-webkit-scrollbar-track {
        background: #29333d; /* color of the tracking area */
      }

      *::-webkit-scrollbar-thumb {
        background-color: #212931; /* color of the scroll thumb */
        border-radius: 20px; /* roundness of the scroll thumb */
        /*border: 3px solid orange;  creates padding around scroll thumb */
      }
      /* App fit Height */
      html,
      body,
      #__next {
        min-height: 100vh;
        display: flex;
        flex: 1;
      }
      #__next {
        flex: 1;
      }
      #__next > * {
        flex: 1;
      }
      /* ./App fit Height */
    `}</style>
  );
}

export default function CustomApp({ Component, pageProps }) {
  console.log("Roda em todas as páginas!");
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
