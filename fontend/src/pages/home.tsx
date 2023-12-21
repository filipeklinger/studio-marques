import { Container } from "components/container"
import capa from '../assets/images/capabigcropped.png'
import trabalho_vid from '../assets/videos/trabalho_vid.mp4'
import tatoo1 from '../assets/images/tatoo1.jpg'
import tatoo2 from '../assets/images/tatoo2.jpg'
import tatoo3 from '../assets/images/tatoo3.jpg'
import img2 from '../assets/images/img2.jpg';
import { PhotoCard } from "components/PhotoCard"
import { Section } from "components/Section"

export function Home() {
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
                                <div className="bg-white rounded text-black w-full aspect-[9/16]">
                                    <video src={trabalho_vid} />
                                </div>
                            </div>
                        </div>

                    </Section>

                    <Section variant="white" title="Nossos serviços">
                        <div className="flex flex-col justify-center md:gap-5">
                            <PhotoCard src={tatoo1}>
                                <p className="capitalize">MINIMALISTA</p>
                                <h1 className="text-4xl font-serif pb-8">Simples</h1>
                                <p>R$100</p>
                            </PhotoCard>
                            <PhotoCard src={tatoo2} >
                                <p className="capitalize">Braço</p>
                                <h1 className="text-4xl font-serif pb-8">Preenchido</h1>
                                <p>R$350</p>
                            </PhotoCard>
                            <PhotoCard src={tatoo3} >
                                <p className="capitalize">Grande</p>
                                <h1 className="text-4xl font-serif pb-8">Total</h1>
                                <p>R$100</p>
                            </PhotoCard>
                        </div>
                    </Section>

                    <Section title="">
                        <div className="flex flex-col-reverse md:flex-row mb-10">
                            <div>
                                <img className="w-full h-full object-cover" src={img2} />
                            </div>
                            <div className="text-3xl md:text-4xl pb-5">
                                <p >Studio completo</p>
                                <p>Com hora marcada</p>
                            </div>
                        </div>
                    </Section>

                    <Section fontSize="text-3xl md:text-4xl" title="Depoimento de clientes">
                        <div className="flex flex-col">
                            
                        </div>
                    </Section>
                </main>
            </Container>
        </>
    )
}