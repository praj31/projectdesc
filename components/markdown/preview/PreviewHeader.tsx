import { useStore } from '../../../store'

const PreviewHeader = () => {
  const header = useStore((state) => state.header)
  const githubUser = header.githubUser
  const githubRepo = header.githubRepo
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
      {header.logoURL && (
        <p style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
          <img
            src={header.logoURL}
            alt='Project Logo'
            width={144}
            height={144}
          />
        </p>
      )}
      {/* Title */}
      {header.title && (
        <h1 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
          {header.title}
        </h1>
      )}
      {/* Subtitle */}
      {header.subtitle && (
        <p style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
          {header.subtitle}
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
          {header.liveURL && (
            <>
              <span style={{ marginRight: '0.5rem' }}>•</span>
              <a
                href={`${header.liveURL}`}
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
    </>
  )
}

export default PreviewHeader
