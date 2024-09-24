// pages/index.tsx
"use client";

import React from 'react';
import Link from 'next/link'; // Import Link from Next.js

const HomePage = () => {
  return (
    <div className="text-center">
      <h1>Main Navigation Page</h1>
      <div className="button-container">
        <Link href="/homepage" passHref>
          <button className="btn btn-primary m-2">Go to Home Screen 1</button>
        </Link>
        <Link href="/homepage1" passHref>
          <button className="btn btn-primary m-2">Go to Home Screen 2</button>
        </Link>
        <Link href="/homepage3" passHref>
          <button className="btn btn-primary m-2">Go to Home Screen 3</button>
        </Link>
        <Link href="/homepage4" passHref>
          <button className="btn btn-primary m-2">Go to Home Screen 4</button>
        </Link>
        <Link href="/homepage5" passHref>
          <button className="btn btn-primary m-2">Go to Home Screen 5</button>
        </Link>
      </div>

      {/* Styled JSX for CSS */}
      <style jsx>{`
                .button-container {
                    margin-top: 20px;
                }
                
                .btn {
                    padding: 10px 20px;
                    font-size: 16px;
                }
            `}</style>
    </div>
  );
};

export default HomePage;
