// Install 
// npm install @tanstack/react-query

// Setting up the Query Client Provider

// src/App.js (or App.tsx for TypeScript users)
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Example of a page component

// Create a query client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes here */}
      </Routes>
    </QueryClientProvider>
  );
}

export default App;



// Basic Query Setup

// src/hooks/useFetchPosts.js
import { useQuery } from '@tanstack/react-query';

// Fetch function
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

// Custom hook using `useQuery`
export const useFetchPosts = () => {
  return useQuery(['posts'], fetchPosts, {
    staleTime: 60000, // Data is fresh for 1 minute
    cacheTime: 300000, // Data stays in cache for 5 minutes after last access
    retry: 3, // Retry up to 3 times on failure
    refetchOnWindowFocus: false, // Disable refetching on window focus
  });
};

// Usage in a Component 

// src/pages/Home.js
import React from 'react';
import { useFetchPosts } from '../hooks/useFetchPosts';

const Home = () => {
  const { data, error, isLoading, isError } = useFetchPosts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;



// Basic Mutation Setup

// src/hooks/useCreatePost.js
import { useMutation } from '@tanstack/react-query';

// Post function
const createPost = async (newPost) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPost),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

// Custom hook using `useMutation`
export const useCreatePost = () => {
  return useMutation(createPost);
};

// Usage in a Component:

// src/pages/CreatePost.js
import React, { useState } from 'react';
import { useCreatePost } from '../hooks/useCreatePost';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { mutate, isLoading, isError, error } = useCreatePost();

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ title, body });
  };

  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Creating...' : 'Create Post'}
        </button>
      </form>

      {isError && <p>Error: {error.message}</p>}
    </div>
  );
};

export default CreatePost;




// Using useQuery with Pagination

// src/hooks/useFetchPaginatedPosts.js
import { useQuery } from '@tanstack/react-query';

const fetchPaginatedPosts = async (page = 1) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const useFetchPaginatedPosts = (page) => {
  return useQuery(['posts', page], () => fetchPaginatedPosts(page), {
    keepPreviousData: true, // Keep data from the previous page while loading the next
  });
};



// Usage in a Component with Pagination:

// src/pages/PaginatedPosts.js
import React, { useState } from 'react';
import { useFetchPaginatedPosts } from '../hooks/useFetchPaginatedPosts';

const PaginatedPosts = () => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading, isError } = useFetchPaginatedPosts(page);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Paginated Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <div>
        <button onClick={handlePrevPage} disabled={page === 1}>
          Previous
        </button>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
};

export default PaginatedPosts;



// Query Invalidation & Refetching
// Example in a component using useMutation
const { mutate } = useCreatePost();
const queryClient = useQueryClient();

// After a mutation (e.g., create post), invalidate related queries
const onSuccess = () => {
  queryClient.invalidateQueries(['posts']); // This will refetch the posts
};

mutate(newPost, { onSuccess });



// Other Common Configurations

const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5000, // Data stays fresh for 5 seconds
        retry: 2, // Retry failed queries 2 times
        refetchOnWindowFocus: false, // Disable refetch on window focus
      },
    },
  });


