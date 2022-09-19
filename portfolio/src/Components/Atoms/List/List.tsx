import {FC} from 'react';
import {InfosDatas, SkillDetail} from "../../../Datas/Datas";
import Typo, {TextType} from "../Typo/Typo";
import {v4 as uuidv4} from 'uuid';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export interface IListProps {
    optionsSkills?: SkillDetail[];
    optionsInfos?: InfosDatas[];
    classname : string;
    children?: JSX.Element|JSX.Element[];
}

const List: FC<IListProps> = ({ optionsSkills, optionsInfos, classname, children}) => {
    return (
        <>
            <ol className={classname} >
                { optionsSkills &&
                  optionsSkills.map((items) => (
                      items.Skills.map((elem) =>
                          <>
                              <div className='__list__flex' >
                                  <Typo type={ TextType.H3 } key={ uuidv4()} className='__list__title'>
                                      { elem.Languages.title }
                                  </Typo>
                                  { elem.Languages.list.map((listItem) =>
                                      <li key={ uuidv4() }>
                                          {listItem}
                                      </li>
                                  )}
                              </div>
                              <div className='__list__flex'>
                                  <Typo type={ TextType.H3 } key={ uuidv4()}  className='__list__title'>
                                      { elem.Frameworks.title }
                                  </Typo>
                                  { elem.Frameworks.list.map((listItem) =>
                                      <li key={ uuidv4() }>
                                          {listItem}
                                      </li>
                                  )}
                              </div>
                              <div className='__list__flex'>
                                  <Typo type={ TextType.H3 } key={ uuidv4()}  className='__list__title'>
                                      { elem.Libraries.title }
                                  </Typo>
                                  { elem.Libraries.list.map((listItem) =>
                                  <li key={ uuidv4() }>
                                      {listItem}
                                  </li>
                                  )}
                              </div>
                          </>
                      ))
                  ) }
                { optionsInfos &&
                  optionsInfos.map((items) => (
                      items.Infos.map((elem) =>
                          <>
                              <div className='__list__flex' >
                                  <Typo type={ TextType.H3 } key={ uuidv4()}  className='__list__title'>
                                      Contacts
                                  </Typo>
                                  { elem.Contact.map((i) =>
                                       <li key={ uuidv4() }>
                                           <FontAwesomeIcon icon={i.icon}/>
                                           <Typo type={TextType.TEXT}>{i.text}</Typo>
                                       </li>
                                  )}
                              </div>
                              <div className='__list__flex' >
                                  <Typo type={ TextType.H3 } key={ uuidv4()}  className='__list__title'>
                                      Socials
                                  </Typo>
                                  { elem.Socials.map((i) =>
                                      <li key={ uuidv4() }>
                                          <FontAwesomeIcon icon={i.icon}/>
                                          <Typo type={TextType.TEXT}>{i.text}</Typo>
                                      </li>
                                  )}
                              </div>
                          </>
                      ))
                  ) }
            </ol>
        </>
    );
};

export default List;