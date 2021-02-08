export async function getStaticProps({ locale }) {

  if (locale === "nl") {
    return {
      notFound: true,
    }
  }

  return { props: {} };
}

const PageToExport = (props) => {
  return <div>empty page</div>;
};

export default PageToExport;
