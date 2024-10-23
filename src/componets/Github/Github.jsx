import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
  const data = useLoaderData();  

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      {}
      {data && (
        <>
          <p>Github followers: {data.followers}</p>
          <img
            className='text-center'
            src={data.avatar_url}
            alt="Git-picture"
            width={300}
          />
        </>
      )}
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/AayushKhanal47');
  if (!response.ok) {
    throw new Error('Failed to fetch GitHub data');
  }
  return response.json();  
};
