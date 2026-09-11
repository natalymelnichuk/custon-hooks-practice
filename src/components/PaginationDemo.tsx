
import { useState } from 'react';
import { usePagination } from '../hooks/usePagination';


function PaginationDemo() {

    const [itemsPerPage, setItemsPerPage] = useState<number>(10);

    const allIItems = Array.from({ length: 123 }, (_, index) => `Item ${index + 1}`);


    const {
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
    } = usePagination({
        totalItems: allIItems.length,
        itemsPerPage,
        initialPage: 1,
    });

    const currentItems = allIItems.slice(startIndex, endIndex);

    return (
        <div className="p-4 sm:p-8 max-w-xl mx-auto bg-violet-50/60 backdrop-blur-md rounded-3xl shadow-lg border border-violet-100 space-y-5 font-sans">
            <h1 className="text-xl sm:text-2xl font-bold text-slate-700 text-center tracking-wide">
                Pagination Demo
            </h1>

            {/* Setting itemsPerPage */}
            <div className="flex items-center justify-between bg-white/80 px-4 py-3 rounded-2xl shadow-sm border border-pink-100">
                <label htmlFor="itemsPerPage" className="font-medium text-slate-600 text-xs sm:text-sm">
                    Items per page:
                </label>
                <select
                    id="itemsPerPage"
                    value={itemsPerPage}
                    onChange={(e) => setItemsPerPage(Number(e.target.value))}
                    className="bg-pink-50 text-slate-700 font-medium rounded-full px-3 py-1 sm:px-4 sm:py-1.5 outline-none border border-pink-200 cursor-pointer hover:bg-pink-100 transition-colors text-xs sm:text-sm"
                >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                </select>
            </div>

            {/* Items List */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentItems.map((item) => (
                <li
                    key={item}
                    className="p-3 bg-white/90 text-slate-600 text-xs sm:text-sm font-medium rounded-2xl shadow-sm text-center border border-indigo-50 hover:border-indigo-200 hover:scale-[1.01] transition-all"
                >
                    {item}
                </li>
                ))}
            </ul>

            {/* Информационная строка */}
            <p className="text-xs text-center text-slate-400 font-medium">
                Showing items <span className="text-slate-600 font-semibold">{startIndex + 1}</span> -{' '}
                <span className="text-slate-600 font-semibold">{endIndex}</span> (Total on this page:{' '}
                {itemsOnCurrentPage})
            </p>

            {/* Кнопки Назад / Вперёд */}
            <div className="flex items-center justify-between gap-2 pt-1">
                <button
                onClick={prevPage}
                disabled={!canPrevPage}
                className="px-4 py-2 sm:px-5 sm:py-2.5 bg-rose-200 hover:bg-rose-300 text-slate-700 font-medium text-xs sm:text-sm rounded-full shadow-sm disabled:opacity-40 disabled:hover:bg-rose-200 disabled:cursor-not-allowed transition-all"
                >
                ← Prev
                </button>

                <span className="text-xs sm:text-sm font-semibold text-slate-500 bg-white/70 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-purple-100">
                {currentPage} / {totalPages}
                </span>

                <button
                onClick={nextPage}
                disabled={!canNextPage}
                className="px-4 py-2 sm:px-5 sm:py-2.5 bg-indigo-200 hover:bg-indigo-300 text-slate-700 font-medium text-xs sm:text-sm rounded-full shadow-sm disabled:opacity-40 disabled:hover:bg-indigo-200 disabled:cursor-not-allowed transition-all"
                >
                Next →
                </button>
            </div>

            {/* Переход по номерам страниц */}
            <div className="flex flex-wrap justify-center gap-1.5 pt-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                    key={page}
                    onClick={() => setPage(page)}
                    className={`w-8 h-8 sm:w-9 sm:h-9 text-xs font-semibold rounded-full flex items-center justify-center transition-all ${
                    currentPage === page
                        ? 'bg-purple-400 text-white shadow-md scale-105'
                        : 'bg-white text-slate-600 hover:bg-purple-100 border border-purple-50'
                    }`}
                >
                    {page}
                </button>
                ))}
            </div>
        </div>
    );
}

export default PaginationDemo;