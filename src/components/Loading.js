import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Rings } from "react-loader-spinner";

const Loading = () => {
  return (
    <>
      <Rings
        type="Rings"
        color="white"
        arialLabel="loading-indicator"
        height={45}
        width={45}
      />
    </>
  );
};
export default Loading;
