import "./app.css";
function MyApp({ Component, pageProps, allcategories }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
