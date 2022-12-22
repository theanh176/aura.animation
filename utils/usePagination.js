import React, { useEffect, useState } from "react";

export function useNavigation(datas, itemsPerPage) {
  const perItem = itemsPerPage;
  const perData = datas;
  const [currentPage, setCurrentPage] = useState(1);
  const [firstPage, setFirstPage] = useState(0);
  const [lastPage, setLastPage] = useState(3);
  const totalPages = Math.ceil(datas.length / itemsPerPage);
  const indexOfLastTodo = currentPage * itemsPerPage;
  const indexOfFirstTodo = indexOfLastTodo - itemsPerPage;
  const currentDatas = datas.slice(indexOfFirstTodo, indexOfLastTodo);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(datas.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };
  const handleClick = (value) => {
    setCurrentPage(value);
  };
  useEffect(() => {
    if (currentPage === 1) {
      setFirstPage(0);
      setLastPage(3);
    } else if (currentPage === 2) {
      setFirstPage(0);
      setLastPage(3);
    } else if (currentPage === totalPages) {
      setFirstPage(totalPages - 3);
      setLastPage(totalPages);
    } else {
      setFirstPage(currentPage - 2);
      setLastPage(currentPage + 1);
    }
  }, [currentPage, totalPages]);
  const renderPages = pageNumbers.slice(firstPage, lastPage);
  return {
    perData,
    perItem,
    totalPages,
    indexOfLastTodo,
    indexOfFirstTodo,
    handleClick,
    handleNext,
    handlePrev,
    currentDatas,
    pageNumbers,
    currentPage,
    renderPages,
  };
}
