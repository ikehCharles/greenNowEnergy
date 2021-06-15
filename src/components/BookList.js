import React, { useEffect, useState } from "react";
import { graphql } from "react-apollo";
import { getBooksQuery } from "../queries/queries";

function BookList(props) {
  const [books, getBooks] = useState([]);

  useEffect(() => {
    console.log(props);
    props.data.loading ? getBooks([]) : getBooks(props.data.books);
  }, [props]);

  return (
    <>
      {console.log(books)}
      {props.data.loading && "loading"}
      <ul style={{ margin: 0 }}>
        {!props.data.loading &&
          books.map((book) => (
            <li onClick={(e) => props.getBookById(e, book.id)} key={book.id}>
              {book.name}
            </li>
          ))}
      </ul>
    </>
  );
}

export default graphql(getBooksQuery)(BookList);
