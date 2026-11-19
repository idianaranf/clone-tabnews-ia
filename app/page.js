import ConfettiEffect from "./confetti-effect";
import { Suspense } from "react";

async function getTotalContents() {
  try {
    const response = await fetch(
      "https://www.tabnews.com.br/api/v1/contents?per_page=1",
      { next: { revalidate: 3600 } },
    );

    if (!response.ok) return null;

    const total = response.headers.get("x-pagination-total-rows");
    return total && Number.isFinite(Number(total)) ? Number(total) : null;
  } catch {
    return null;
  }
}

async function ContentCount() {
  const totalContents = await getTotalContents();

  return totalContents === null ? (
    "Não foi possível carregar o total de conteúdos agora."
  ) : (
    <>
      <strong>{totalContents.toLocaleString("pt-BR")}</strong> conteúdos
      publicados no TabNews
    </>
  );
}

export default function Home() {
  return (
    <main className="announcement">
      <ConfettiEffect />
      <div className="announcement__content">
        <p className="announcement__eyebrow">TabNews</p>
        <h1>Em Construção</h1>
        <p className="announcement__message">
          Estamos neste exato momento reconstruindo o TabNews, um lugar na
          internet para quem trabalha com tecnologia e precisa consumir conteúdos
          com valor concreto
        </p>
        <p className="announcement__count" aria-live="polite">
          <Suspense fallback="Carregando total de conteúdos…">
            <ContentCount />
          </Suspense>
        </p>
        <a
          className="announcement__link"
          href="https://www.tabnews.com.br/"
          rel="noreferrer"
          target="_blank"
        >
          Acesse o site oficial <span aria-hidden="true">↗</span>
        </a>
      </div>
    </main>
  );
}
