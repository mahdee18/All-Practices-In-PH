import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  return (
    <Link to={`../book/${book.isbn13}`}>
      <div className="overflow-hidden relative transition duration-200 translate hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl">
        <img
          src={book.image}
          className="object-cover w-full h-56 md:h-64 xl:h-80"
          alt="book cover page"
        />
 
        <div className="bg-black px-6 py-4 flex flex-col text-gray-300 bg-opacity-75 opacity-0 hover:opacity-100 absolute inset-0 transition-opacity duration-200">
          <p>{book.title}</p>
          <br />
          <p>{book.subtitle.substring(0, 45)}...</p>
          <br />
          <p className="mt-auto">Price: {book.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Book;
