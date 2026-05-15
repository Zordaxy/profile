export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black px-6">
      <div className="max-w-xl">
        <h1 className="text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Alex Vovchuk
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          Software engineer. Building things on the web.
        </p>
        <div className="mt-8 flex gap-4 text-sm font-medium">
          <a
            href="https://github.com/Zordaxy"
            className="text-zinc-900 dark:text-zinc-50 underline underline-offset-4 hover:no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/alex-vovchuk/"
            className="text-zinc-900 dark:text-zinc-50 underline underline-offset-4 hover:no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </main>
  );
}
