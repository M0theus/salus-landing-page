import Image from "next/image";

const team = [
  {
    name: "Ryan (Barata)",
    role: "CEO",
    education: "Contabilidade — Harvard",
    description:
      "Responsável pela estratégia financeira e pela organização administrativa e burocrática da empresa.",
    image: "/images/Ryan.jpg",
  },
  {
    name: "Gerhard Wirtz",
    role: "CTO",
    education: "Engenharia de Software — MIT",
    description:
      "Responsável pela liderança tecnológica, organização do desenvolvimento e estruturação do time.",
    image: "/images/Gerhard.jpg",
  },
  {
    name: "Caio (Duzao)",
    role: "COO",
    education: "Análise e Desenvolvimento de Sistemas — MIT",
    description:
      "Atua na operação da empresa, desenvolvimento de soluções e comunicação entre as diferentes áreas.",
    image: "/images/Caio.jpg",
  },
  {
    name: "Matheus Goat",
    role: "Engineering Manager",
    education: "Ciência da Computação — Harvard",
    description:
      "Lidera o time de desenvolvimento de software e ajuda a transformar a estratégia do produto em tecnologia.",
    image: "/images/Matheus.jpg",
  },
  {
    name: "Patrick Lima Correa",
    role: "CPO",
    education: "Administração — Oxford",
    description:
      "Responsável pela experiência das pessoas, cultura do time, harmonia da equipe e processos de contratação.",
    image: "/images/Patrick.jpg",
  },
];

export function Team() {
  return (
    <section
      id="time"
      className="bg-[#F7F8FA] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Cabeçalho */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-wider text-[#344465]">
            Nosso time
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#172033] sm:text-5xl">
            Pessoas diferentes.
            <span className="block text-[#344465]">
              Um mesmo propósito.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#667085]">
            Somos um time multidisciplinar unido pelo propósito de tornar o
            cuidado mais simples, conectado e inteligente.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

          {team.map((member) => (
            <article
              key={member.role}
              className="group overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Foto */}
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Conteúdo */}
              <div className="p-6">

                <span className="text-xs font-semibold uppercase tracking-wider text-[#344465]">
                  {member.role}
                </span>

                <h3 className="mt-2 text-xl font-bold text-[#172033]">
                  {member.name}
                </h3>

                <p className="mt-3 text-sm font-medium leading-6 text-[#344465]">
                  {member.education}
                </p>

                <p className="mt-4 text-sm leading-6 text-[#667085]">
                  {member.description}
                </p>

              </div>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}