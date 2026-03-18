import Image from 'next/image'

function Home() {
    return (
        <>
            <h1>Ju, cinzin e Luci, eu amo vocês! Se me ama, passa aqui para me dar um beijo rs</h1>
            <Image
              src="/assets/img/cats.jpeg"
              alt="picture of my cats"
              width={600}
              height={400}
            />
            <Image
              src="/assets/img/danju.jpeg"
              alt="us forever"
              width={600}
              height={400}
            />
        </>
    )
}

export default Home;
