import * as React from 'react';
import { personnalInfos, projectsImageList } from '../../../Datas/Datas';
import './ProjectDetail.scss';
import Contacts from '../../Molecules/Contacts/Contacts';
import Footer from '../../Molecules/Footer/Footer';
import DetailHeader from '../../Molecules/DetailHeader/DetailHeader';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import ProjectBar from "../../Molecules/ProjectBar/ProjectBar";

const ProjectDetail = () => {
  const [fill, setFill] = useState<number>(0);
  const { projectName } = useParams();
  const index = projectName && projectsImageList.map((item) => item.title).indexOf(projectName);

  useEffect(() => {
    if (index && index === -1) {
      setFill(index + 1);
    } else index && setFill(index);
  }, [fill]);

  return (
    <>
      <DetailHeader src={projectsImageList[fill].img} title={projectsImageList[fill].title} />
      <main>
          <ProjectBar client={projectsImageList[fill].client} lang={projectsImageList[fill].langUsed} year={projectsImageList[fill].year}/>
        <Contacts fullname={true} email={true} message={true} messageRowCount={10} />
      </main>
      <footer>
        <Footer dataList={personnalInfos} />
      </footer>
    </>
  );
};

export default ProjectDetail;
