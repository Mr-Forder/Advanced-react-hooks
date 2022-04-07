import useFetch from "../hooks/useFetch";

const UseFetchExample = () => {
  //create 'res' variable (stands for response), set equal to our custom useFetch hook, which takes in a url and an options object.
  //in this case, as we're just making a get request on json placeholder, our options object is empty, as we don't need to add a request method (get, post, put, delete) or credentials.
  const res = useFetch(`https://jsonplaceholder.typicode.com/posts`, {});
  //a better way would be to destructure our hook variables for easier access -
  const { data, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts`,
    {}
  );
  console.log(data, loading, error);

  //if statement to show loading if loading is true during request
  if (loading) {
    return <h3>Loading...</h3>;
  }

  //otherwise, we'll render this
  return (
    <div>
      <h3>useFetch</h3>
      {data.map((post) => (
        <h3 key={post.id}>{post.title}</h3>
      ))}
    </div>
  );
};

export default UseFetchExample;
