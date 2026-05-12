export default function Home() {
  return (
    <main className="relative isolate flex min-h-screen overflow-hidden bg-[#f6efe5] px-6 py-8 text-[#322621] sm:px-10 lg:px-16">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(122,46,59,0.16),transparent_34rem),linear-gradient(135deg,#fbf7ef_0%,#efe0d0_54%,#e8d5c4_100%)]" />
      <div className="absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#7a2e3b]/10 blur-3xl sm:h-96 sm:w-96" />
      <div className="absolute bottom-14 right-8 -z-10 hidden h-44 w-44 rotate-12 rounded-[42%] border border-[#7a2e3b]/15 bg-[#fff8ef]/30 shadow-[inset_0_0_48px_rgba(122,46,59,0.08)] sm:block" />
      <div className="absolute left-6 top-24 -z-10 h-28 w-10 rotate-[28deg] rounded-full border border-[#8f6b4b]/20 bg-[#d5b896]/20 shadow-[0_20px_70px_rgba(82,49,36,0.12)] sm:left-16" />

      <section className="mx-auto flex w-full max-w-5xl flex-col justify-between">
        <div className="flex items-center justify-between gap-6 text-sm tracking-[0.26em] text-[#7a2e3b]/80">
          <span className="h-px flex-1 bg-gradient-to-r from-[#7a2e3b]/30 to-transparent" />
          <span className="rounded-full border border-[#7a2e3b]/20 bg-white/30 px-4 py-2 uppercase shadow-sm backdrop-blur">
            En construcción
          </span>
        </div>

        <div className="my-auto max-w-3xl py-24 sm:py-32 lg:py-40">
          <p className="mb-6 font-sans text-sm uppercase tracking-[0.34em] text-[#8f6b4b]">
            Abrir con pausa
          </p>
          <h1 className="font-serif text-6xl font-semibold tracking-[-0.06em] text-[#2f241f] sm:text-7xl md:text-8xl">
            El Descorche
          </h1>
          <p className="mt-8 max-w-2xl text-2xl leading-snug text-[#4f3a32] sm:text-3xl md:text-4xl">
            Estamos preparando algo para abrir pronto.
          </p>
          <div className="mt-10 h-px w-28 bg-[#7a2e3b]/40" />
          <p className="mt-10 max-w-2xl text-lg leading-8 text-[#5f4b42] sm:text-xl sm:leading-9">
            El Descorche es una idea en construcción: un espacio para abrir
            conversaciones, historias y momentos que valgan la pena compartir.
          </p>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#765f54] sm:text-lg">
            Todavía estamos definiendo la forma. Por ahora, solo estamos dejando
            la copa servida.
          </p>
        </div>

        <footer className="flex flex-col gap-4 border-t border-[#7a2e3b]/10 pt-6 text-sm text-[#765f54] sm:flex-row sm:items-center sm:justify-between">
          <p>Hecho con calma. Servido pronto.</p>
          <div className="flex items-center gap-3" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-[#7a2e3b]/45" />
            <span className="h-px w-16 bg-[#7a2e3b]/25" />
            <span className="h-2 w-2 rounded-full bg-[#8f6b4b]/45" />
          </div>
        </footer>
      </section>
    </main>
  );
}
