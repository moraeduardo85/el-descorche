const tastingNotes = ['Vino', 'Historias', 'Encuentros'];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#160707] px-0 text-[#34130f] sm:px-6 sm:py-6">
      <section className="relative mx-auto flex min-h-[100svh] w-full max-w-[520px] flex-col overflow-hidden bg-[#ead0ad] shadow-[0_24px_90px_rgba(0,0,0,0.48)] sm:min-h-[calc(100svh-3rem)] sm:rounded-[2rem]">
        <img
          alt="Botella de vino El Descorche sobre papel texturado con una pincelada circular de vino."
          src="images/el-descorche-poster.svg"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,225,192,0.58)_0%,rgba(248,225,192,0.08)_28%,rgba(48,16,13,0)_58%,rgba(36,11,9,0.2)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#f6dfbd]/90 via-[#f1d4aa]/54 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-[#ead0ad]/95 via-[#ead0ad]/58 to-transparent" />

        <div className="relative z-10 flex min-h-[100svh] flex-col px-6 pb-[max(1.4rem,env(safe-area-inset-bottom))] pt-[max(2.6rem,env(safe-area-inset-top))] text-center sm:min-h-[calc(100svh-3rem)] sm:px-8">
          <p className="mx-auto mb-3 w-fit border-y border-[#4b1515]/25 px-4 py-1.5 font-sans text-[0.68rem] uppercase text-[#5b1d19]">
            Próximamente
          </p>

          <h1 className="font-serif text-[clamp(4.2rem,19vw,6.8rem)] leading-[0.82] text-[#421312]">
            Se viene...
          </h1>

          <div className="mt-auto flex flex-col items-center">
            <div className="mb-4 flex items-center gap-2.5 text-[#4a1715]" aria-hidden="true">
              <span className="h-px w-16 bg-[#4a1715]/38" />
              <span className="grid h-2.5 w-2.5 rotate-45 place-items-center bg-[#4a1715]" />
              <span className="h-px w-16 bg-[#4a1715]/38" />
            </div>

            <p className="max-w-[21rem] font-serif text-[clamp(1.45rem,6.4vw,2rem)] leading-[1.2] text-[#35120f]">
              Todavía estamos definiendo la forma.
              <br />
              Por ahora, solo estamos dejando la copa servida.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-x-3 gap-y-2 text-[0.7rem] uppercase text-[#6b3328]">
              {tastingNotes.map((note) => (
                <span key={note} className="border-b border-[#6b3328]/25 pb-1">
                  {note}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
