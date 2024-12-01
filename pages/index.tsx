import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Auto Vendor</title>
        <meta name="description" content="Luxury automotive solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-100">
        <main className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Auto Vendor
          </h1>
          <p className="text-gray-600">
            Site under construction - Coming soon with luxury automotive solutions
          </p>
        </main>
      </div>
    </>
  )
}