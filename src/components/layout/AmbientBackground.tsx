import React from 'react';

export default function AmbientBackground() {
  return (
    <>
      <div className="fixed top-20 right-0 w-[500px] h-[500px] bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/5 dark:bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none z-0" />
    </>
  );
}
