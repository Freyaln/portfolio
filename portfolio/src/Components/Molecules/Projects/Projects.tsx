import * as React from 'react';
import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import { projectsImageList } from '../../../Datas/Datas';
import './Projects.scss';
import Separator from '../../Atoms/Separator/Seperator';
import { Link } from 'react-router-dom';
import { useDetectMobile } from '../../../Helpers/CheckRes';

const Projects: FC = () => {
    /** @function srcset
     * @description function used to calculate the size of the imageList used in the Homagepage / Project section. This is calculate by 4 inputs sets in the ProjectImageList interface.
     * Set the image then multiply the size by the col then the size by the row
     * @param image link to the image
     * @param size the size of the image
     * @param rows the row state of the image
     * @param cols the column state of the image
     */
    function srcset(image: string, size: number, rows = 1, cols = 1) {
        return {
            src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
            srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
        };
    }

    return (
        <section className="project" id="projects">
            <ImageList
                cols={useDetectMobile() ? 1 : 3}
                gap={25}
                rowHeight={useDetectMobile() ? 'auto' : 750}
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
                                    backgroundColor: 'rgba(255,119,43,0.7)',
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
                                    fontSize: '1rem',
                                },
                            },
                        }}
                        key={uuidv4()}
                        cols={useDetectMobile() ? 1 : item.col}
                        rows={item.row || 1}
                    >
                        <img
                            className="project__gallery__img"
                            {...srcset(item.img[0], 100, item.row, item.col)}
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
