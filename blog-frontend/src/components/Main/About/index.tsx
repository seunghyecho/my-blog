import styled from 'styled-components';
import { FcEngineering, FcPodiumWithSpeaker } from 'react-icons/fc';
import palette from 'lib/styles/palette';

const AboutBlock = styled.div`
  > * {
    margin: 2rem 0;
  }

  strong {
    color: #202124;
  }

  h1 {
    padding: 2rem 0 1rem;
    font-size: 1.5rem;
    font-weight: 600;
    border-bottom: 1px solid ${palette.gray[1]};
  }

  h2 {
    margin: 2rem 0;
    color: ${palette.cyan[7]};
    font-weight: 600;
  }

  blockquote {
    margin: 2rem 0;
    padding: 1rem 1rem 1rem 2rem;
    border-left: 4px solid ${palette.cyan[7]};
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background-color: #f8f9fa;
  }

  div > ul {
    margin: 2rem 0;

    li {
      margin: 1rem 0;
      &:before {
        padding: 0 0.25rem;
        content: '\B7';
      }

      p {
        margin: 1rem 0;
        padding: 0 0.25rem;
        line-height: 1.5rem;
      }
    }
  }

  .alignCenter {
    display: flex;
    align-items: center;

    span {
      display: inline-block;
      margin-left: 4px;
    }
  }
`;

function About() {
  return (
    <AboutBlock>
      <div id="projects">
        <h1>About This</h1>
        <h2>Blog</h2>
        <blockquote>
          <p>
            <strong>(2022.08 ~ current)</strong>
          </p>
        </blockquote>

        <div>
          <div className="alignCenter">
            <FcEngineering />
            <span>기술 스택 & 사용 툴</span>
          </div>
          <ul>
            <li>HTML, CSS, React.js(Next), TypeScript, MongoDB(Compass)</li>
          </ul>
        </div>
        <div>
          <FcPodiumWithSpeaker /> 작업 환경
          <ul>
            <li>macOS 15.2, Node.js v22.12.0, Npm 10.9.0, VS Code</li>
          </ul>
        </div>
      </div>

      <div id="frontendEngineer">
        <h1>Work Experience</h1>
        <div>
          <div className="inc">
            <h2>Geosoft Inc</h2>
            <blockquote>
              <p>
                <strong>Frontend Engineer(2024.05 ~ current)</strong>
              </p>
            </blockquote>

            <div>
              <div className="alignCenter">
                <FcEngineering />
                <span>기술 스택 & 사용 툴</span>
              </div>
              <ul>
                <li>HTML, CSS, TypeScript, React.js, Graphql</li>
                <li>GitHub, Slack, Confluence, Jira</li>
              </ul>
            </div>

            <div>
              <FcPodiumWithSpeaker /> 작업 환경
              <ul>
                <li>window, Node.js, VS Code</li>
              </ul>
            </div>
          </div>

          <div className="inc">
            <h2>Dorosee Inc</h2>
            <blockquote>
              <p>
                <strong>Frontend Engineer(2023.07 ~ 2024.05)</strong>
              </p>
            </blockquote>

            <div>
              <div className="alignCenter">
                <FcEngineering />
                <span>기술 스택 & 사용 툴</span>
              </div>
              <ul>
                <li>HTML, CSS, TypeScript, React.js, Postman</li>
                <li>GitHub, Discode, Confluence, Jira</li>
              </ul>
            </div>

            <div>
              <FcPodiumWithSpeaker /> 작업 환경
              <ul>
                <li>window, Node.js, VS Code</li>
              </ul>
            </div>
          </div>

          <div className="inc">
            <h2>FLES Inc</h2>
            <blockquote>
              <p>
                <strong>Web Publisher(2021.02 ~ 2022.02)</strong>
              </p>
              <br />
              <p>
                <strong>Frontend Engineer(2022.02 ~ 2023.05)</strong>
              </p>
            </blockquote>

            <div>
              <div className="alignCenter">
                <FcEngineering />
                <span>기술 스택 & 사용 툴</span>
              </div>
              <ul>
                <li>HTML, CSS, TypeScript, React.js(Next), React Query, MUI</li>
                <li>Storybook, GitHub, Slack, Confluence, Jira</li>
              </ul>
            </div>

            <div>
              <FcPodiumWithSpeaker /> 작업 환경
              <ul>
                <li>macOSs, Node.js, WebStorm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AboutBlock>
  );
}

export default About;
