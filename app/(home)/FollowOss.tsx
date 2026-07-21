import Image from "next/image";
import React from "react";

type Props = {};

export default function FollowOss({}: Props) {
  return (
    <section className="pt-10 pb-20">
      <h3 className="text-center text-3xl font-semibold py-8">
        Följ oss på Facebook
      </h3>
      <p className="text-center text-primary mb-8 text-base">
        Nyheter, erbjudanden och smakglimt direkt i ditt flöde
      </p>
      <div className="flex justify-center mb-8">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 border-2 border-primary text-primary px-10 py-4 font-semibold hover:bg-black  transition-colors"
        >
          <Image
            src="/icons/facebook.svg"
            alt="Facebook"
            width={20}
            height={20}
          />
          Besök oss på Facebook
        </a>
      </div>
      <div className="w-full max-w-5xl mx-auto  px-4 lg:px-0 mt-20">
        <figure className="relative w-150 aspect-1/0.5  rounded-lg overflow-hidden mx-auto">
          <Image
            src="/images/og-image.jpg"
            alt="image"
            fill
            loading="eager"
            sizes="400px"
            className="absolute"
          />
        </figure>
      </div>
    </section>
  );
}
