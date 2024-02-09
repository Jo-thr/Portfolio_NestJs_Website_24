import HomeSection from '@/components/Section/HomeSection'
import Section from '@/components/Section/Section'
import SkillsBlock from '@/components/SkillsBlock/SkillsBlock'
import WorksSlider from '@/components/Works/worksSlider'
import { getDictionary } from '@/hooks/getDictionary'
import { Locale } from '../../i18n-config'

export default async function Home({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dictionary = await getDictionary(locale)
  const data = dictionary.home
  const dataHeroBanner = data.heroBanner
  const dataSkills = data.skillSection
  const projects = dictionary.projects
  return (
    <div>
      <HomeSection data={dataHeroBanner} />
      <Section
        id={'aboutSection'}
        title={data.aboutSection.title}
        subtitle={data.aboutSection.subtitle}
        text={data.aboutSection.text}
      >
        <span className="text-[#000000]">Tchô !</span>
      </Section>
      <Section
        id={'projectSection'}
        title={data.projectSection.title}
        subtitle={data.projectSection.subtitle}
      >
        <WorksSlider projects={projects} content={dictionary.extraContent} />
      </Section>
      <Section
        id={'skillSection'}
        title={data.skillSection.title}
        subtitle={data.skillSection.subtitle}
      >
        <SkillsBlock data={dataSkills} />
      </Section>
    </div>
  )
}
