import { Locale } from '../../i18n-config'
import { getDictionary } from '@/hooks/getDictionary'
import HomeSection from '@/components/Section/HomeSection'
import Section from '@/components/Section/Section'
import SkillListing from '@/components/SkillsListing/SkillListing'
import SkillsBlock from '@/components/SkillsBlock/SkillsBlock'
import Works from '@/components/Works/works'

export default async function Home({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dictionary = await getDictionary(locale)
  const data = dictionary.home
  const dataSkills = dictionary.skillPage
  const works = dictionary.worksPage
  return (
    <div>
      <HomeSection />
      <Section
        title={data.aboutSection.about.title}
        subtitle={data.aboutSection.about.subtitle}
        text={data.aboutSection.about.text}
      >
        Tchô !
      </Section>
      <Section
        title={data.projectSection.title}
        subtitle={data.projectSection.subtitle}
      >
        <Works data={works} />
      </Section>
      <Section
        title={data.skillSection.title}
        subtitle={data.skillSection.subtitle}
      >
        <SkillsBlock data={dataSkills} />
      </Section>
    </div>
  )
}
