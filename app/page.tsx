export default function Home() {
  return (
    <main className="h-[100svh] overflow-hidden bg-[#160707] px-0 text-[#35120f] sm:p-6">
      <section className="relative mx-auto h-full w-full max-w-[480px] overflow-hidden bg-[#ead0ad] shadow-[0_28px_100px_rgba(0,0,0,0.52)] sm:rounded-[1.75rem]">
        <img
          alt="Botella de vino El Descorche sobre papel texturado con una pincelada circular de vino."
          src="images/el-descorche-poster.svg"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(246,221,185,0.9)_0%,rgba(246,221,185,0.34)_22%,rgba(246,221,185,0)_45%,rgba(232,197,151,0)_68%,rgba(232,197,151,0.84)_100%)]" />
        <div className="absolute inset-0 shadow-[inset_0_0_70px_rgba(58,20,12,0.18)]" />

        <div className="relative z-10 grid h-full grid-rows-[auto_1fr_auto] px-7 pb-[max(1.3rem,env(safe-area-inset-bottom))] pt-[max(1.8rem,env(safe-area-inset-top))] text-center sm:px-9">
          <header>
            <p className="mx-auto font-serif text-[clamp(3rem,13vw,4.5rem)] leading-[0.95] text-[#421312]">
              Se viene...
            </p>
          </header>

          <div aria-hidden="true" />

          <footer className="flex flex-col items-center">
            <p className="max-w-[18rem] font-serif text-[clamp(1.05rem,4.4vw,1.4rem)] leading-[1.32] text-[#35120f]">
              Por ahora, solo estamos dejando la copa servida.
            </p>
          </footer>
        </div>
      </section>
    </main>
  );
}
