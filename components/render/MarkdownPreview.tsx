import { useContext } from 'react'
import { StateContext } from '../../context'

const MarkdownPreview = () => {
  const { state } = useContext(StateContext)
  const { githubUser, githubRepo } = state.header

  return (
    <>
      {/* Header */}
      {/* Shields */}
      {githubRepo && githubUser && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '0.5rem',
            flexWrap: 'wrap',
          }}
        >
          {/* Contributors */}
          <a
            href={`https://github.com/${githubUser}/${githubRepo}/graphs/contributors`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={`https://img.shields.io/github/contributors/${githubUser}/${githubRepo}.svg?style=for-the-badge`}
            />
          </a>
          {/* Forks */}
          <a
            href={`https://github.com/${githubUser}/${githubRepo}/network/members`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={`https://img.shields.io/github/forks/${githubUser}/${githubRepo}.svg?style=for-the-badge`}
            />
          </a>
          {/* Stars */}
          <a
            href={`https://github.com/${githubUser}/${githubRepo}/stargazers`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={`https://img.shields.io/github/stars/${githubUser}/${githubRepo}.svg?style=for-the-badge`}
            />
          </a>
          {/* Issues */}
          <a
            href={`https://github.com/${githubUser}/${githubRepo}/issues`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={`https://img.shields.io/github/issues/${githubUser}/${githubRepo}.svg?style=for-the-badge`}
            />
          </a>
        </div>
      )}
      {/* Logo */}
      {state.header.logoURL && (
        <p style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
          <img
            src={state.header.logoURL}
            alt='Project Logo'
            width={144}
            height={144}
          />
        </p>
      )}
      {/* Title */}
      {state.header.title && (
        <h1 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
          {state.header.title}
        </h1>
      )}
      {/* Subtitle */}
      {state.header.subtitle && (
        <p style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
          {state.header.subtitle}
        </p>
      )}
      {/* Bug and Feature and Live URL*/}
      {githubRepo && githubUser && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '2.5rem',
            flexWrap: 'wrap',
          }}
        >
          <a
            href={`https://github.com/${githubUser}/${githubRepo}/issues`}
            target='_blank'
            rel='noopener noreferrer'
            style={{ marginRight: '0.5rem' }}
          >
            Report Bug
          </a>
          <span style={{ marginRight: '0.5rem' }}>•</span>
          <a
            href={`https://github.com/${githubUser}/${githubRepo}/issues`}
            target='_blank'
            rel='noopener noreferrer'
            style={{ marginRight: '0.5rem' }}
          >
            Request Feature
          </a>
          {state.header.liveURL && (
            <>
              <span style={{ marginRight: '0.5rem' }}>•</span>
              <a
                href={`${state.header.liveURL}`}
                target='_blank'
                rel='noopener noreferrer'
                style={{ marginRight: '0.5rem' }}
              >
                View Live
              </a>
            </>
          )}
        </div>
      )}

      {/* Description */}
      {/* Objective */}
      {state.description.objective && (
        <>
          <h3>Project Objective</h3>
          <p style={{ marginTop: '1rem', marginBottom: '2rem' }}>
            {state.description.objective}
          </p>
        </>
      )}
      {/* Audience */}
      {state.description.scope && (
        <>
          <h3>Project Audience</h3>
          <p style={{ marginTop: '1rem', marginBottom: '2rem' }}>
            {state.description.scope}
          </p>
        </>
      )}
      {/* Challenge */}
      {state.description.challenge && (
        <>
          <h3>Project Challenge(s)</h3>
          <p style={{ marginTop: '1rem', marginBottom: '2rem' }}>
            {state.description.challenge}
          </p>
        </>
      )}
      {/* Features */}
      {state.description.features.length > 0 && state.description.features[0] && (
        <>
          <h3>Project Features</h3>
          <p style={{ marginTop: '1rem', marginBottom: '2rem' }}>
            <ul>
              {state.description.features.map(
                (item, idx) => item && <li key={idx}>{item}</li>
              )}
            </ul>
          </p>
        </>
      )}

      {/* Roles */}
      {state.roles.people.length > 0 && state.roles.people[0] && (
        <>
          <h3>Role(s)</h3>
          <p style={{ marginTop: '1rem', marginBottom: '2rem' }}>
            <ul>
              {state.roles.people.map(
                (item, idx) => item && <li key={idx}>{item}</li>
              )}
            </ul>
          </p>
        </>
      )}

      {/* Built With */}
      {state.builtwith.stack.length > 0 && state.builtwith.stack[0] && (
        <>
          <h3>Built With</h3>
          <p style={{ marginTop: '1rem', marginBottom: '2rem' }}>
            <ul>
              {state.builtwith.stack.map(
                (item, idx) => item && <li key={idx}>{item}</li>
              )}
            </ul>
          </p>
        </>
      )}

      {/* Screenshots */}
      {state.screenshots.images.length > 0 && state.screenshots.images[0] && (
        <>
          <h3>Screenshots</h3>
          <div
            style={{
              marginTop: '1rem',
              marginBottom: '2rem',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {state.screenshots.images.map(
              (item, idx) =>
                item && (
                  <img
                    key={idx}
                    src={item}
                    width='100%'
                    height='auto'
                    style={{ marginBottom: '0.5rem' }}
                  />
                )
            )}
          </div>
        </>
      )}

      {/* Contact */}
      {(state.contact.twitter ||
        state.contact.instagram ||
        state.contact.linkedin ||
        state.contact.email) && (
        <>
          <h3>Contact</h3>
          <div
            style={{
              display: 'flex',
              marginBottom: '2rem',
              flexWrap: 'wrap',
            }}
          >
            {/* Email */}
            {state.contact.email && (
              <>
                <p style={{ marginTop: '1rem', marginRight: '1rem' }}>
                  <a
                    href={`mailto:${state.contact.email}`}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Email
                  </a>
                </p>
              </>
            )}

            {/* Twitter */}
            {state.contact.twitter && (
              <>
                <p style={{ marginTop: '1rem', marginRight: '1rem' }}>
                  <a
                    href={`https://twitter.com/${state.contact.twitter}`}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Twitter
                  </a>
                </p>
              </>
            )}
            {/* Instagram */}
            {state.contact.instagram && (
              <>
                <p style={{ marginTop: '1rem', marginRight: '1rem' }}>
                  <a
                    href={`https://instagram.com/${state.contact.instagram}`}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Instagram
                  </a>
                </p>
              </>
            )}
            {/* LinkedIn */}
            {state.contact.linkedin && (
              <>
                <p style={{ marginTop: '1rem', marginRight: '1rem' }}>
                  <a
                    href={`https://linkedin.com/in/${state.contact.linkedin}`}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    LinkedIn
                  </a>
                </p>
              </>
            )}
          </div>
        </>
      )}
    </>
  )
}

export default MarkdownPreview
