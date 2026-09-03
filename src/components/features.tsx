import Image from "next/image";
import { FadeIn } from "./animations/FadeIn";

export function Features() {
  return (
    <section
      id="recursos"
      className="overflow-hidden bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Cabeçalho */}
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-semibold uppercase tracking-wider text-[#344465]">
              Recursos
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#172033] sm:text-5xl">
              Uma plataforma.
              <span className="block text-[#344465]">
                Todo o cuidado conectado.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#667085]">
              Tudo o que você precisa para acompanhar, organizar e tornar o
              cuidado mais simples, reunido em um único lugar.
            </p>

          </div>
        </FadeIn>

        {/* Área dos recursos */}
        <div className="relative mx-auto mt-20 max-w-6xl">

          {/* Grid principal */}
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_420px_1fr]">

            {/* Lado esquerdo */}
            <div className="space-y-20">

              {/* IA */}
              <FadeIn direction="left">
                <FeatureCard
                  icon="✦"
                  title="Assistente inteligente"
                  description="Uma inteligência artificial para ajudar a organizar informações e tornar o acompanhamento mais simples."
                  align="right"
                />
              </FadeIn>

              {/* Organização */}
              <FadeIn direction="left" delay={0.2}>
                <FeatureCard
                  icon="✓"
                  title="Rotina organizada"
                  description="Tarefas, cuidados e compromissos organizados em um único lugar para facilitar o dia a dia."
                  align="right"
                />
              </FadeIn>

            </div>

            {/* Imagem central */}
            <FadeIn direction="up" delay={0.1}>
              <div className="relative mx-auto w-full max-w-[420px]">

                {/* Fundo decorativo */}
                <div className="absolute inset-0 scale-110 rounded-full bg-[#344465]/5 blur-3xl" />

                <div className="relative">
                  <Image
                    src="/images/app-salus.png"
                    alt="Aplicativo SALUS"
                    width={420}
                    height={700}
                    className="h-auto w-full"
                    priority
                  />
                </div>

              </div>
            </FadeIn>

            {/* Lado direito */}
            <div className="space-y-20">

              {/* Conversas */}
              <FadeIn direction="right">
                <FeatureCard
                  icon="◌"
                  title="Conecte quem importa"
                  description="Converse e compartilhe informações importantes entre familiares e cuidadores."
                  align="left"
                />
              </FadeIn>

              {/* Atividades */}
              <FadeIn direction="right" delay={0.2}>
                <FeatureCard
                  icon="→"
                  title="Atividades e bem-estar"
                  description="Acompanhe atividades e mantenha uma rotina mais ativa, organizada e saudável."
                  align="left"
                />
              </FadeIn>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}


interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  align: "left" | "right";
}


function FeatureCard({
  icon,
  title,
  description,
  align,
}: FeatureCardProps) {

  return (
    <div
      className={
        align === "right"
          ? "text-center lg:text-right"
          : "text-center lg:text-left"
      }
    >

      {/* Ícone */}
      <div
        className={
          align === "right"
            ? "ml-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#344465]/10 text-lg font-bold text-[#344465]"
            : "mr-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#344465]/10 text-lg font-bold text-[#344465]"
        }
      >
        {icon}
      </div>

      {/* Título */}
      <h3 className="mt-5 text-xl font-bold text-[#172033]">
        {title}
      </h3>

      {/* Descrição */}
      <p className="mt-3 max-w-sm text-base leading-7 text-[#667085]">
        {description}
      </p>

    </div>
  );
}