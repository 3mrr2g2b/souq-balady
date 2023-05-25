import React, { useState, useEffect } from 'react';
import PageLoader from "../pageLoader/pageLoader";
import TodoList from '../todo_list/todoList'; // Assuming you have a PageLoader component

const Store = ({post}) => {
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
        <TodoList/>
        </>
      )}
    </>
  );
}

export default Store;
