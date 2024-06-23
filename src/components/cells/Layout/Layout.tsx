import React, { FC } from "react";

const Layout = ({ children }: { children: any }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-64 p-6">
        <h2 className="text-xl font-semibold mb-4">Sidebar</h2>
        {/* Add your sidebar links or components here */}
      </div>

      {/* Main Content Area */}
      <main className="flex-1 overflow-hidden flex flex-col min-h-screen overflow-y-scroll">
        <div className="p-6">
          {/* Header */}
          <div className="mb-4">
            <h1 className="text-2xl font-bold mb-2">Header Title</h1>
            {/* Add your header content here */}
          </div>
          {/* Main Content */}
          {children}
          {/* Footer */}
        </div>
        <div className="mt-auto p-6 bg-gray-200">
          <p>Footer Content</p>
        </div>
      </main>
    </div>
  );
};

export default Layout;
