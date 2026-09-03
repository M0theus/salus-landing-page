import Image from "next/image";
import { FadeIn } from "./animations/FadeIn";

export function Solution() {
  return (
    <section
      id="solucao"
      className="bg-[#F7F8FA] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Cabeçalho da seção */}
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-semibold uppercase tracking-wider text-[#344465]">
              A solução
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#172033] sm:text-5xl">
              Tudo o que importa sobre o cuidado,
              <span className="block text-[#344465]">
                em um só lugar.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#667085]">
              SALUS conecta família, cuidadores e idosos em uma única
              plataforma para tornar a rotina mais organizada, segura e simples.
            </p>

          </div>
        </FadeIn>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {/* Família */}
          <FadeIn delay={0.1} direction="left">
            <article className="group overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/conversa.jpg"
                  alt="Família acompanhando o cuidado"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-8">

                <span className="text-sm font-semibold text-[#344465]">
                  PARA A FAMÍLIA
                </span>

                <h3 className="mt-3 text-2xl font-bold text-[#172033]">
                  Mais perto, mesmo à distância.
                </h3>

                <p className="mt-4 leading-7 text-[#667085]">
                  Acompanhe a rotina, os cuidados e as informações importantes
                  de quem você ama, mesmo quando não puder estar presente.
                </p>

              </div>

            </article>
          </FadeIn>

          {/* Cuidador */}
          <FadeIn delay={0.2}>
            <article className="group overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/cuidador.jpg"
                  alt="Cuidador organizando a rotina"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-8">

                <span className="text-sm font-semibold text-[#344465]">
                  PARA O CUIDADOR
                </span>

                <h3 className="mt-3 text-2xl font-bold text-[#172033]">
                  Uma rotina mais organizada.
                </h3>

                <p className="mt-4 leading-7 text-[#667085]">
                  Organize tarefas, acompanhe atividades e registre os cuidados
                  realizados de forma simples e centralizada.
                </p>

              </div>

            </article>
          </FadeIn>

          {/* Idoso */}
          <FadeIn delay={0.3} direction="right">
            <article className="group overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/livro.jpg"
                  alt="Idoso realizando suas atividades"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-8">

                <span className="text-sm font-semibold text-[#344465]">
                  PARA O IDOSO
                </span>

                <h3 className="mt-3 text-2xl font-bold text-[#172033]">
                  Mais autonomia e segurança.
                </h3>

                <p className="mt-4 leading-7 text-[#667085]">
                  Uma rotina mais organizada e conectada, permitindo mais
                  segurança sem perder a independência.
                </p>

              </div>

            </article>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}