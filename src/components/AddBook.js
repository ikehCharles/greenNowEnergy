import React, { useEffect, useState } from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import {
  getAuthorsQuery,
  addBookMutation,
  getBooksQuery,
} from "../queries/queries";

function AddBook(props) {
  const addBook = (e) => {
    e.preventDefault();
    const elements = e.target.elements;
    const paramData = {};
    for (let element of elements) {
      if (element.type === "submit") continue;

      paramData[element.name] = element.value;
    }
    props.addBookMutation({
      variables: paramData,
      refetchQueries: [{ query: getBooksQuery }],
    });
  };

  useEffect(() => {
    console.log(props);
  });

  return (
    <>
      <form onSubmit={addBook}>
        <div className="field">
          <label htmlFor="name">Book Name</label>
          <input type="text" name="name" />
        </div>
        <div className="field">
          <label htmlFor="genre">Genre</label>
          <input type="text" name="genre" />
        </div>
        <div className="field">
          <label htmlFor="author">Author</label>
          <select name="authorId" id="author">
            {props.getAuthorsQuery.loading && (
              <option value="null">Loading Authors...</option>
            )}
            {!props.getAuthorsQuery.loading &&
              props.getAuthorsQuery.authors.map((author) => (
                <option value={author.id} key={author.id}>
                  {author.name}
                </option>
              ))}
          </select>
        </div>
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);
