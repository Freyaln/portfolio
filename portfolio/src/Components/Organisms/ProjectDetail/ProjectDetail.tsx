import * as React from 'react';
import { personnalInfos, projectsImageList } from '../../../Datas/Datas';
import './ProjectDetail.scss';
import Footer from '../../Molecules/Footer/Footer';
import DetailHeader from '../../Molecules/DetailHeader/DetailHeader';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import ProjectBar from "../../Molecules/ProjectBar/ProjectBar";
import ProjectAbout from "../../Molecules/ProjectAbout/ProjectAbout";
import ScrollToTop from "../../../Helpers/ScrollToTop";

const ProjectDetail = () => {
  const [fill, setFill] = useState<number>(0);
  const [wip, setWip] = useState<string>('')
  const { projectName } = useParams();
  const index = projectName && projectsImageList.map((item) => item.title).indexOf(projectName);

  useEffect(() => {
    if (index && index === -1) {
      setFill(index + 1);
    } else index && setFill(index);

    if (projectsImageList[fill].finished === true) {
        setWip('Finished')
    } else setWip('Work in Progress')

  }, [fill]);

  ScrollToTop();

  return (
    <>
      <DetailHeader src={projectsImageList[fill].img[0]}
                    title={projectsImageList[fill].title}/>
      <main>
          <ProjectBar
              client={projectsImageList[fill].client}
              lang={projectsImageList[fill].langUsed}
              year={projectsImageList[fill].year}
              collab={projectsImageList[fill].collab}
              collabLink={projectsImageList[fill].collabLink}
              finished={wip}
              link={projectsImageList[fill].link}/>
          <ProjectAbout title={projectsImageList[fill].title + ' ' + 'details'}
                        about={projectsImageList[fill].about}
                        img={projectsImageList[fill].img[0]}
                        flow={projectsImageList[fill].img[1]}
                        design={projectsImageList[fill].img[2]}
                        titleSteps={projectsImageList[fill].steps}
                        description={projectsImageList[fill].description}/>
      </main>
      <footer>
        <Footer dataList={personnalInfos} />
      </footer>
    </>
  );
};

export default ProjectDetail;
