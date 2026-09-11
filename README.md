
# React Custom Hooks Lab

A modern React application built with **TypeScript**, **Vite**, and **Tailwind CSS**, demonstrating the implementation and usage of reusable custom hooks: `usePagination` and `useDebounce`. Designed with a soft, responsive pastel UI.


## Tech Stack

* **Framework:** React (Vite)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **UI:** Custom Pastel Components with Grid/Flexbox responsiveness

## Custom Hooks Overview

### 1. `usePagination`
A robust hook that manages pagination logic for lists or tables, preventing out-of-bound errors automatically.

* **Inputs:**
  * `totalItems` *(number)*: Total count of items.
  * `itemsPerPage` *(number)*: Items displayed per page (default: `10`).
  * `initialPage` *(number)*: Starting page (default: `1`).
* **Returns:**
  * `currentPage`, `totalPages`, `startIndex`, `endIndex`, `itemsOnCurrentPage`
  * `setPage(page)`, `nextPage()`, `prevPage()`
  * `canNextPage`, `canPrevPage`


### 2. `useDebounce`
A generic hook designed to delay updating a value until a specified timeout has elapsed without new changes. Perfect for live search inputs and reducing unnecessary API calls.

* **Inputs:**
  * `value` *(string)*: Rapidly changing input value.
  * `delay` *(number)*: Debounce delay in milliseconds (default: `500ms`).
* **Returns:**
  * `{ debouncedValue }`: The value post-delay.


## Demo Components

1. **`PaginationDemo.tsx`**: Features item slicing, page size selector, dynamic pages, and a fully responsive grid (1 column on mobile, 2 columns on larger screens).
2. **`DebounceSearchDemo.tsx`**: Demonstrates live input filtering with an interactive delay range slider (100ms – 2000ms) and visual pending indicators.
