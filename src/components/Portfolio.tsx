import { useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';
import type {
  Language,
  Project,
  ProjectCategory,
  Translation
} from '@data/translations';
import { translations } from '@data/translations';
import { siteConfig } from '@data/site';

const birthDate = new Date(siteConfig.birthDate);
const socialLinks = [...siteConfig.socials];
const contactLinks = [...siteConfig.socials];
const contactEmail = siteConfig.email;
const ownerName = siteConfig.name;

const spotifyEmbedUrl = import.meta.env.PUBLIC_SPOTIFY_EMBED_URL;

const getAge = () => {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age -= 1;
  }

  return age;
};

const filters: Record<'all' | ProjectCategory, (t: Translation) => string> = {
  all: (t) => t.projects.filterAll,
  academic: (t) => t.projects.filterAcademic,
  personal: (t) => t.projects.filterPersonal
};

const storageKey = 'thomas-portfolio-language';

const Portfolio = () => {
  const [language, setLanguage] = useState<Language>('fr');
  const [projectFilter, setProjectFilter] = useState<'all' | ProjectCategory>('all');
  const [age, setAge] = useState<number>(getAge());

  const t = translations[language];

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey) as Language | null;
    if (saved === 'fr' || saved === 'en') {
      setLanguage(saved);
      return;
    }

    const browserLang = navigator.language.toLowerCase();
    setLanguage(browserLang.startsWith('fr') ? 'fr' : 'en');
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setAge(getAge());
    }, 1000 * 60 * 60 * 24);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(storageKey, language);
    document.documentElement.lang = language;
    document.title = t.meta.title;

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', t.meta.description);
    }
  }, [language, t.meta.description, t.meta.title]);

  const filteredProjects = useMemo(() => {
    if (projectFilter === 'all') return t.projects.items;
    return t.projects.items.filter((project: Project) => project.category === projectFilter);
  }, [projectFilter, t.projects.items]);

  const handleLanguageToggle = (lang: Language) => () => {
    setLanguage(lang);
  };

  const profileImage = siteConfig.profileImage || '/profile-placeholder.svg';

  return (
    <div className="page">
      <header className="hero" id="top">
        <nav className="nav">
          <a className="logo" href="#top" aria-label="Thomas Chevalier">
            <span>TC</span>
          </a>
          <div className="nav-links">
            <a href="#about">{t.nav.about}</a>
            <a href="#experience">{t.nav.experience}</a>
            <a href="#projects">{t.nav.projects}</a>
            <a href="#contact">{t.nav.contact}</a>
          </div>
          <div className="nav-actions">
            <div className="lang-toggle" role="radiogroup" aria-label="Language selector">
              {(['fr', 'en'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  role="radio"
                  aria-checked={language === lang}
                  className={clsx('lang-button', { active: language === lang })}
                  onClick={handleLanguageToggle(lang)}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
            <a className="cta" href="#contact">
              {t.hero.callToAction}
            </a>
          </div>
        </nav>
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">{t.hero.greeting}</p>
            <h1 className="hero-title">{t.hero.title}</h1>
            <p className="hero-subtitle">{t.hero.subtitle}</p>
            <div className="hero-meta">
              <a className="hero-link" href={`mailto:${contactEmail}`}>
                {contactEmail}
              </a>
              <div className="hero-socials">
                {socialLinks.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="hero-portrait">
            <div className="portrait-frame">
              <img src={profileImage} alt={`Portrait of ${siteConfig.name}`} loading="lazy" />
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="card">
          <div className="card-header">
            <h2>{t.about.title}</h2>
          </div>
          <div className="card-body about-grid">
            <p className="about-intro">{t.about.intro}</p>
            <div className="about-details">
              <dl>
                <div>
                  <dt>{t.about.birthDateLabel}</dt>
                  <dd>
                    {age} {language === 'fr' ? 'ans' : 'years old'}
                  </dd>
                </div>
                <div>
                  <dt>{t.about.emailLabel}</dt>
                  <dd>
                    <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                  </dd>
                </div>
                <div>
                  <dt>{t.about.locationLabel}</dt>
                  <dd>{t.about.locationValue}</dd>
                </div>
                <div>
                  <dt>{t.about.socialsLabel}</dt>
                  <dd className="about-socials">
                    {socialLinks.map((link) => (
                      <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.label}
                      </a>
                    ))}
                  </dd>
                </div>
              </dl>
              <a className="resume-button" href="#contact">
                {t.about.downloadResume}
              </a>
            </div>
          </div>
        </section>

        <section id="experience" className="card">
          <div className="card-header">
            <h2>{t.experience.title}</h2>
          </div>
          <ol className="timeline">
            {t.experience.items.map((experience) => (
              <li key={`${experience.title}-${experience.company}`} className="timeline-item">
                <div className="timeline-marker" aria-hidden="true" />
                <div className="timeline-content">
                  <div className="timeline-header">
                    <div>
                      <h3>{experience.title}</h3>
                      <p className="timeline-company">
                        {experience.company} · {experience.location}
                      </p>
                    </div>
                    <span className="timeline-period">{experience.period}</span>
                  </div>
                  <ul className="timeline-description">
                    {experience.description.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                  <div className="skill-chips">
                    {experience.skills.map((skill) => (
                      <span key={skill} className="chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="card" id="education">
          <div className="card-header">
            <h2>{t.education.title}</h2>
          </div>
          <div className="education-grid">
            {t.education.items.map((item) => (
              <article key={item.title} className="education-item">
                <h3>{item.title}</h3>
                <p className="education-school">{item.school}</p>
                <span className="education-period">{item.period}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="card">
          <div className="card-header projects-header">
            <h2>{t.projects.title}</h2>
            <div className="filters" role="tablist" aria-label="Project filters">
              {(Object.keys(filters) as Array<'all' | ProjectCategory>).map((key) => (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={projectFilter === key}
                  className={clsx('filter-button', { active: projectFilter === key })}
                  onClick={() => setProjectFilter(key)}
                >
                  {filters[key](t)}
                </button>
              ))}
            </div>
          </div>
          <div className="project-grid">
            {filteredProjects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-card-header">
                  <h3>{project.title}</h3>
                  <span className="project-category">{filters[project.category](t)}</span>
                </div>
                <p className="project-subtitle">{project.subtitle}</p>
                <ul>
                  {project.description.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <div className="skill-chips">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {spotifyEmbedUrl && (
          <section className="card" id="spotify">
            <div className="card-header">
              <h2>Spotify</h2>
            </div>
            <div className="spotify-widget">
              <iframe
                title="Spotify player"
                src={`${spotifyEmbedUrl}?utm_source=generator`}
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </section>
        )}

        <section className="card" id="skills">
          <div className="card-header">
            <h2>{t.languages.title}</h2>
          </div>
          <ul className="languages-list">
            {t.languages.items.map((languageItem) => (
              <li key={languageItem.label}>
                <span>{languageItem.label}</span>
                <span className="language-level">{languageItem.level}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="card" id="interests">
          <div className="card-header">
            <h2>{t.interests.title}</h2>
          </div>
          <ul className="interest-tags">
            {t.interests.items.map((item) => (
              <li key={item} className="chip">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div className="footer-card">
          <h2>{t.contact.title}</h2>
          <p>{t.contact.subtitle}</p>
          <div className="footer-actions">
            <a className="cta" href={`mailto:${contactEmail}`}>
              {t.contact.emailLabel}
            </a>
            <div className="footer-socials" aria-label={t.contact.socialLabel}>
              {contactLinks.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className="footer-meta">© {new Date().getFullYear()} {ownerName}</p>
      </footer>
    </div>
  );
};

export default Portfolio;
