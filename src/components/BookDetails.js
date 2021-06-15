import React, { useEffect, useState } from "react";
import { graphql } from "react-apollo";
import { getBookQuery } from "../queries/queries";

function BookDetails(props) {
  const [book, getBook] = useState();

  useEffect(() => {
    console.log(props);
    props.data.loading && props.data.book
      ? console.log("nah")
      : getBook(props.data.book);
  }, [props]);

  return (
    <>
      {console.log(book)}
      {!props.data.loading && book && (
        <div>
          <h1>{book?.name}</h1>
          <h2>{book?.genre}</h2>
          <h3>{book?.author.name}</h3>
          <h3>{book?.author.age}</h3>
          <h4>Other books include</h4>
          {book?.author.books.map((book) => (
            <p key={book.id}>{book.name}</p>
          ))}
        </div>
      )}
    </>
  );
}

export default graphql(getBookQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.bookId,
      },
    };
  },
})(BookDetails);
