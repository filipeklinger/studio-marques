import { Container } from "components/container"
import capa from '../assets/images/capabigcropped.png'
import trabalho_vid from '../assets/videos/trabalho_vid.mp4'
import tatoo1 from '../assets/images/tatoo1.jpg'
import tatoo2 from '../assets/images/tatoo2.jpg'
import tatoo3 from '../assets/images/tatoo3.jpg'
import img1 from '../assets/images/img1.png';
import videoPoster from '../assets/images/poster.jpeg';
import { PhotoCard } from "components/PhotoCard"
import { Section } from "components/Section"
import { openWhatsapp } from "utils/contactUtils"

export function Home() {
    function handleClick(msg: string) {
        const m = "Olá, gostaria de fazer um orçamento para uma tatuagem " + msg;
        openWhatsapp(m);
    }
    return (
        <>
            <Container>
                <header className="flex flex-col items-center">
                    <img className="md:w-1/2" src={capa} />
                </header>
                <main>

                    <Section title="Tatuagens personalizadas" >
                        <div className="p-10 flex flex-col md:flex-row justify-center md:justify-evenly items-center">
                            <div className="pb-8 md:w-1/2 ">
                                <p className="md:text-3xl">Designs de tatuagem personalizados, à sua maneira!</p>
                                <p className="md:text-3xl">Tornamos o seu sonho em realidade, criando tatuagens sob medida.
                                    Utilizamos apenas os melhores materiais e técnicas para fornecer desenhos realistas de alta qualidade.
                                    Nossos profissionais talentosos estão sempre prontos para ajudá-lo a criar a tatuagem perfeita.
                                </p>
                            </div>
                            <div>
                                <div className="bg-white rounded-lg text-black w-full px-2 py-2">
                                    <video controls autoPlay loop muted poster={videoPoster}>
                                        <source src={trabalho_vid} type="video/mp4" />
                                    </video>

                                </div>
                            </div>
                        </div>

                    </Section>

                    <Section variant="white" title="Nossos serviços">
                        <div className="flex flex-col md:flex-row justify-center md:gap-5">
                            <PhotoCard src={tatoo1} onClick={() => handleClick("Minimalista")}>
                                <div className="cursor-pointer">
                                    <p className="capitalize">MINIMALISTA</p>
                                    <h1 className="text-4xl font-serif pb-8">Simples</h1>
                                    <p>R$100</p>
                                </div>

                            </PhotoCard>
                            <PhotoCard src={tatoo2} onClick={() => handleClick("média")}>
                                <p className="capitalize">Braço</p>
                                <h1 className="text-4xl font-serif pb-8">Preenchido</h1>
                                <p>R$500</p>
                            </PhotoCard>
                            <PhotoCard src={tatoo3} onClick={() => handleClick("grande")} >
                                <p className="capitalize">Grande</p>
                                <h1 className="text-4xl font-serif pb-8">Total</h1>
                                <p>R$600</p>
                            </PhotoCard>
                        </div>
                    </Section>

                    <Section title="">
                        <div className="flex flex-col-reverse md:flex-row mb-10 justify-between items-center ">
                            <div>
                                <img className="w-full h-full object-cover md:aspect-[16/11]" src={img1} />
                            </div>
                            <div className="md:w-1/3 text-center text-3xl md:text-4xl pb-10">
                                <p>Studio completo</p>
                                <p>Com hora marcada</p>
                            </div>
                        </div>
                    </Section>

                    <Section fontSize="text-3xl md:text-4xl" variant="white" title="Agendamento">
                        <div className="flex flex-col">
                            <p className="text-center">Agende sua tatuagem pelo whatsapp</p>
                            <div className="flex justify-center">
                                <button
                                    onClick={() => openWhatsapp("Olá, gostaria de fazer uma tatuagem")}
                                    className="bg-yellow-400 hover:bg-yellow-600 text-xl text-white rounded-full px-24 py-4 mt-10"
                                >
                                    Agendar
                                </button>
                            </div>
                            {/* <p className="text-center">ou</p>
                            <p className="text-center">Venha nos visitar</p> */}

                        </div>
                    </Section>
                </main>
            </Container>
            <footer className="bg-black text-white text-center py-10">
                <p>© {new Date().getFullYear()} - Todos os direitos reservados</p>
                <p>
                    <a 
                    href="https://www.instagram.com/marquestattoo.ink?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA=="
                    className="hover:underline"
                    >
                        @marquestattoo.ink
                    </a>
                    </p>
            </footer>
        </>
    )
}