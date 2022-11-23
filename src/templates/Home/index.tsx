import { KnowledgeCardApi } from 'api/KnowledgeCardApi';
import { MenuLinkData } from 'api/MenuLinksData';
import { profileData } from 'api/ProfileData';
import { ProjectCardApi } from 'api/ProjectCardApi';
import { Knowledge } from 'components/Knowledge';
import { NavLink } from 'components/NavLink';
import { Profile } from 'components/Profile';
import { Projects } from 'components/Projects';
import { OnOrOffKnowledge } from 'context/OnorOffKnowledge/Context';
const { name, photo, description } = profileData;

function Home() {
  return (
    <OnOrOffKnowledge>
      <NavLink links={MenuLinkData} />
      <Profile name={name} photo={photo} description={description} />
      <Knowledge KnowledgeCardFather={KnowledgeCardApi}></Knowledge>
      <Projects ProjectCardApi={ProjectCardApi}></Projects>
    </OnOrOffKnowledge>
  );
}

export default Home;
