import { KnowledgeCardApi } from 'api/KnowledgeCardApi';
import { MenuLinkData } from 'api/MenuLinksData';
import { profileData } from 'api/ProfileData';
import { Knowledge } from 'components/Knowledge';
import { NavLink } from 'components/NavLink';
import { Profile } from 'components/Profile';
const { name, photo, description } = profileData;

function Home() {
  return (
    <>
      <NavLink links={MenuLinkData} />
      <Profile name={name} photo={photo} description={description} />
      <Knowledge KnowledgeCardFather={KnowledgeCardApi}></Knowledge>
    </>
  );
}

export default Home;
