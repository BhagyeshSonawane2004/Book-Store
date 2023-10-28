import React from 'react'
import { BsCloudArrowUp } from 'react-icons/bs';
import { HiLockClosed, HiServer } from "react-icons/hi";

const About = () => {
  return (
    <div className='mt-20'>
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Hello Readers..!!!</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A Universe of Books</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                We are more than just a bookstore; we are a universe of books. Our vast collection features everything from timeless classics to contemporary bestsellers, spanning across fiction, non-fiction, mystery, romance, science fiction, fantasy, self-help, and much more. Whether you are a bibliophile, a casual reader, or a scholar, we have something for everyone.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://images.pexels.com/photos/4865741/pexels-photo-4865741.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                At our online bookstore, we invite you to embark on a literary journey like no other. Here, you will discover a treasure trove of books spanning every genre and era, waiting to transport you to new realms, evoke powerful emotions, and stimulate your imagination. Our virtual shelves are lined with an array of books that cater to diverse tastes and interests, making us your ultimate destination for literary exploration.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <BsCloudArrowUp className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Your Literary Companion.</strong> Our online bookstore is more than just a website; it's your literary companion, ready to assist you in finding the perfect book. Our user-friendly interface and advanced search tools allow you to effortlessly browse our extensive collection. Discover new releases, search for your favorite author, explore book recommendations, and immerse yourself in the world of literature.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <HiLockClosed className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Personalized Recommendations.</strong> We believe that a good book is like a friend. It understands your desires and takes you on a journey tailored to your tastes. Our recommendation engine uses the latest in artificial intelligence to understand your preferences and suggest books that match your interests. Let us introduce you to your next literary obsession.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <HiServer className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">E-books and Audiobooks.</strong> we offer a vast collection of e-books and audiobooks. Access your favorite titles on your e-reader or listen to them on the go, allowing you to enjoy the written word in a way that best suits your lifestyle.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
Stay connected with us through our newsletter and social media channels to receive updates on the latest releases, author interviews, and exclusive offers. We are not just a place to buy books; we are a community of readers, and we invite you to be a part of it.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Join Our Reading Club!!!!</h2>
              <p className="mt-6">
                For those seeking more than just books, our online bookstore hosts a vibrant reading club. Engage in thought-provoking discussions, attend author events, and be part of a community that shares your passion for literature.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About
