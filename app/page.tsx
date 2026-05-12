export default function Home() {
  return (
    <main className="min-h-screen bg-[#160707] px-0 text-[#35120f] sm:px-6 sm:py-6">
      <section className="relative mx-auto min-h-[100svh] w-full max-w-[480px] overflow-hidden bg-[#ead0ad] shadow-[0_28px_100px_rgba(0,0,0,0.52)] sm:min-h-[calc(100svh-3rem)] sm:rounded-[1.75rem]">
        <img
          alt="Botella de vino El Descorche sobre papel texturado con una pincelada circular de vino."
          src="images/el-descorche-poster.webp"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(246,221,185,0.9)_0%,rgba(246,221,185,0.34)_22%,rgba(246,221,185,0)_45%,rgba(232,197,151,0)_68%,rgba(232,197,151,0.84)_100%)]" />
        <div className="absolute inset-0 shadow-[inset_0_0_70px_rgba(58,20,12,0.18)]" />

        <div className="relative z-10 grid min-h-[100svh] grid-rows-[auto_1fr_auto] px-7 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-[max(2.15rem,env(safe-area-inset-top))] text-center sm:min-h-[calc(100svh-3rem)] sm:px-9">
          <header>
            <p className="mx-auto w-fit border-y border-[#4b1515]/28 px-4 py-1.5 font-sans text-[0.66rem] uppercase text-[#5b1d19]">
              Próximamente
            </p>

            <h1 className="mt-6 font-serif text-[clamp(3.55rem,16vw,5rem)] leading-[0.92] text-[#421312]">
              Se viene...
            </h1>
          </header>

          <div aria-hidden="true" />

          <footer className="flex flex-col items-center">
            <div className="mb-3 flex items-center gap-3 text-[#4a1715]" aria-hidden="true">
              <span className="h-px w-14 bg-[#4a1715]/34" />
              <span className="h-1.5 w-1.5 rotate-45 bg-[#4a1715]" />
              <span className="h-px w-14 bg-[#4a1715]/34" />
            </div>

            <p className="max-w-[18.5rem] font-serif text-[clamp(1.08rem,4.7vw,1.45rem)] leading-[1.36] text-[#35120f]">
              Todavía estamos definiendo la forma.
              <br />
              Por ahora, solo estamos dejando la copa servida.
            </p>
          </footer>
        </div>
      </section>
    </main>
  );
}
