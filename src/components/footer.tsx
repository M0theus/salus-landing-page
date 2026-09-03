import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#172033] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Marca */}
          <div className="max-w-sm">
            <Image
              src="/images/logo.png"
              alt="SALUS"
              width={140}
              height={50}
              className="brightness-0 invert"
            />

            <p className="mt-6 leading-7 text-gray-400">
              Cuidado mais inteligente.
              <br />
              Pessoas mais seguras.
            </p>
          </div>

          {/* Produto */}
          <div>
            <h3 className="font-semibold text-white">
              Produto
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#solucao"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  Solução
                </a>
              </li>

              <li>
                <a
                  href="#recursos"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  Recursos
                </a>
              </li>

              <li>
                <a
                  href="#como-funciona"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  Como funciona
                </a>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-semibold text-white">
              Empresa
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#time"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  Nosso time
                </a>
              </li>

              <li>
                <a
                  href="#sobre"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  Sobre nós
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white">
              Legal
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="/privacidade"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  Política de Privacidade
                </a>
              </li>

              <li>
                <a
                  href="/termos"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Linha */}
        <div className="mt-16 border-t border-white/10 pt-8">

          <p className="text-sm text-gray-500">
            © 2026 SALUS. Todos os direitos reservados.
          </p>

        </div>

      </div>
    </footer>
  );
}