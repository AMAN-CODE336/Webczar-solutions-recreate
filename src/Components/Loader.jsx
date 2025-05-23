// components/Loader.jsx
import { RotatingLines } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <RotatingLines
        strokeColor="blue"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
}
