"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

export default function OrderOnline({}: Props) {
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const handleClose = () => {
    setIsOrderOpen(false);
  };
  return (
    <div className="relative">
      <button
        type="button"
        className="header-button group flex items-center gap-1"
        onClick={() => setIsOrderOpen((prev) => !prev)}
        aria-expanded={isOrderOpen}
        aria-haspopup="menu"
      >
        Beställa
        <Image
          alt=""
          src="/icons/chevron-right.svg"
          width={20}
          height={20}
          className={`transition-transform duration-200 ${
            isOrderOpen ? "rotate-90" : ""
          }`}
        />
      </button>

      {isOrderOpen && (
        <>
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Stäng meny"
            className="fixed inset-0 z-40 cursor-default"
            onClick={handleClose}
          />

          {/* Dropdown */}
          <div
            role="menu"
            className="absolute right-0 top-full z-50 mt-2 w-52 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg"
          >
            <Link
              href="https://yabie.online/myzukirestaurang/sv"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClose}
              className="flex items-center justify-between border-t border-gray-100 px-4 py-3 text-base font-medium text-gray-800 transition-colors hover:bg-gray-200"
            >
              <span>Beställ direkt</span>
              <span className="text-xs text-gray-400">↗</span>
            </Link>
            <Link
              href="https://www.foodora.se/restaurant/ui5a/myzuki-ui5a"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClose}
              className="flex items-center justify-between px-4 py-3 text-base font-medium text-gray-800 transition-colors hover:bg-gray-200"
            >
              <span>Foodora</span>
              <span className="text-xs text-gray-400">↗</span>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
