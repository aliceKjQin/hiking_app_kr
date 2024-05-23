import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
};

// It takes the loading state as a prop
const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color="#50C878"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};

export default Spinner;
