
import { useState } from 'react';

export interface UsePaginationInputs {
  totalItems: number;
  itemsPerPage?: number;
  initialPage?: number;
}

export interface UsePaginationResult {
    currentPage: number;
    totalPages: number;
    startIndex: number;
    endIndex: number;
    itemsOnCurrentPage: number;
    setPage: (pageNumber: number) => void;
    nextPage: () => void;
    prevPage: () => void;
    canNextPage: boolean;
    canPrevPage: boolean;
}

export function usePagination({
    totalItems,
    itemsPerPage = 10,
    initialPage = 1,
}: UsePaginationInputs): UsePaginationResult {
   const [currentPage, setCurrentPage] = useState(initialPage);

    // Total amount of pages
    const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));

    // Calculate the start and end index for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

    // Calculate the number of items on the current page
    const itemsOnCurrentPage = Math.max(0, endIndex - startIndex);

    // Boolean flags to determine if we can navigate to the next or previous page
    const canNextPage = currentPage < totalPages;
    const canPrevPage = currentPage > 1;

    // Function to set the current page, ensuring it stays within valid bounds
    const setPage = (pageNumber: number) => {
        if (pageNumber < 1) {
            setCurrentPage(1);
        } else if (pageNumber > totalPages) {
            setCurrentPage(totalPages);
        } else {
            setCurrentPage(pageNumber);
        }
    };

    // Function to go to the next page
    const nextPage = () => {
        if (canNextPage) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Function to go to the previous page
    const prevPage = () => {
        if (canPrevPage) {
            setCurrentPage(currentPage - 1);
        }
    };


    return {
        currentPage,
        totalPages,
        startIndex,
        endIndex,
        itemsOnCurrentPage,
        setPage,
        nextPage,
        prevPage,
        canNextPage,
        canPrevPage,
    };
}

