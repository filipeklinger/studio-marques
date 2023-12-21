import { Container } from "components/container"
import capa from '../assets/images/capabigcropped.png'
import trabalho_vid from '../assets/videos/trabalho_vid.mp4'
export function Home() {
    return (
        <>
            <Container>
                <header className="flex flex-col items-center">
                    <img className="w-1/2" src={capa} />
                </header>
                <main className="p-16">
                    <div className="flex justify-evenly">
                        <div>
                            <h1>Tatuagens personalizadas</h1>
                            <p>Designs de tatuagem personalizados, à sua maneira!</p>
                            <p>Tornamos o seu sonho em realidade, criando tatuagens sob medida.
                                Utilizamos apenas os melhores materiais e técnicas para fornecer desenhos realistas de alta qualidade.
                                Nossos profissionais talentosos estão sempre prontos para ajudá-lo a criar a tatuagem perfeita.
                            </p>
                        </div>
                        <div>
                            <div className="bg-white rounded text-black w-60 h-96">
                                <video src={trabalho_vid} />
                            </div>
                        </div>
                    </div>
                </main>
            </Container>
        </>
    )
}