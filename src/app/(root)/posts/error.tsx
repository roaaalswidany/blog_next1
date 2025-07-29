"use client";
import React from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div>
      <button onClick={() => reset}>try again</button>
    </div>
  );
};

export default Error;
