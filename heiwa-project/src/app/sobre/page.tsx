import VideoEmbed from "@/components/embed-video";

export default function Sobre() {
  return (
    <main>
      <div className="flex flex-col gap-2">
        <div className="pb-4">
          <div className="text-5xl text-primary font-bold pb-2">
            Projeto HEIWA
          </div>
          <div className="text-2xl text-foreground/90">
            <div>Plataforma para Mineração e Visualização</div>
            <div>de Argumentos em discussões em Redes Sociais</div>
          </div>
        </div>
        <div className="text-justify">
          <div className="pb-2">
            O projeto tem como objetivo avançar cientificamente e inovar em
            soluções tecnológicas para ciência de dados para o bem social. O
            projeto pretende gerar soluções computacionais que facilitem o
            entendimento do debate e discussões em redes sociais, estimulando o
            pensamento crítico de seus usuários.
          </div>
          <div>
            A solução pretendida é uma plataforma composta por um conjunto de
            ferramentas computacionais capazes de apoiar um processo de
            curadoria, mineração e visualização do debate em redes sociais para
            usuários de redes sociais, com base em técnicas modernas de
            Mineração de Argumentos.
          </div>
        </div>
        <div className="flex justify-center pb-2 pt-8">
          <VideoEmbed />
        </div>
      </div>
    </main>
  );
}
