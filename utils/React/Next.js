// Installation

// npx create-next-app@latest

// Common Code Snippets and Utilities


// app/layout.js
import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2024 Next.js App</p>
        </footer>
      </body>
    </html>
  );
}

// Page Example
// app/home/page.js
export default function Home() {
    return (
      <section>
        <h1>Welcome to the Home Page!</h1>
        <p>This is where the content for the homepage will go.</p>
      </section>
    );
  }


// API Route Example (app/api/hello/route.js)
// app/api/hello/route.js
export async function GET() {
    return new Response(
      JSON.stringify({ message: "Hello from Next.js API!" }),
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }


// Dynamic Routing Example 
// app/post/[id]/page.js
export default function Post({ params }) {
    return (
      <div>
        <h1>Post {params.id}</h1>
        <p>Details for post with ID: {params.id}</p>
      </div>
    );
  }

// Server side rendering
// app/products/page.js
export default async function ProductsPage() {
    const res = await fetch('https://api.example.com/products');
    const products = await res.json();
  
    return (
      <div>
        <h1>Products</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
    );
  }


//   API Route Handling API routes allow you to manage server-side logic directly in Next.js:

// app/api/users/route.js
export async function GET() {
    const users = await fetchUsersFromDatabase();
    return new Response(JSON.stringify(users));
  }

// Environment Variables in Next.js Set environment variables in .env.local:

NEXT_PUBLIC_API_URL=https://api.example.com

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// Handling Errors (Error Boundaries)
// app/error.js
export default function Error({ error }) {
    return (
      <div>
        <h1>Something went wrong</h1>
        <p>{error.message}</p>
      </div>
    );
  }