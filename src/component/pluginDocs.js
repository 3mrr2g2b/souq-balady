import Slider from '../component/slider';
import Badget from '../component/badget/badget';
import { useState, useEffect } from "react";
import PageLoader from '../component/pageLoader/pageLoader'; // Assuming you have a PageLoader component

const PluginDocs = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        <PageLoader />
      ) : (
        <>
          <ul>
            <lo>
              <h1></h1>
            </lo>
          </ul>

          <Slider />

          <h2>Badget</h2>
          <Badget />
          <Badget />
          <Badget />
        </>
      )}
    </>
  );
};

export default PluginDocs;
