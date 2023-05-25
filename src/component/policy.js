import Content from '../component/content_policy/content'
import { useState, useEffect } from "react";
import PageLoader from '../component/pageLoader/pageLoader'

const Policy = () => {
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
       <Content/>
       )
    }
        </>
    );
};

export default Policy;
