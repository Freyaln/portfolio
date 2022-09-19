import * as React from 'react';
import { FC } from 'react';
import { DataType, InfosDatas, SkillDetail } from '../../../Datas/Datas';
import Typo, { TextType } from '../Typo/Typo';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface IListProps {
  optionsSkills?: SkillDetail[];
  optionsInfos?: InfosDatas[];
  classname: string;
  children?: JSX.Element | JSX.Element[];
  type?: DataType;
}

const List: FC<IListProps> = ({ optionsSkills, optionsInfos, classname, children, type }) => {
  return (
    <>
      <ol className={classname}>
        {optionsSkills &&
          optionsSkills.map((items) =>
            items.Skills.map((elem) => (
              <>
                <div className="__list__flex">
                  <Typo type={TextType.H3} key={uuidv4()} className="__list__title">
                    {elem.Languages.title}
                  </Typo>
                  {elem.Languages.list.map((listItem) => (
                    <li key={uuidv4()}>{listItem}</li>
                  ))}
                </div>
                <div className="__list__flex">
                  <Typo type={TextType.H3} key={uuidv4()} className="__list__title">
                    {elem.Frameworks.title}
                  </Typo>
                  {elem.Frameworks.list.map((listItem) => (
                    <li key={uuidv4()}>{listItem}</li>
                  ))}
                </div>
                <div className="__list__flex">
                  <Typo type={TextType.H3} key={uuidv4()} className="__list__title">
                    {elem.Libraries.title}
                  </Typo>
                  {elem.Libraries.list.map((listItem) => (
                    <li key={uuidv4()}>{listItem}</li>
                  ))}
                </div>
              </>
            ))
          )}
        {optionsInfos &&
          optionsInfos.map((items) =>
            items.Infos.map((elem) => (
              <>
                <div className="__list__flex">
                  {elem.Contact.map((i) => (
                    <li key={uuidv4()}>
                      {i.type === DataType.EMAIL ? (
                        <>
                          <FontAwesomeIcon icon={i.icon} className="__list__icon" />
                          <a href={`mail:to${i.link}`}>
                            <Typo type={TextType.TEXT}>{i.text}</Typo>
                          </a>
                        </>
                      ) : i.type === DataType.PHONE ? (
                        <>
                          <FontAwesomeIcon icon={i.icon} className="__list__icon" />
                          <a href={`tel:${i.link}`}>
                            <Typo type={TextType.TEXT}>{i.text}</Typo>
                          </a>
                        </>
                      ) : i.type === DataType.LOCATION ? (
                        <>
                          <FontAwesomeIcon icon={i.icon} className="__list__icon" />
                          <a href={i.link}>
                            <Typo type={TextType.TEXT}>{i.text}</Typo>
                          </a>
                        </>
                      ) : (
                        '404 not found.'
                      )}
                    </li>
                  ))}
                </div>
                <div className="__list__flex">
                  {elem.Socials.map((i) => (
                    <li key={uuidv4()}>
                      <FontAwesomeIcon icon={i.icon} className="__list__icon" />
                      <a href={i.link}>
                        <Typo type={TextType.TEXT}>{i.text}</Typo>
                      </a>
                    </li>
                  ))}
                </div>
              </>
            ))
          )}
      </ol>
    </>
  );
};

export default List;
