import { useState } from 'react'; 

function Post() {
  const [name, setname] = useState('');
  const handleNameChange = event => setname(event.target.value);

  // const handleSubmit = async (event) => {
  //   await fetch('/api/hello', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ name })
  //   });
  // }

  return (
    <form action='/api/hello' method='POST'>
      <input onChange={handleNameChange} type="text" name="name" id="" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Post;