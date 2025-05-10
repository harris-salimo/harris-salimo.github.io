import { Code, ExternalLink, Github, Gitlab, LayoutGrid, LayoutList } from "lucide-react";
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

function App() {
  return (
    <>
      <div className="fixed w-full bg-background">
        <div className="mx-auto border-b border-border flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <a className="block text-primary" href="#">
            <span className="text-2xl">Harris Maïla Salimo</span>
          </a>

          <div className="ml-auto flex gap-4">
            <a
              className="group relative inline-block text-sm font-medium text-primary focus:ring-3 focus:outline-hidden"
              href="https://github.com/harris-salimo"
            >
              <span className="absolute inset-0 border border-current"></span>
              <span className="block border border-current bg-background px-2 py-1 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                <Github />
              </span>
            </a>

            <a
              className="group relative inline-block text-sm font-medium text-primary focus:ring-3 focus:outline-hidden"
              href="https://gitlab.com/HarrisSalimo"
            >
              <span className="absolute inset-0 border border-current"></span>
              <span className="block border border-current bg-background px-2 py-1 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                <Gitlab />
              </span>
            </a>
          </div>
        </div>
      </div>

      <header className="lg:grid lg:h-screen lg:place-content-center">
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-prose text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Salama oh! I am Harris
            </h1>

            <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
              <strong className="text-accent-foreground">
                {" "}
                FullStack developer{" "}
              </strong>
              with 2+ years of experience in software development
            </p>

            <div className="mt-4 flex justify-center gap-4 sm:mt-6">
              <a
                className="group relative inline-block text-sm font-medium text-foreground-inverse focus:ring-3 focus:outline-hidden"
                href="#"
              >
                <span className="absolute inset-0 border border-primary"></span>
                <span className="block border border-primary bg-primary px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                  Download my resume
                </span>
              </a>

              <a
                className="group relative inline-block text-sm font-medium text-primary focus:ring-3 focus:outline-hidden"
                href="#projects"
              >
                <span className="absolute inset-0 border border-current"></span>
                <span className="block border border-current bg-background px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                  View projects
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="projects">
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div>
              <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                Projects
              </h2>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex rounded-sm border border-input divide-x divide-input">
                <button className="inline-flex size-10 items-center justify-center text-gray-600 transition hover:bg-gray-50 hover:text-gray-700">
                  <LayoutGrid />
                </button>

                <button className="inline-flex size-10 items-center justify-center text-gray-600 transition hover:bg-gray-50 hover:text-gray-700">
                  <LayoutList />
                </button>
              </div>

              <div className="border border-input px-2">
                <label htmlFor="SortBy" className="sr-only">
                  SortBy
                </label>

                <select
                  id="SortBy"
                  className="h-10 rounded-sm border-gray-300 text-sm"
                >
                  <option>Sort By</option>
                  <option value="Title, DESC">Title, DESC</option>
                  <option value="Title, ASC">Title, ASC</option>
                  <option value="Price, DESC">Price, DESC</option>
                  <option value="Price, ASC">Price, ASC</option>
                </select>
              </div>
            </div>

            <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <li>
                <div className="group relative block h-64 sm:h-80 lg:h-96">
                  <span className="absolute inset-0 border border-black"></span>

                  <div className="relative flex h-full transform items-end border border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                    <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-10 sm:size-12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                        Project 1
                      </h2>
                    </div>

                    <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                      <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                        Project 1
                      </h3>

                      <p className="mt-4 text-sm sm:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cupiditate, praesentium voluptatem omnis atque culpa
                        repellendus.
                      </p>

                      <div className="mt-8 flex gap-4">
                        <a
                          className="inline-block text-xs border p-1 font-medium focus:ring-3 focus:outline-hidden"
                          href="https://github.com/harris-salimo"
                        >
                          <Code />
                        </a>
                        <a
                          className="inline-block text-xs border p-1 font-medium focus:ring-3 focus:outline-hidden"
                          href="https://github.com/harris-salimo"
                        >
                          <ExternalLink />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className="group relative block h-64 sm:h-80 lg:h-96">
                  <span className="absolute inset-0 border border-black"></span>

                  <div className="relative flex h-full transform items-end border border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                    <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-10 sm:size-12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                        Project 2
                      </h2>
                    </div>

                    <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                      <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                        Project 2
                      </h3>

                      <p className="mt-4 text-sm sm:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cupiditate, praesentium voluptatem omnis atque culpa
                        repellendus.
                      </p>

                      <div className="mt-8 flex gap-4">
                        <a
                          className="inline-block text-xs border p-1 font-medium focus:ring-3 focus:outline-hidden"
                          href="https://github.com/harris-salimo"
                        >
                          <Code />
                        </a>
                        <a
                          className="inline-block text-xs border p-1 font-medium focus:ring-3 focus:outline-hidden"
                          href="https://github.com/harris-salimo"
                        >
                          <ExternalLink />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className="group relative block h-64 sm:h-80 lg:h-96">
                  <span className="absolute inset-0 border border-black"></span>

                  <div className="relative flex h-full transform items-end border border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                    <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-10 sm:size-12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                        Project 3
                      </h2>
                    </div>

                    <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                      <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                        Project 3
                      </h3>

                      <p className="mt-4 text-sm sm:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cupiditate, praesentium voluptatem omnis atque culpa
                        repellendus.
                      </p>

                      <div className="mt-8 flex gap-4">
                        <a
                          className="inline-block text-xs border p-1 font-medium focus:ring-3 focus:outline-hidden"
                          href="https://github.com/harris-salimo"
                        >
                          <Code />
                        </a>
                        <a
                          className="inline-block text-xs border p-1 font-medium focus:ring-3 focus:outline-hidden"
                          href="https://github.com/harris-salimo"
                        >
                          <ExternalLink />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className="group relative block h-64 sm:h-80 lg:h-96">
                  <span className="absolute inset-0 border border-black"></span>

                  <div className="relative flex h-full transform items-end border border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                    <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-10 sm:size-12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                        Project 4
                      </h2>
                    </div>

                    <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                      <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                        Project 4
                      </h3>

                      <p className="mt-4 text-sm sm:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cupiditate, praesentium voluptatem omnis atque culpa
                        repellendus.
                      </p>

                      <div className="mt-8 flex gap-4">
                        <a
                          className="inline-block text-xs border p-1 font-medium focus:ring-3 focus:outline-hidden"
                          href="https://github.com/harris-salimo"
                        >
                          <Code />
                        </a>
                        <a
                          className="inline-block text-xs border p-1 font-medium focus:ring-3 focus:outline-hidden"
                          href="https://github.com/harris-salimo"
                        >
                          <ExternalLink />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer>
        <div className="mx-auto border-t border-border max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
          <p className="mx-auto max-w-md text-center leading-relaxed text-gray-500">
            Made with &hearts; by Harris Salimo
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
