import Image from 'next/image'

function Home() {
    return (
        <>
            <h1>Ju, cinzin e Luci, eu amo vocês! Se me ama, passa aqui para me dar um beijo rs</h1>
            <Image
              src="/assets/img/cats.jpeg"
              alt="picture of my cats"
              width={300}
              height={500}
            />
        </>
    )
}

export default Home;
