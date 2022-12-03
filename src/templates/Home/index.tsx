import { KnowledgeCardApi } from 'config/KnowledgeCardApi';
import { MenuLinkData } from 'config/MenuLinksData';
import { profileData } from 'config/ProfileData';
import { ProjectCardApi } from 'config/ProjectCardApi';
import { Knowledge } from 'components/Knowledge';
import { NavLink } from 'components/NavLink';
import { Profile } from 'components/Profile';
import { Projects } from 'components/Projects';
import { OnOrOffKnowledge } from 'context/OnorOffKnowledge/Context';
import { CrudExample } from 'components/CrudExample';
import { LoginOrScheduleContext } from 'context/isLoginOrIsSquedule/Context';
import { Footer } from 'components/Footer';
const { name, photo, description, socialMedia } = profileData;

function Home() {
  return (
    <OnOrOffKnowledge>
      <NavLink links={MenuLinkData} />
      <Profile
        name={name}
        photo={photo}
        description={description}
        socialMedia={socialMedia}
      />
      <Knowledge KnowledgeCardFather={KnowledgeCardApi}></Knowledge>
      <Projects ProjectCardApi={ProjectCardApi}></Projects>
      <LoginOrScheduleContext>
        <CrudExample />
      </LoginOrScheduleContext>
      <Footer title="Luis Paulo Martins" />
    </OnOrOffKnowledge>
  );
}

export default Home;
