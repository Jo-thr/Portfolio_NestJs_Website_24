const AboutPage = ({
  params: { locale },
}: {
  params: { locale: 'en' | 'fr' }
}) => (
  <div className="flex h-screen w-full items-center justify-center">
    <h1 className="text-4xl font-bold ">About page: {locale}</h1>
  </div>
)

export default AboutPage
