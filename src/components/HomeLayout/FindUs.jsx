// import React from 'react';

const FindUs = () => {
    return (
      <div>
        <h2 className="font-bold mt-10 text-lg">Find Us On</h2>
        <div className="mt-5 grid grid-cols-1 gap-4">
          <button className="btn bg-[#1A77F2] text-white border-[#005fd8]">
            <svg
              aria-label="Facebook logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path
                fill="white"
                d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"
              ></path>
            </svg>
            Login with Facebook
          </button>
          <button className="btn bg-[#2F2F2F] text-white border-black">
            <svg
              aria-label="Microsoft logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M96 96H247V247H96" fill="#f24f23"></path>
              <path d="M265 96V247H416V96" fill="#7eba03"></path>
              <path d="M96 265H247V416H96" fill="#3ca4ef"></path>
              <path d="M265 265H416V416H265" fill="#f9ba00"></path>
            </svg>
            Login with Microsoft
          </button>
          <button className="btn bg-black text-white border-black">
            <svg
              aria-label="Apple logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1195 1195"
            >
              <path
                fill="white"
                d="M1006.933 812.8c-32 153.6-115.2 211.2-147.2 249.6-32 25.6-121.6 25.6-153.6 6.4-38.4-25.6-134.4-25.6-166.4 0-44.8 32-115.2 19.2-128 12.8-256-179.2-352-716.8 12.8-774.4 64-12.8 134.4 32 134.4 32 51.2 25.6 70.4 12.8 115.2-6.4 96-44.8 243.2-44.8 313.6 76.8-147.2 96-153.6 294.4 19.2 403.2zM802.133 64c12.8 70.4-64 224-204.8 230.4-12.8-38.4 32-217.6 204.8-230.4z"
              ></path>
            </svg>
            Login with Apple
          </button>
        </div>
      </div>
    );
};

export default FindUs;