import Image from "next/image";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="SALUS"
            width={140}
            height={50}
            priority
          />
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">

          <a
            href="#solucao"
            className="text-sm font-medium text-gray-600 transition hover:text-[#344465]"
          >
            Solução
          </a>

          <a
            href="#como-funciona"
            className="text-sm font-medium text-gray-600 transition hover:text-[#344465]"
          >
            Como funciona
          </a>

          <a
            href="#recursos"
            className="text-sm font-medium text-gray-600 transition hover:text-[#344465]"
          >
            Recursos
          </a>

          <a
            href="#seguranca"
            className="text-sm font-medium text-gray-600 transition hover:text-[#344465]"
          >
            Time
          </a>

        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">

          <a
            href="https://salus-mvp.vercel.app/"
            className="hidden text-sm font-semibold text-[#344465] sm:block"
          >
            Entrar
          </a>

          <a
            href="https://salus-mvp.vercel.app/"
            className="rounded-lg bg-[#344465] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#293752]"
          >
            Começar agora
          </a>

        </div>

      </div>
    </header>
  );
}