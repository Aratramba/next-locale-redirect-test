export async function getStaticProps() {
  return {
    notFound: true,
  }
}

const PageToExport = (props) => {
  return <div>empty page</div>;
};

export default PageToExport;
