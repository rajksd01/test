import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="h-1/5 border border-blue-50">
        <h2>Banner Item</h2>
      </div>
      {children}
    </div>
  );
}

export default layout;
 