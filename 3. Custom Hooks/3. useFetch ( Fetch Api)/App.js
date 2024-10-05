import React, { useState, useEffect } from "react";
import "./styles.css";

/*
  Instructions:
    Implement the `useFetch` function. 
    
{
  "userId": 1,
  "id": 3,
  "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
  "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
} 
*/

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Netowrk response not ok!");
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData(url)
  }, [url]);
  return { loading, data, error };
};

export default function App() {
  const postIds = [1, 2, 3, 4, 5, 6, 7, 8];
  const [index, setIndex] = useState(0);

  const {
    loading,
    data: post,
    error,
  } = useFetch(
    // based on this, we wil get following outputs from the fetch:
    // loading: Indicates whether the data is still being fetched (true if the request is in progress, false otherwise).
    // data: post: data is the fetched data, but it's being renamed to post in this case for clarity or convenience.
    // error: Stores any error that occurred during the fetch request.
    `https://jsonplaceholder.typicode.com/posts/${postIds[index]}`
  );

  const incrementIndex = () => {
    setIndex((i) => (i === postIds.length - 1 ? i : i + 1));
  };

  if (loading === true) {
    return <p>Loading</p>;
  }

  if (error) {
    return (
      <>
        <p>{error}</p>
        <button onClick={incrementIndex}>Next Post</button>
      </>
    );
  }

  console.log(post);
  return (
    <div className="App">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      {error && <p>{error}</p>}
      {index === postIds.length - 1 ? (
        <p>No more posts existss ....</p>
      ) : (
        <button onClick={incrementIndex}>Next Post</button>
      )}
    </div>
  );
}
