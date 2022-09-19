import * as React from 'react';
import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ImageList, ImageListItem, ImageListItemBar, styled } from '@mui/material';
import { projectsImageList } from '../../../Datas/Datas';
import './Projects.scss';
import Separator from '../../Atoms/Separator/Seperator';
import { Link } from 'react-router-dom';

interface IProjectsProps {
  classname?: string;
}

const Projects: FC<IProjectsProps> = ({ classname }) => {
  function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  return (
    <section className="project" id="projects">
      <ImageList
        cols={3}
        gap={25}
        rowHeight={'auto'}
        className="project__gallery"
        variant="quilted"
      >
        {projectsImageList.map((item, index) => (
          <ImageListItem
            sx={{
              ':hover': {
                '.MuiImageListItemBar-root': {
                  borderBottomLeftRadius: '20px',
                  borderBottomRightRadius: '20px',
                  height: '100%',
                  backgroundColor: 'rgba(255,119,43,0.4)',
                  textAlign: 'center',
                  borderRadius: '20px',
                  '.MuiImageListItemBar-title': {
                    fontSize: '2rem',
                    paddingBottom: '1rem',
                  },
                },
                '.MuiImageListItemBar-title': {
                  fontFamily: "'Faustina', serif",
                  paddingBottom: '0.25rem',
                  fontSize: '1.25rem',
                },
                '.MuiImageListItemBar-subtitle': {
                  fontFamily: "'Faustina', serif",
                  fontSize: '0.90rem',
                },
              },
            }}
            key={uuidv4()}
            cols={item.col || 1}
            rows={item.row || 1}
          >
            <img
              className="project__gallery__img"
              {...srcset(item.img, 100, item.row, item.col)}
              alt={`project ${index}`}
              loading="lazy"
            />
            <Link to={`detail/${item.title}`}>
              <ImageListItemBar
                sx={{
                  borderBottomLeftRadius: '20px',
                  borderBottomRightRadius: '20px',
                }}
                title={item.title}
                subtitle={item.langUsed}
                className="project__gallery__img__title"
              />
            </Link>
          </ImageListItem>
        ))}
      </ImageList>
      <Separator />
    </section>
  );
};

export default Projects;
