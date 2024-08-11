import React from 'react';
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input
        type="text"
        placeholder="Search..."
        className="w-full input input-bordered h-10 rounded-full"
        />
        <button type="submit" className="btn btn-sm bg-slate-800 text-white">
        <FaSearch className='w-4 h-4 outline-none' />

        </button>
        </form>
  );
}

export default SearchInput