import React from "react";
import { Link } from "react-router-dom";
import { Magnet, ArrowLeft } from "lucide-react";

function ClientMatch() {
  const handleSignUp = () => {
    window.location.href =
      "https://forms.office.com/Pages/ResponsePage.aspx?id=TlBonWP7AE2TNqNnpWy1LTByA66Z_EJOr7B1cYWQoZpUNkQySjRLVEdUQUpORkVMUksyV0VUNFlSMy4u";
  };

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#FDFDFD]"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      <header className="bg-[#1A2E40]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/">
            <div className="flex items-center gap-2 text-white">
              <div className="text-[#3A6EA5]">
                <Magnet size={24} />
              </div>
              <h2 className="text-xl font-semibold tracking-tight">Magnet</h2>
            </div>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-[#E6E6E6] hover:text-[#3A6EA5] text-sm font-medium transition"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="flex-1 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-semibold text-[#1A2E40] mb-4">
              Client Match Sign Up
            </h1>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              Sign up for our client matching service.
            </p>
            <button
              onClick={handleSignUp}
              className="mt-8 bg-[#3A6EA5] text-white hover:bg-[#325d8c] px-6 py-3 rounded-lg font-medium transition"
            >
              Sign Up
            </button>
          </div>
        </div>
      </main>
      <footer className="bg-[#FDFDFD] border-t border-[#E6E6E6]">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex items-center gap-4 text-[#1A2E40]">
              <div className="text-[#3A6EA5]">
                <Magnet size={20} />
              </div>
              <h2 className="text-lg font-semibold">Magnet</h2>
              <img
                src="/nvidia-inception-program-badge-rgb-for-screen.png"
                alt="NVIDIA Inception Program"
                className="h-10 w-auto"
              />
            </div>
            <div className="mt-8 md:mt-0">
              <p className="text-sm text-[#6B7280]">
                &copy; {new Date().getFullYear()} Magnet. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ClientMatch;
