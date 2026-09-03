import { FadeIn } from "./animations/FadeIn";

export function Hero() {
  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">

        {/* Texto */}
        <div className="max-w-xl">

          <FadeIn direction="left">

            <div className="mb-6 inline-flex items-center rounded-full border border-[#344465]/10 bg-[#F7F8FA] px-4 py-2">
              <span className="mr-2 h-2 w-2 rounded-full bg-[#344465]" />

              <span className="text-sm font-medium text-[#344465]">
                Tecnologia para um cuidado melhor
              </span>
            </div>

          </FadeIn>


          <FadeIn direction="left" delay={0.1}>

            <h1 className="text-5xl font-bold leading-[1.08] tracking-tight text-[#172033] sm:text-6xl">
              Cuidado mais inteligente.
              <span className="block text-[#344465]">
                Pessoas mais seguras.
              </span>
            </h1>

          </FadeIn>


          <FadeIn direction="left" delay={0.2}>

            <p className="mt-6 max-w-lg text-lg leading-8 text-[#667085]">
              SALUS conecta famílias, cuidadores e idosos em uma
              plataforma inteligente para organizar a rotina,
              acompanhar cuidados e agir quando realmente importa.
            </p>

          </FadeIn>


          <FadeIn direction="left" delay={0.3}>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <a
                href="#comecar"
                className="rounded-lg bg-[#344465] px-6 py-3.5 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-[#293752]"
              >
                Começar agora →
              </a>

              <a
                href="#como-funciona"
                className="rounded-lg border border-[#E5E7EB] px-6 py-3.5 text-center text-sm font-semibold text-[#344465] transition hover:bg-[#F7F8FA]"
              >
                Conheça SALUS
              </a>

            </div>

          </FadeIn>


          <FadeIn direction="left" delay={0.4}>

            <div className="mt-8 flex items-center gap-6 text-sm text-[#667085]">
              <span>✓ Família</span>
              <span>✓ Cuidador</span>
              <span>✓ Idoso</span>
            </div>

          </FadeIn>

        </div>


        {/* Mockup */}
        <FadeIn direction="right" delay={0.2}>

          <div className="relative">

            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#344465]/5 blur-3xl" />

            <div className="relative rounded-3xl border border-[#E5E7EB] bg-[#F7F8FA] p-4 shadow-2xl">

              <div className="overflow-hidden rounded-2xl bg-white">

                <div className="flex h-12 items-center border-b border-gray-100 px-5">

                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                    <div className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                    <div className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                  </div>

                  <span className="ml-6 text-xs font-medium text-gray-400">
                    app.salus.com.br
                  </span>

                </div>


                <div className="p-8">

                  <div className="mb-8">
                    <p className="text-sm text-gray-400">
                      Bom dia, Maria
                    </p>

                    <h2 className="mt-1 text-2xl font-bold text-[#172033]">
                      Visão geral
                    </h2>
                  </div>


                  <div className="grid gap-4 sm:grid-cols-2">

                    <div className="rounded-2xl bg-[#F7F8FA] p-5">
                      <p className="text-sm text-gray-500">
                        Medicamentos
                      </p>

                      <p className="mt-2 text-3xl font-bold text-[#344465]">
                        3/4
                      </p>

                      <p className="mt-2 text-xs text-gray-400">
                        doses realizadas hoje
                      </p>
                    </div>


                    <div className="rounded-2xl bg-[#F7F8FA] p-5">
                      <p className="text-sm text-gray-500">
                        Cuidados
                      </p>

                      <p className="mt-2 text-3xl font-bold text-[#344465]">
                        8/10
                      </p>

                      <p className="mt-2 text-xs text-gray-400">
                        tarefas concluídas
                      </p>
                    </div>

                  </div>


                  <div className="mt-4 rounded-2xl border border-gray-100 p-5">

                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-[#172033]">
                        Próxima atividade
                      </p>

                      <span className="text-xs text-gray-400">
                        Hoje
                      </span>
                    </div>


                    <div className="mt-5 flex items-center gap-4">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#344465]/10">
                        <span className="text-[#344465]">
                          ✓
                        </span>
                      </div>

                      <div>
                        <p className="font-medium text-[#172033]">
                          Caminhada
                        </p>

                        <p className="text-sm text-gray-400">
                          16:00 · 30 minutos
                        </p>
                      </div>

                    </div>

                  </div>

                </div>

              </div>
            </div>

          </div>

        </FadeIn>

      </div>
    </section>
  );
}